import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div className={styles.body}>
      <div className={styles.firstRow}>
        <img src="./blenderBackG.png" alt="" className={styles.logo} />
        <img src="./nobakc.png" alt="" className={styles.logo} />
      </div>
      <div className={styles.secondRow}>
        <img src="./Csharp.png" alt="" className={styles.logo} />
        <img src="./python.png" alt="" className={styles.logo} />
        <img src="./whatthefigma.png" alt="" className={styles.logo} />
        <img src="./reactbilde.png" alt="" className={styles.logo} />
      </div>
    </div>
  );
};
