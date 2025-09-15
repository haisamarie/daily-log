import fs from 'fs';

export type PostMeta = {
  slug: string; // URL 用
  title: string; // 記事タイトル
  date?: string; // 公開日 (YYYY-MM-DD 推奨)
  tags?: string[]; // タグ (任意)
  excerpt?: string; // 記事冒頭のサマリー
};

const getAllSlug = (dirPath: string): string[] => {
  return fs.readdirSync(dirPath).map((fileName) => {
    return fileName.replace(/\.mdx?$/, '');
  });
};
export default getAllSlug;
