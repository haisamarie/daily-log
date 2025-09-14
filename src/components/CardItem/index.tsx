import { time } from 'console';
import styles from './styles.module.css';

type Props = {
  title: string;
  date: string;
  description?: string;
  imageUrl?: string;
};

const CardItem = ({ title, date, description, imageUrl }: Props) => {
  return (
    <div className={styles.cardItem}>
      <img
        className={styles.cardItemImage}
        src={imageUrl || '/images/img.png'}
        alt=""
        width={360}
        height={240}
      />
      <div className={styles.cardItemContent}>
        <h3 className={styles.cardItemTitle}>{title}</h3>
        <p className={styles.cardItemDate}>
          <time dateTime={date}>{date}</time>
        </p>
        <p className={styles.cardItemDescription}>{description}</p>
      </div>
    </div>
  );
};
export default CardItem;
