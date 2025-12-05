import styles from './styles.module.css';
import CardItem from '@/components/CardItem';
type CardProps = {
  items: Item[];
};
type Item = {
  slug: string;
  title: string;
  date: string;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.card}>
      {items.map(({ slug, title, date }) => (
        <CardItem slug={slug} key={slug} title={title} date={date} />
      ))}
    </div>
  );
};
export default Card;
