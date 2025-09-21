import Hero from '@/components/Hero';
import Main from '@/components/Main';
import styles from './styles.module.css';

type Post = {
  title: string;
  date: string;
  thumbnail?: string;
};

type BlogDetailProps = {
  post: Post;
  contentHtml: string;
};

const BlogDetail = ({ post, contentHtml }: BlogDetailProps) => {
  const { title, date, thumbnail } = post;
  return (
    <>
      <Hero title={title} subText={date} thumbnail={thumbnail} />
      <Main>
        <div className={styles.wrap}>
          <div className={styles.prose} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </Main>
    </>
  );
};
export default BlogDetail;
