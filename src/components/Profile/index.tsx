import Image from 'next/image';
import styles from './styles.module.css';
type Props = {
  name: string;
  description: string;
  imageUrl: string;
  sns?: { platform: string; url: string }[];
};

const Profile = (props: Props) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInner}>
        <h2 className={styles.profileTitle}>Profile</h2>
        <div className={styles.profileContent}>
          <div className={styles.profileText}>
            <p className={styles.profileName}>Name：{props.name}</p>
            <p className={styles.profileDescription}>{props.description}</p>
            <ul className={styles.profileSns}>
              {props.sns?.map((sns, index) => (
                <li className={styles.profileSnsItem} key={index}>
                  <a href={sns.url} target="_blank" rel="noopener noreferrer">
                    {sns.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Image
            className={styles.profileImage}
            src={props.imageUrl || '/images/girl.png'}
            alt=""
            width={400}
            height={353}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
