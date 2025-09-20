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
  thumbnail?: string;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.card}>
      {items.map(({ slug, title, date, description, thumbnail }) => (
        <CardItem
          slug={slug}
          key={slug}
          title={title}
          date={date}
          description={description}
          thumbnail={thumbnail}
        />
      ))}
    </div>
  );
};
export default Card;
