import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
};

const CardItem = ({ slug, title, date, categories }: Props) => {
  return (
    <Link href={`/blog/${slug}`} className={styles.cardItem}>
      <div className={styles.cardItemContent}>
        <h3 className={styles.cardItemTitle}>{title}</h3>

        <p className={styles.cardItemDate}>
          <time dateTime={date}>{date}</time>
        </p>
        <p>
          デイヴィッド・エドモンズの『シュリック教授殺害事件』（児玉聡・林和雄
          監訳、晶文社）刊行記念ブックトークです。登壇者は児玉聡・朱喜哲・吉川浩満の三氏です。オンラインでも参加できます。
        </p>
        {categories?.map((category, index) => (
          <ul className={styles.categories}>
            <li key={`${category}-${index}`} className={styles.category}>
              {category}
            </li>
          </ul>
        ))}
      </div>
    </Link>
  );
};
export default CardItem;
