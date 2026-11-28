# MANATY LAB

**Play. Learn. Discover.**
遊びから生まれる、数学の「わかった！」

[公開ポータル](https://manaty-bit.github.io/math-app-portal/)は GitHub Pages 上の静的サイトです。日本語・英語・簡体字中国語で利用でき、教材ごとの対応言語はカードと詳細に表示します。お気に入りはブラウザ内に保存します。

## ローカル確認

```sh
python3 scripts/validate.py
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。JSON を取得するため HTTP 経由で確認します。

## 教材データの登録

教材の追加・更新は `apps.json` で行います。

| 項目 | 登録方法 |
|---|---|
| `id`, `title` | 既存IDは維持。タイトルは教材の公開名です。 |
| `grades`, `units`, `purposes` | 複数指定可能。単元と目的の参照先は同じJSONにあります。単元の学年も `grades` に含めます。 |
| `status`, `url`, `sourceUrl` | 教員の承認後、公開先で起動を確認してから `available` と公開HTTPS URLを登録します。準備中は `coming`、URLはいずれも `null` です。 |
| `languages`, `description` | 対応確認済み言語のみ `ja`、`en`、`zh` で登録。未確認の言語一覧は空配列。紹介文は3言語分を登録します。 |
| `thumbnail` | `accent` は mint / violet / peach / sky / yellow、`illustration` は mole / detective / blocks / trig / log / numberline / linepilot / twincipher。 |
| `details` | `learning` は必須。任意で `game`、`stage`、`devices`、`duration`、`classroom` の3言語文、`certificate`・`nameInput` の真偽値を設定します。未確認の項目は省略できます。 |
| `publishedAt`, `updatedAt`, `version` | 確認できる資料に基づいて登録。日付は `YYYY-MM-DD`、不明は `null`。日付のない教材は新着欄に表示しません。 |
| `history`, `variants` | 履歴は `date`、3言語の `summary`、任意の `sourceUrl`。公開済み派生版は3言語の `label` と `url`。該当なしは空配列です。 |
| `keywords` | 任意。教材名や単元名以外の検索語を3言語で追加できます。 |

中学の22単元と高校の内容別分類は、コードの変更なしに `units` に追加できます。用途も `purposes` で管理します。公開データに非公開の審査記録・ソース・個人情報を載せないでください。YouTube・Xは公式URL確定まで準備中として表示します。確定後は `app.js` の `socialUrls` に設定します。

## 公開確認

1. 変更をDraft PRで提出し、データ検証、PC・タブレット・スマートフォンでの操作、既存教材のリンクを確認します。
2. 教員承認後にマージし、GitHub Pagesの `main` / `(root)` の配信成功を確認します。
3. 既存の公開URLから3言語、検索、詳細、お気に入り、既存の起動リンクを確認します。
