import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Hero = ({
  title,
  description = ' キャッチアップした技術的な内容をアップしていきます。',
  imageUrl = '/images/hero.png',
}: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        {title ? (
          <h1 className={styles.heroTitle}>{title}</h1>
        ) : (
          <h1 className={styles.heroTitle}>
            <span className={styles.strong}>鞠</span>の記録
          </h1>
        )}
        <p className={styles.heroDescription}>{description}</p>
      </div>
      <Image className={styles.heroImage} src={imageUrl} alt="" width={1400} height={420} />
    </div>
  );
};
export default Hero;
