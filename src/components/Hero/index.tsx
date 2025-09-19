import styles from './styles.module.css';

type Props = {
  title?: string;
  subText?: string;
  imageUrl?: string;
};

const Hero = ({ title, subText, imageUrl }: Props) => {
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
        <p className={styles.heroDescription}>{subText}</p>
      </div>
      {imageUrl ? (
        <img src={imageUrl} alt="" width={1400} height={420} className={styles.heroImage} />
      ) : (
        <picture className={styles.heroImage}>
          <source type="image/avif" srcSet="/images/hero.avif" />
          <source type="image/webp" srcSet="/images/hero.webp" />
          <img src="/images/hero.png" alt="サムネイル画像" width={1400} height={420} />
        </picture>
      )}
    </div>
  );
};
export default Hero;
