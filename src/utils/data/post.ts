import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// 記事の場所を指定
const postDirectory = path.join(process.cwd(), 'content/posts');

//投稿数

//記事データを取得する関数
export async function getPostData() {
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
