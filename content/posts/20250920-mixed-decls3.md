---
title: 'Sassのmixed-decls警告を自動で解消するStylelintカスタムルールを作ってみた'
date: '2025-09-21'
---

Sass のネスト機能は便利ですが、ネストされたルール（`@media`や入れ子セレクタ）の後に直接プロパティを宣言すると、将来的に挙動が変更される可能性があるため、`mixed-decls`の警告が表示されます。
既存コードが大量にある場合、手動で修正するのは大変です。そこで、`--fix`実行時に自動で警告を解消できる Stylelint カスタムルールを作成しました。

---

### 警告の説明

Sass で`mixed-decls`警告が発生するのは、ネストルールの後にプロパティ宣言を書くと、将来の CSS 仕様に合わせて振る舞いが変わる可能性があるためです。例えば以下のような警告が表示されます：

```text
Deprecation Warning [mixed-decls]: Sass's behavior for declarations that appear after nested
rules will be changing to match the behavior specified by CSS in an upcoming
version. To keep the existing behavior, move the declaration above the nested
rule. To opt into the new behavior, wrap the declaration in `& {}`.
```

https://sass-lang.com/documentation/breaking-changes/mixed-decls/

- **現行動作**：ネスト後に書かれた宣言は自動的にネスト内へ移動され、既存のビジュアル結果を維持します。
- **将来動作**：仕様通り、入れ子の後に宣言を書くとネスト外の宣言となるため、意図しないスタイル崩れが起きる可能性があります。

手動で修正する場合は、警告に従って宣言をネスト前に移動するか、`& {}`でラップして新しい仕様を明示的に選択します。

---

### カスタムルールの概要

- **ルール名**：`custom/no-nested-decl`
- **禁止内容**：ネストされた`@media`（`atrule`）や入れ子の CSS ブロック（`rule`）の後に直接`decl`（プロパティ宣言）を書くこと
- **自動修正**：`--fix`実行時に、ネスト後の宣言をネスト直前に移動します

---

### 本体の実装 (`plugins/stylelint-custom-rule.js`)

```js
import stylelint from 'stylelint';

const ruleName = 'custom/no-nested-decl';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'ネスト後に直接プロパティ宣言を書くことは禁止されています。',
});

export default stylelint.createPlugin(ruleName, (_, __, context) => (root, result) => {
  root.walkRules((rule) => {
    let nestedFound = false;
    const nodesToMove = [];

    // ルール内のノードを順に走査
    rule.nodes.forEach((node) => {
      if (node.type === 'atrule' || node.type === 'rule') {
        nestedFound = true;
      }
      if (node.type === 'decl' && nestedFound) {
        if (context.fix) {
          nodesToMove.push(node);
        } else {
          stylelint.utils.report({ message: messages.rejected, node, result, ruleName });
        }
      }
    });

    // 自動修正: 移動対象ノードをネスト直前に挿入
    if (context.fix && nodesToMove.length) {
      const firstNested = rule.nodes.find((n) => n.type === 'atrule' || n.type === 'rule');
      nodesToMove.forEach((n) => n.remove());
      nodesToMove.forEach((n) => {
        if (firstNested) {
          rule.insertBefore(firstNested, n);
        } else {
          rule.append(n);
        }
      });
    }
  });
});

export { ruleName, messages };
```

### ポイント

1. `rule.nodes`を全走査し、最初のネストノード以降に出現した`decl`を検出
2. `context.fix`時に移動対象をリストアップし、ネスト直前へ順次移動

---

### Stylelint への組み込み

1. **カスタムルールのファイルを配置**  
   プロジェクトルートに`stylelint-custom-rule.js`を追加します。

2. **設定ファイルの編集**

```
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['./stylelint-custom-rule.mjs'],
  rules: {
    'custom/no-nested-decl': true,
  },
}
```

---

### 実行例

```bash
# エラー検知のみ
npx stylelint "src/**/*.scss"
# → ネスト後のdeclにエラーが出る

# 自動修正付き
npx stylelint "src/**/*.scss" --fix
# → 宣言がネスト直前に自動的に移動
```

---

### before / after イメージ

```diff
 .card {
-  @media (min-width: 768px) {
-    font-size: 16px;
-  }
-  padding: 8px;
+  padding: 8px;
+  @media (min-width: 768px) {
+    font-size: 16px;
+  }
 }
```
