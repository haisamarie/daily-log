export const toPublicPath = (src?: string) => {
  if (!src) return undefined;
  const s = src.trim();
  if (/^https?:\/\//.test(s)) return s; // 外部URL
  if (s.startsWith('/')) return s; // 既に絶対
  return `/${s.replace(/^\.?\//, '')}`; // 相対 → 絶対（先頭に / を付ける）
};
