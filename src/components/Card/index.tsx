import styles from './styles.module.css';
import CardItem from '@/components/CardItem';
type CardProps = {
  items: Item[];
};
type Item = {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.card}>
      {items.map(({ slug, title, date, thumbnail }) => (
        <CardItem slug={slug} key={slug} title={title} date={date} thumbnail={thumbnail} />
      ))}
    </div>
  );
};
export default Card;
