import styles from './styles.module.css';
type Props = {
  name: string;
  description: string;
  imageUrl: string;
  sns?: { platform: string; url: string }[];
};

const Profile = ({ name, description, imageUrl, sns }: Props) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInner}>
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
          <picture className={styles.profileImage}>
            <source type="image/avif" srcSet={imageUrl || '/images/girl.avif'} />
            <source type="image/webp" srcSet={imageUrl || '/images/girl.webp'} />
            <img src={imageUrl || '/images/girl.png'} alt="" width={400} height={353} />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default Profile;
