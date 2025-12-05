import styles from './styles.module.css';
import CardItem from '@/components/CardItem';
type CardProps = {
  items: Item[];
};
type Item = {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
  summary?: string;
};

const Card = ({ items }: CardProps) => {
  return (
    <div className={styles.card}>
      {items.map(({ slug, title, date, categories, summary }, index) => (
        <CardItem
          slug={slug}
          key={index}
          title={title}
          date={date}
          categories={categories}
          summary={summary}
        />
      ))}
    </div>
  );
};
export default Card;
