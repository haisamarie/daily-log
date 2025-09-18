import styles from './styles.module.css';
import CardItem from '@/components/CardItem';
type CardProps = {
  items: Item[];
};
type Item = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.card}>
      {items.map(({ slug, title, date, description }) => (
        <CardItem slug={slug} key={slug} title={title} date={date} description={description} />
      ))}
    </div>
  );
};
export default Card;
