"""Validate the public MANATY LAB catalog with Python's standard library."""
import datetime
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit

GRADES = {"j1", "j2", "j3", "high"}
LANGUAGES = {"ja", "en", "zh"}
ACCENTS = {"mint", "violet", "peach", "sky", "yellow"}
ILLUSTRATIONS = {"mole", "detective", "blocks", "trig", "log", "numberline"}


def require(condition, message):
    if not condition:
        raise ValueError(message)


def nonempty(value):
    return isinstance(value, str) and bool(value.strip())


def translation(value, context):
    require(isinstance(value, dict) and value.keys() == LANGUAGES
            and all(map(nonempty, value.values())), f"{context}: expected ja/en/zh text")


def date(value, context):
    require(isinstance(value, str) and re.fullmatch(r"\d{4}-\d{2}-\d{2}", value),
            f"{context}: expected YYYY-MM-DD")
    datetime.date.fromisoformat(value)


def https(value, context):
    require(nonempty(value) and not any(char.isspace() for char in value), f"{context}: invalid URL")
    url = urlsplit(value)
    require(url.scheme == "https" and url.hostname and not url.username and not url.password
            and not (url.hostname == "github.com" and url.path.lower().startswith("/manaty-bit/math-app-factory")),
            f"{context}: expected public HTTPS URL")


def unique_list(values, allowed, context, optional=False):
    require(isinstance(values, list) and (optional or bool(values))
            and all(isinstance(value, str) and value in allowed for value in values)
            and len(values) == len(set(values)), f"{context}: invalid, empty, or duplicate values")


def index(entries, context):
    require(isinstance(entries, list) and entries, f"{context}: expected nonempty list")
    by_id = {}
    for entry in entries:
        identifier = entry["id"]
        require(isinstance(identifier, str) and re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", identifier)
                and identifier not in by_id, f"{context}: invalid or duplicate ID {identifier!r}")
        by_id[identifier] = entry
    return by_id


def validate(data):
    require(data["version"] == 3, "expected catalog schema version 3")
    units = index(data["units"], "units")
    purposes = index(data["purposes"], "purposes")
    apps = index(data["apps"], "apps")
    for identifier, unit in units.items():
        require(unit["grade"] in GRADES, f"{identifier}: unknown grade")
        translation(unit["label"], identifier)
    for identifier, purpose in purposes.items():
        translation(purpose["label"], identifier)

    for identifier, app in apps.items():
        require(nonempty(app["title"]), f"{identifier}: missing title")
        require(app["status"] in {"available", "coming"}, f"{identifier}: invalid status")
        unique_list(app["grades"], GRADES, f"{identifier}.grades")
        unique_list(app["units"], units, f"{identifier}.units")
        require(all(units[unit]["grade"] in app["grades"] for unit in app["units"]),
                f"{identifier}: a unit grade is absent from grades")
        unique_list(app["purposes"], purposes, f"{identifier}.purposes")
        unique_list(app["languages"], LANGUAGES, f"{identifier}.languages", optional=True)
        translation(app["description"], identifier)
        if "keywords" in app:
            translation(app["keywords"], f"{identifier}.keywords")
        require(app["thumbnail"]["accent"] in ACCENTS and app["thumbnail"]["illustration"] in ILLUSTRATIONS,
                f"{identifier}: invalid thumbnail")
        for field in ("publishedAt", "updatedAt"):
            if app[field] is not None:
                date(app[field], f"{identifier}.{field}")
        if app["publishedAt"] and app["updatedAt"]:
            require(app["publishedAt"] <= app["updatedAt"], f"{identifier}: update predates release")
        require(app["version"] is None or nonempty(app["version"]), f"{identifier}: invalid version")
        require(isinstance(app["history"], list) and isinstance(app["variants"], list),
                f"{identifier}: expected history and variants lists")
        if app["status"] == "available":
            https(app["url"], identifier)
            if app["sourceUrl"] is not None:
                https(app["sourceUrl"], identifier)
        else:
            require(all(app[key] is None for key in ("url", "sourceUrl", "publishedAt", "updatedAt"))
                    and not app["variants"] and not app["history"], f"{identifier}: preparation entry exposes release data")

        translation(app["details"]["learning"], f"{identifier}.learning")
        for key in ("game", "stage", "devices", "duration", "classroom"):
            if key in app["details"]:
                translation(app["details"][key], f"{identifier}.{key}")
        for key in ("certificate", "nameInput"):
            if key in app["details"]:
                require(isinstance(app["details"][key], bool), f"{identifier}.{key}: expected boolean")
        for event in app["history"]:
            date(event["date"], identifier)
            translation(event["summary"], identifier)
            if event.get("sourceUrl"):
                https(event["sourceUrl"], identifier)
            require(app["updatedAt"] and event["date"] <= app["updatedAt"], f"{identifier}: update dates disagree")
        for variant in app["variants"]:
            translation(variant["label"], identifier)
            https(variant["url"], identifier)
    return len(apps)


if __name__ == "__main__":
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "apps.json"
    try:
        count = validate(json.loads(path.read_text(encoding="utf-8")))
    except (OSError, ValueError, KeyError, TypeError, AttributeError) as error:
        sys.exit(f"Catalog validation failed: {error}")
    print(f"Catalog valid: {count} entries")
