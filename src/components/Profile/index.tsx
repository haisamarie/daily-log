import Image from 'next/image';
import styles from './styles.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInner}>
        <h2 className={styles.profileTitle}>Profile</h2>
        <div className={styles.profileContent}>
          <div className={styles.profileText}>
            <p className={styles.profileName}>name</p>
            <p className={styles.profileDescription}>
              詳細文詳細文詳細文詳細文詳細文詳細文詳細文詳細文詳細文詳細文詳細文詳細文
              詳細文詳細文詳細文詳細文詳細文詳細文 詳細文詳細文詳細文詳細文詳細文詳細文
            </p>
          </div>
          <Image
            className={styles.profileImage}
            src="/images/girl.png"
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
