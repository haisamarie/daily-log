---
title: 'Core Web Vitalsについてまとめ'
date: '2025-09-21'
---

## 1. はじめに

Web サイトのパフォーマンスは、ユーザー体験や SEO、ビジネス成果に直結します。Google が提唱する指標群「Core Web Vitals」をキャッチアップしつつ、計測・改善手法を調べた。

## 2. Core Web Vitals とは

ページの読み込みパフォーマンス、インタラクティブ性、視覚的安定性に関する実際のユーザーエクスペリエンスを測定する一連の指標のこと。

## ３. Core Web Vitals の指標

### LCP（Largest Contentful Paint）

読み込みパフォーマンス。メインコンテンツ要素（大きな画像やテキストブロックなど）が表示完了するまでの時間を測定する。
良好：2.5 秒未満、改善必要：2.5〜4 秒、不良：4 秒以上

[https://web.dev/articles/lcp?hl=ja#what-is-lcp](https://web.dev/articles/lcp?hl=ja#what-is-lcp)

### INP（Interaction to Next Paint）

応答性。ユーザー操作（クリックやタップなど）から次のペイントが完了するまでの遅延を記録し、インタラクションの応答性を評価する。
良好： 200 ミリ秒未満、改善必要：200〜500 ミリ秒、不良：500 ミリ秒以上

[https://web.dev/articles/inp?hl=ja](https://web.dev/articles/inp?hl=ja)

### CLS（Cumulative Layout Shift）

レンダリング中に発生する視認可能なレイアウトシフトの累積スコアを評価する。
良好：0.1 未満、改善必要：0.1〜0.25、不良：0.25 以上

[https://web.dev/articles/cls?hl=ja](https://web.dev/articles/cls?hl=ja)

## 3. 計測方法

パフォーマンス改善するにはまず、計測・監視することが重要。

### デベロッパーツールによる計測

- Chrome DevTools Performance タブ
  ページの読み込みやインタラクション時のパフォーマンスを記録

- Lighthouse
  Google が無料で提供している Web サイトを分析・診断するための機能。パフォーマンスやアクセシビリティ、SEO などの評価が可能

### JavaScript による計測

- Performance API
  ページの読み込み時間、リソースのロード時間、JavaScript の実行時間、メモリ使用量など、様々なパフォーマンス関連のメトリクスを取得出来る API

[https://developer.mozilla.org/ja/docs/Web/API/Performance_API](https://developer.mozilla.org/ja/docs/Web/API/Performance_API)

### パフォーマンス診断ツール

- Lighthouse CI／CLI
  Lighthouse CI は、Lighthouse を CI/CD パイプラインに組み込み、Web サイトのパフォーマンス、アクセシビリティ、ベストプラクティスなどを自動で計測・保存・可視化できる。

- PageSpeed Insights
  入力した URL のページ速度スコアと Web ページの表示速度改善に必要なアドバイスをしてくれる Google 公式提供の無料ツール

[https://pagespeed.web.dev/](https://pagespeed.web.dev/)

- WebPageTest
  ウェブサイトの表示速度やパフォーマンスを計測・分析するためのオープンソースのツール

[https://www.webpagetest.org/](https://www.webpagetest.org/)

## ４. 最適化戦略

Web パフォーマンス改善の中で代表的な手法を調べた。

### 4.1 画像の最適化

- webp/avif の利用
  jpg/png よりも圧縮効率に優れる webp や avif を採用し同じ画質でファイルサイズを大幅に削減。

- Lazy Loading
  `<img loading="lazy">` を使ってオフスクリーン画像の読み込みを遅延させ、初期ロードのネットワーク負荷を低減

### 4.2 フォント最適化

- プリロードと font-display: swap
  主要フォントは `<link rel="preload" as="font">` で先出しし、CSS で `font-display: swap`を指定すると、フォント読み込み中はシステムフォントで代替表示し、レイアウトシフトを防ぐ

- サブセット化
  実際に使用する文字セットのみを含むサブセットフォントを生成し、フォントファイルサイズを最小化

### 4.3 CSS/JS のデリバリー改善

import() の動的インポートで初期バンドルを細分化し、必要なコードだけをロードすることで、INP や LCP の改善を図る。

### 4.4 サーバー応答時間（TTFB）改善

- CDN キャッシュ
  ユーザーに最も近いサーバーから配信することで、データの移動距離を短くし、初回の応答（TTFB）を速くする。

- Next.js の場合、SSG／ISR の活用
  SSG や ISR で事前ビルドしたページを配信すれば、リクエストごとのサーバー処理を省略でき、高速応答を実現。

---
