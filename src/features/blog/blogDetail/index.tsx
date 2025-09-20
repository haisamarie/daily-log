import Hero from '@/components/Hero';
import Main from '@/components/Main';
import styles from './styles.module.css';

type Post = {
  title: string;
  date: string;
  description?: string;
};

type BlogDetailProps = {
  post: Post;
  contentHtml: string;
};

const BlogDetail = ({ post, contentHtml }: BlogDetailProps) => {
  const { title, date } = { ...post };
  return (
    <>
      <Hero title={title} subText={date} imageUrl="/images/pc.jpg" />
      <Main>
        <div className={styles.wrap}>
          <div className={styles.prose} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </Main>
    </>
  );
};
export default BlogDetail;
