import styles from './styles.module.css';
import Link from 'next/link';
import DefaultImg from '@/assets/images/img.jpg';

type Props = {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
};

const CardItem = ({ slug, title, date, thumbnail }: Props) => {
  return (
    <Link href={`/blog/${slug}`} className={styles.cardItem}>
      <div className={styles.cardItemImageWrap}>
        <img
          className={styles.cardItemImage}
          src={thumbnail ? thumbnail : DefaultImg.src}
          alt=""
          width={360}
          height={240}
        />
      </div>

      <div className={styles.cardItemContent}>
        <h3 className={styles.cardItemTitle}>{title}</h3>

        <p className={styles.cardItemDate}>
          <time dateTime={date}>{date}</time>
        </p>
      </div>
    </Link>
  );
};
export default CardItem;
