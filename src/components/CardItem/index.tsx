import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
  summary?: string;
};

const CardItem = ({ slug, title, date, categories, summary }: Props) => {
  console.log('categories', categories);
  return (
    <Link href={`/blog/${slug}`} className={styles.cardItem}>
      <div className={styles.cardItemContent}>
        <h3 className={styles.cardItemTitle}>{title}</h3>
        <p className={styles.cardItemDate}>
          <time dateTime={date}>{date}</time>
        </p>
        <p className={styles.cardItemSummary}>{summary}</p>
        <ul className={styles.categories}>
          {categories?.map((category, index) => (
            <li key={`${category}-${index}`} className={styles.category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
export default CardItem;
