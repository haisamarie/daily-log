import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  thumbnail?: string;
};

const CardItem = ({ slug, title, date, description, thumbnail }: Props) => {
  return (
    <Link href={`/blog/${slug}`} className={styles.cardItem}>
      <div className={styles.cardItemImageWrap}>
        {thumbnail ? (
          <img className={styles.cardItemImage} src={thumbnail} alt="" width={360} height={240} />
        ) : (
          ''
        )}
        <h3 className={styles.cardItemTitle}>{title}</h3>
      </div>

      <div className={styles.cardItemContent}>
        <p className={styles.cardItemDate}>
          <time dateTime={date}>{date}</time>
        </p>
        <p className={styles.cardItemDescription}>{description}</p>
      </div>
    </Link>
  );
};
export default CardItem;
