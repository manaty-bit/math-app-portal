# MANATY LAB

> **Play. Learn. Discover.**
>
> 遊びから生まれる、数学の「わかった！」

学校から独立した、無料の数学学習アプリのポータルサイトです。

## 構成

- `index.html` — トップページ・アプリ検索・紹介・YouTube/X案内
- `styles.css` — モバイル・PCレスポンシブ対応
- `app.js` — 日本語・英語・簡体中国語の切替、検索、学年フィルター、ミニ数直線
- `apps.json` — 公開・準備中アプリの登録データ
- `.nojekyll` — GitHub Pages用

外部CDN・認証・分析タグ・Cookieなし。JavaScriptのみで動作します。

## アプリを追加する

`apps.json` の `apps` に1件追加してください。

```json
{
  "id": "unique-game-slug",
  "title": "GAME TITLE",
  "grade": "j1",
  "category": "arithmetic",
  "status": "coming",
  "url": null,
  "sourceUrl": null,
  "accent": "mint",
  "illustration": "numberline",
  "description": {"ja": "紹介", "en": "Description", "zh": "简介"},
  "topic": {"ja": "単元", "en": "Topic", "zh": "主题"}
}
```

- `status`: `coming` / `available`。承認前は必ず `coming` にする。
- `url`: **実際に公開され、動作を確認したサイトURLのみ**。制作途中の private repo リンクを公開しない。
- `grade`: `j1`, `j2`, `j3`, `high`。
- `accent`: `mint`, `violet`, `peach`, `sky`, `yellow`。
- `illustration`: `mole`, `detective`, `blocks`, `trig`, `log`, `numberline`。
- 既存アプリが日英中に対応していることを意味するものではありません。ポータル自体が3言語対応です。

## SNSを開設したら

`app.js` の `SOCIAL` に確認済みの公式URLを設定すると「準備中」がリンクに切り替わります。

```js
const SOCIAL={youtube:'https://www.youtube.com/@YOUR_CHANNEL',x:'https://x.com/YOUR_HANDLE'};
```

※ `YOUR_CHANNEL` / `YOUR_HANDLE` は説明用の例で、実在のアカウントとは無関係です。

## 公開方法

GitHub Pages: Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save.

想定URL： https://manaty-bit.github.io/math-app-portal/

## 公開の品質ルール

- 私立学校・学校行事・児童生徒の個人情報を載せない。学校の公式サイトではない。
- private な `manaty-bit/math-app-factory` 内で制作中のアプリは、承認されるまで公開しない。
- 生徒の提出画像・氏名・学習履歴をこのポータルで収集しない。
- ゲーム内の賞状の有無・対応言語はアプリごとに異なる。ポータルが一律に保証する記載にしない。
- 実際に使用する前にアプリのリンク・数学内容・ブラウザ対応を最終確認する。

## ローカルで確認

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開く（ブラウザの `file://` では `apps.json` の読み込みが制限される場合があります）。
