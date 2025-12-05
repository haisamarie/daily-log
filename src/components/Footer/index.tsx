import styles from './styles.module.css';
type Props = {
  name: string;
  description: string;
  sns?: { platform: string; url: string }[];
};
const Footer = ({ name, description, sns }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.profileContent}>
        <div className={styles.profileText}>
          <h2 className={styles.profileTitle}>Profile</h2>
          <p className={styles.profileName}>name：{name}</p>
          <p className={styles.profileDescription}>{description}</p>
          <ul className={styles.profileSns}>
            {sns?.map((sns, index) => (
              <li className={styles.profileSnsItem} key={index}>
                <a href={sns.url} target="_blank" rel="noopener noreferrer">
                  {sns.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.copy}>© Copyright 2025 mari no kiroku.</div>
    </footer>
  );
};
export default Footer;
