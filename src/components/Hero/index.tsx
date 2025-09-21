import styles from './styles.module.css';
import DefaultImg from '@/assets/images/img.jpg';

type Props = {
  title?: string;
  subText?: string;
  thumbnail?: string;
};

const Hero = ({ title, subText, thumbnail }: Props) => {
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
      <img
        className={styles.heroImage}
        src={thumbnail ? thumbnail : DefaultImg.src}
        alt=""
        width={1400}
        height={420}
      />
    </div>
  );
};
export default Hero;
