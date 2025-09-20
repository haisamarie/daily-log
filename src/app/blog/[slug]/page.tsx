import BlogDetail from '@/features/blog/blogDetail';
import { getAllSlugs, getPostBySlug } from '@/utils/data/post';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const processedContent = await remark().use(remarkHtml).process(post.content);
  const contentHtml = processedContent.toString();
  return <BlogDetail post={post} contentHtml={contentHtml} />;
}
