import Image from "next/image";
import styles from './styles.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}><span className={styles.strong}>鞠</span>の記録</h1>
      <Image className={styles.heroImage} src="/images/hero.png" alt="" width={1400} height={520} />
    </div>
  );
};
export default Hero;
