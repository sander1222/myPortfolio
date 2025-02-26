import styles from "./ProfileSection.module.css";

export const ProfileSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.h}>
        <img src="meg.jpg" alt="" className={styles.profilePicture} />
        <h1 className={styles.name}>Sander Knutshaug</h1>
      </div>

      <p className={styles.InfoText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        quidem fugiat, quis tempore ut repellendus eveniet ex consequatur
        voluptatum ratione cupiditate atque impedit quia ab nostrum pariatur
        culpa nulla modi!
      </p>
    </div>
  );
};
