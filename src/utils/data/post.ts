import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};
type PostDetail = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
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
      return {
        slug,
        ...(matterResult.data as Omit<Post, 'slug'>),
      };
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  return { posts: allPostsData };
}

// slugを元に記事データを取得する関数
export function getPostBySlug(slug: string): PostDetail {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
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
