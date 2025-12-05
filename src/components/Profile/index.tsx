import styles from './styles.module.css';
import GirlImgAvif from '@/assets/images/girl.avif';
import GirlImgWebp from '@/assets/images/girl.webp';
import GirlImgPng from '@/assets/images/girl.png';
type Props = {
  name: string;
  description: string;
  imageUrl?: string;
  sns?: { platform: string; url: string }[];
};

const Profile = ({ name, description, imageUrl, sns }: Props) => {
  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>Profile</h2>
      <div className={styles.profileContent}>
        <div className={styles.profileText}>
          <p className={styles.profileName}>Name：{name}</p>
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
    </div>
  );
};
export default Profile;
