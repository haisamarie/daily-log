import BlogDetail from '@/features/blog/blogDetail';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    return { slug };
  });
}

export default function BlogDetailPage() {
  return <BlogDetail />;
}
