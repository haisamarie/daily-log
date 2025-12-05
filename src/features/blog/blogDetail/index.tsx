import Main from '@/components/Main';
import styles from './styles.module.css';

type Post = {
  title: string;
  date: string;
  categories?: string[];
};

type BlogDetailProps = {
  post: Post;
  contentHtml: string;
};

const BlogDetail = ({ post, contentHtml }: BlogDetailProps) => {
  const { title, date, categories } = post;
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.categories}>
        {categories?.map((category, index) => (
          <li key={`${category}-${index}`} className={styles.category}>
            {category}
          </li>
        ))}
      </ul>
      <p className={styles.date}>
        <time dateTime={date}>{date}</time>
      </p>

      <Main>
        <div className={styles.wrap}>
          <div className={styles.prose} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </Main>
    </>
  );
};
export default BlogDetail;
