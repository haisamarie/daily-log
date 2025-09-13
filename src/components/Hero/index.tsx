import Image from "next/image";
import styles from './styles.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}><span className={styles.strong}>鞠</span>の記録</h1>
        <p className={styles.heroDescription}>キャッチアップした技術的な内容をアップしていきます。</p>
      </div>
      <Image className={styles.heroImage} src="/images/hero.png" alt="" width={1400} height={420} />
    </div>
  );
};
export default Hero;
