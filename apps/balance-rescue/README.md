# てんびんレスキュー / Balance Rescue

MANATY LAB · 1.0.0

中学1年「一次方程式」の教材です。てんびんの釣り合いを保って式を変形し、知っている形に直して解きます。ブラウザで `index.html` を開くと遊べます。操作と賞状は日本語・英語に対応しています。

## 遊び方

- **クイズ版**では、両辺にする操作と数を選びます。**落ちゲー版**ではカードを選ぶと、重力で落ちて着地したときに式が変わります。版を切り替えても同じ問題を続けられます。
- ステージ0で操作を練習し、その後は、おもりを引く、同じ組に分ける、両辺にある文字を整理する、小数を整数にする、分数を整数にする、かっこの符号を判断する、の順に進みます。20問と導入1問です。
- かっこを外す問題では、展開する2項の符号をそれぞれ選びます。まちがえた箇所を見直してから進めます。落ちゲー版では符号の誤答を＋1手とします。
- 両辺に同じ操作をすると、遠回りでも式がその場で変わります。落ちゲー版では着地後に適用の形を一瞬表示してから整理します。適用した式は変形の履歴にも残ります。負の項と分数も表示し、分数を丸めずに計算します。操作に使う数は正の整数です。式の各項の分子と共通分母は絶対値10億まで表示できます。出題される解は正の整数です。

## 記録と賞状

- 練習のクリア時に、両モード共通の問題別スコアを表示します。1,000点から考えた1秒ごとに10点、1手ごとに60点を引き、最低0点です。演出中、ダイアログを見ている間、タブを離れている間を除きます。取り消しても使った手数は残ります。スコアは賞状の判定から独立しており、60秒チャレンジは解けた問題数で競います。

- ステージの全問をクリアすると銀賞状、かっこの符号を最初の判定で正解できれば金賞状です。等式を保つ遠回りは誤答として扱いません。符号を選ぶステージの賞状には符号の初回正答数を載せ、ほかのステージでは修了した問題数を載せます。全学習ステージの銀以上で卒業証明書を発行できます。
- 60秒チャレンジは整数の方程式を何問解けるかを競います。時計は固定で、ヒントも使えます。普段の練習とは別の記録です。
- 記録はこのブラウザに保存し、学習記録画面から消去できます。賞状の名前は任意です。PNGにだけ使い、端末の記録に保存したり外部へ送信したりしません。
- PNGは学習のふり返りや自主提出用です。発行日時や画像は編集できるため、本人確認や真正性の証明には使用できません。

## 授業で使う

ステージ3では「左側だけに文字を残す」、ステージ4・5では「整数の式に戻す」、ステージ6では「展開して既習の形に直す」を意識させます。例えば `3x = 2(x + 2)` を画面で展開した後、紙の上で `3x − 2x = 4`、`x = 4` と書き、元の式に代入して確かめます。

## 利用条件・著作権

© 2026 MANATY LAB. All rights reserved.

本教材は、個人学習、家庭学習、学校・学習塾等での授業（有料の授業・講座を含む）に無料でご利用いただけます。

公開URLの共有、Google Classroom等へのリンク掲載、授業での画面投影、学習成果としての賞状の保存・提出、SNS・YouTube・ブログ等での教材紹介は自由に行えます。

第三者素材等を除き、著作権はMANATY LABの権利者に帰属します。第三者素材の個別の権利条件を尊重し、本条件は法令やGitHub利用規約に基づく権利を妨げません。

権利者の許可なく、ソースコードや改変版を再配布すること、教材そのものを販売すること、有料コンテンツとして再配信することは禁止します。

## Terms of Use

© 2026 MANATY LAB. All rights reserved.

This learning resource is free to use for individual study, home learning, and instruction at schools, tutoring centers, and similar educational settings, including paid lessons and courses.

You may share the public URL, post links in Google Classroom or similar services, project the resource during lessons, save or submit certificates as evidence of learning, and introduce the resource on social media, YouTube, blogs, and similar platforms.

Except for third-party materials and similar content, copyright belongs to the rights holder of MANATY LAB. Individual rights and conditions for third-party materials must be respected. These terms do not restrict rights granted by applicable law or the GitHub Terms of Service.

Without permission from the rights holder, redistribution of the source code or modified versions, sale of the resource itself, and redistribution as paid content are prohibited.
