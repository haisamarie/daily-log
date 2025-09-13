import Image from 'next/image';

import styles from './styles.module.css';
import { type } from 'os';

const CardItem = () => {
  return (
    <div className={styles.cardItem}>
      <Image
        className={styles.cardItemImage}
        src="/images/img.png"
        alt=""
        width={360}
        height={240}
      />

      <div className={styles.cardItemContent}>
        <h3 className={styles.cardItemTitle}>Vol.2 宮沢賢治　セロ弾きのゴーシュ</h3>
        <p className={styles.cardItemDate}>
          <time dateTime="2021-06-13">2021年06月13日</time>
        </p>
        <p className={styles.cardItemDescription}>
          だいは畑の運搬ゴーシュげを弓をつっ込ん頭たた。またあんまり生なたという表情ました・・・
        </p>
      </div>
    </div>
  );
};
export default CardItem;
