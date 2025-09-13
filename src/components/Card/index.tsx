import { ReactNode } from 'react';

import styles from './styles.module.css';
import CardItem from '@/components/CardItem';

const Card = () => {
  return (
    <div className={styles.card}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
};
export default Card;
