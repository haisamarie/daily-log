import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
type Post = {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
  summary?: string;
};
type PostDetail = {
  slug: string;
  title: string;
  date: string;
  content: string;
  categories?: string[];
};

// 記事の場所を指定
const postDirectory = path.join(process.cwd(), 'content/posts');

//記事データを取得する関数
export function getPostData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData: Post[] = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const matterResult = matter(fileContents);

      const rawSummary = matterResult.content.slice(0, 200);

      // 簡易的にMarkdown記号を除去
      const summary = rawSummary
        .replace(/[#_*`>~\-\[\]\(\)!]/g, '') // # * _ ` > ~ - [ ] ( ) ! を削除
        .replace(/\n+/g, ' ') // 改行をスペースに
        .trim();
      return {
        slug,
        ...(matterResult.data as Omit<Post, 'slug'>),
        summary,
      };
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  return { posts: allPostsData };
}

// slugを元に記事データを取得する関数
export function getPostBySlug(slug: string): PostDetail | null {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    categories: data.categories,
    content,
  };
}

//全記事のslug一覧を返す
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
