# AI就活プロ Design System

大学生向けのAIスキル習得・就職活動支援サービス **AI就活プロ（AI Shukatsu Pro / "DESIGN YOUR CAREER"）** のためのデザインシステムです。

## 1. Context

- **サービス**: AIスキルの習得と就職活動支援を一本の流れにした、大学生向け無料サービス。
- **利用者**: 学部3年〜修士2年の学生が主。副次的に大学キャリアセンター、採用企業。
- **主要プロダクト（このシステムがカバーする面）**
  - **公式サイト（Website）** — サービス紹介・受講生の声・無料登録フォーム
  - **学生アプリ（App）** — ダッシュボード / ES添削 / 面接練習 / 求人検索
- **プロダクト原則** — AIは「答えを出す道具」ではなく「順番を整える相棒」。AIが生成・採点したものは必ずミント色＋AIタグで明示し、最終判断は必ず人（学生）が行う。

### Sources given

| Source | Path | 使い方 |
|---|---|---|
| 参考Webサイトのスクリーンショット | `uploads/www.grust.co.jp_.png` | **トーン＆マナーの参考のみ**。レイアウト・ブランド表現はコピーせず、別ブランドとして再構築。 |

参考にしたのは方向性のみ（余白の大きさ、ラテン大文字ディスプレイ＋細い日本語ゴシックの対比、写真主体、円形矢印アフォーダンス、彩度を抑えた画面）。配色・書体・レイアウト・コピーはすべてAI就活プロ独自のものです。

**コードベース・Figmaファイルの提供はありませんでした。** 数値・コンポーネント仕様はこのシステムで新規に定義したものであり、既存実装からの抽出ではありません。

---

## 2. Content fundamentals（コピーの書き方）

- **語り**: 学生に対して「あなた」。サービス側は基本的に主語を出さず、必要なときだけ「AI就活プロは」。「私たち」は理念パートのみ。
- **敬体**: です・ます。断定は短く。「〜できます」「〜が決まります」。誇張（絶対・必ず内定）は使わない。
- **見出し**: 日本語は句点で終える短い宣言。例）「就活は、情報量ではなく順番で決まる。」「AIは、書き直さない。理由を返す。」「10分の診断から、はじめよう。」
- **読点で間を作る** — 「学びと選考を、ひとつの流れに。」のように読点で呼吸を置くのがこのブランドの癖。
- **アイブロウ（英字ラベル）**: 常に英大文字1〜2語（`SERVICE` `PHILOSOPHY` `VOICE` `AI FEEDBACK`）。日本語は入れない。連番は `01` `02` を上付きで添える。
- **ボタン**: 日本語の短い命令形。「無料ではじめる」「次へ」「反映する」「却下」「回答をはじめる」。「Click here」「送信する」等の汎用語は避ける。
- **数字**: 実績値は等幅（JetBrains Mono）。単位は日本語（社・人・分・点）。根拠のない数字は書かない。
- **AIの語り口**: AIの出力は指摘＋理由の形。「結論が3文目にあります。冒頭に置くと伝わりやすくなります。」命令ではなく提案。必ず「反映する／却下」の人間の選択とセット。
- **絵文字**: 使わない（UIにも本文にも）。感嘆符もほぼ使わない。
- **禁止表現**: 「圧倒的」「必ず内定」「AIにおまかせ」。AIが代行するという言い方はしない。

---

## 3. Visual foundations

### Color
- **Ink（`--ink-*`）** がブランドの黒。純黒ではなくネイビー寄り（`#0A1730`）。反転面・フッター・ヒーローに使用。
- **Signal Blue（`--blue-500` `#2C5BE8`）** が一次アクション。1画面に primary ボタンは1つ。
- **Mint（`--mint-*`）** は **AI専用色**。AIが生成・採点したものにしか使わない（装飾に使うと意味が壊れる）。
- **Sand（`--sand-50`）** は白の連続を切る暖色の紙。実績数値バンドやサービスページのヘッダに。
- 彩度は全体的に低め。セマンティックカラーは面＝淡色、文字＝濃色のペア運用。
- 実装では ramp を直接使わず、**セマンティック別名**（`--text-body` `--surface-card` `--action-primary` …）を参照する。

### Type
- **ディスプレイ = Archivo**（ラテン大文字のみ、800、字送り -.02em、行間 0.92）。`DESIGN YOUR CAREER.` のようにヒーローとセクションの背景マークに使う。日本語をディスプレイサイズで組むときは Zen Kaku の 700。
- **日本語 = Zen Kaku Gothic New**。本文は Light 300、行間 1.95〜2.0、字送り .04em。**日本語の行間は詰めない**のがこのブランドの読み味。
- **数字・ID・日付 = JetBrains Mono**。
- 見出し・本文サイズは `tokens/typography.css` に定義。ヒーロー112 / 見出し38・28・21 / 本文16・15・13。

### Layout & spacing
- 4px 基準スケール。UI内は 4〜24px、**セクション上下は 128px（`--section-pad-y`）**。余白は最後まで削らない。
- コンテンツ幅 1280px、左右余白 40px。本文の最大行長は 64ch。
- ヘッダーは fixed。トップページ最上部では透明、スクロールで白のガラス（`--glass-light` + `--blur-glass`）に切り替わる。**透明＋ブラーはヘッダーとモーダル背景だけ**に許可。
- 罫線（1px `--border-hairline`）が主要な分割手段。カード同士の隙間は 12〜24px。

