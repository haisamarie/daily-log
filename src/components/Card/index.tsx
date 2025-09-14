import styles from './styles.module.css';
import CardItem from '@/components/CardItem';

const Card = () => {
  return (
    <div className={styles.card}>
      <CardItem
        title="Vol.1 風の又三郎"
        date="2021年06月12日"
        description="風の又三郎のあらすじと感想"
      />
      <CardItem title="Vol.2 宮沢賢治　セロ弾きのゴーシュ" date="2021年06月13日" />
      <CardItem title="Vol.3 風の又三郎" date="2021年06月14日" />
      <CardItem title="Vol.4 宮沢賢治　セロ弾きのゴーシュ" date="2021年06月15日" />
      <CardItem
        title="Vol.5 風の又三郎"
        date="2021年06月16日"
        description="風の又三郎のあらすじと感想"
      />
    </div>
  );
};
export default Card;