### Backgrounds & imagery
- 背景は**白 / `--surface-subtle` / `--surface-paper` / ink の4面のみ**。グラデーション背景・パターン・テクスチャは使わない（唯一の例外が写真スクリム）。
- 写真は実写のオフィス・学生・面談風景。彩度低め、寒色寄り、粒子感なし。人物は自然光。
- 写真の上に白文字を置くときは必ずスクリム（`--scrim-hero` / `--scrim-card`）を挟む。
- 大きな英字（`SERVICE` 150px、`--neutral-50`）を背景に敷くのがセクションの装飾手段。イラストは使わない。

### Corners, borders, shadows
- 角丸は **4px が既定**（カード・ボタン・入力）。バッジ2px、写真は **0（直角）**。円形は矢印ボタン・アバター・タグチップのみ。
- 既定のカードは**影なし＋1px罫線**。影が出るのは (1) `interactive` カードのホバー (2) モーダル (3) トースト。
- 影は青みを帯びた低コントラスト（`rgba(10,23,48,.06〜.22)`）。内側影は使わない。

### Motion & states
- イージングは `--ease-standard` (.22,.61,.36,1) が基本、リヴィールは `--ease-out-soft`。時間は 160 / 240 / 420ms。
- 動きはフェード＋数pxの移動のみ。**バウンス・拡大縮小・回転は使わない**。
- **ホバー**: ボタンは1段濃く（`--action-primary-hover`）、アウトラインは薄い面が入る、カードは -3px 上昇＋`--shadow-md`、円形矢印は塗りが反転して矢印が右に2px、ArrowLink は罫線が 32→48px に伸びる。
- **プレス**: `translateY(1px)`。色は変えない。縮小はしない。
- **フォーカス**: Signal Blue の 1px 枠＋`--shadow-focus`（3px, 28%）。
- **無効**: 面 `--neutral-200`、文字 `--neutral-400`、カーソル not-allowed。

---

## 4. Iconography

- **Lucide（MIT, stroke 2px）を CDN から使用**しています。提供素材にアイコンセットが含まれていなかったための**代替**です。ブランド専用のアイコンセットがある場合は差し替えてください。
- 実装は `Icon` コンポーネント（`components/core/Icon.jsx`）。Lucide の SVG を CSS マスクとして読み込み、`currentColor` で着色します。アイコンは自前の色を持たず、必ず親から色を継承します。
- サイズは UI内 14〜18px、機能ブロック 24px以上。線の太さは Lucide 既定（2px）から変えない。
- よく使うグリフ: `arrow-right` `arrow-left` `check` `chevron-down` `x` `sparkles`（AI）`mic`（面接）`file-text`（ES）`search` `map-pin` `bell` `settings` `shield-check`。
- **絵文字は使いません。** Unicode 記号をアイコン代わりに使うこともしません（唯一、AIタグの装飾に `sparkles` グリフを使用）。
- **ロゴはありません。** 提供素材にロゴが含まれていないため、作成していません。ロゴが入る位置には**ブランド名を素の文字で組んだワードマーク**（Zen Kaku Gothic New 900 ＋ `DESIGN YOUR CAREER` のトラッキング .28em）を置いています（`ui_kits/website/SiteChrome.jsx` の `Wordmark`）。正式なロゴデータを支給いただければ差し替えます。
- **写真素材もありません。** UIキット内の写真枠は `MediaFrame` のグレープレースホルダで表示しています。

---

## 5. Index（このリポジトリの案内）

### Root
- `styles.css` — 消費側が読み込む唯一のエントリ（`@import` のみ）
- `thumbnail.html` — デザインシステムのサムネイル
- `SKILL.md` — Agent Skills 互換の入口
- `readme.md` — このファイル

### Tokens — `tokens/`
`fonts.css`（Google Fonts: Archivo / Zen Kaku Gothic New / JetBrains Mono）, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

### Guidelines — `guidelines/`
Design System タブに出る仕様カード（Colors 7枚 / Type 5枚 / Spacing 2枚 / Brand 5枚）。

### Components — `components/`
- **core/** — `Icon` `Button` `CircleButton` `ArrowLink` `Eyebrow` `SectionHeading` `Card` `Badge` `Tag` `Stat` `AiTag` `AiPanel` `MediaFrame`
- **forms/** — `Field` `Input` `Textarea` `Select` `Checkbox` `Radio` `Switch`
- **navigation/** — `Tabs` `StepIndicator`
- **feedback/** — `ProgressBar` `Dialog` `Toast` `Tooltip`

各コンポーネントに `.jsx` / `.d.ts`（props契約）/ `.prompt.md`（使いどころ）が同梱されています。

**Intentional additions**（提供素材にコンポーネント定義がなかったため標準セットを新規作成。うち以下はこのサービス固有の追加）
- `AiTag` / `AiPanel` — AI生成物の明示は本サービスの根幹要件のため。
- `Eyebrow` / `ArrowLink` / `CircleButton` / `Stat` / `MediaFrame` — エディトリアルなトーンを成立させる最小要素。

### UI kits — `ui_kits/`
- **website/** — 公式サイト（HOME / SERVICE / APPLY）。`index.html` で相互遷移。
- **app/** — 学生アプリ（ダッシュボード / ES添削 / 面接練習 / 求人検索）。`index.html` でサイドバー遷移。

---

## 6. Caveats

- フォントは **Google Fonts 版**を使用（オリジナルのフォントファイル支給なし）。指定書体がある場合は `tokens/fonts.css` を差し替えてください。
- アイコンは **Lucide での代替**（上記 Iconography 参照）。
- ロゴ・写真素材は未支給のため作成していません。プレースホルダのままです。
