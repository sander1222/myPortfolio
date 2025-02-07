import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div>
      <div>
        <div className={styles.firstRow}>
          <img src="./blenderBackG.png" alt="" className={styles.blenderImg} />
          <img src="./nobakc.png" alt="" className={styles.htmlCssJs} />
        </div>
        <div className={styles.secondRow}>
          <img src="./Csharp.png" alt="" className={styles.Csharp} />
          <img src="./python.png" alt="" className={styles.python} />
          <img src="./whatthefigma.png" alt="" className={styles.figma}/>
          <img src="./reactbilde.png" alt="" className={styles.react}/>
        </div>
      </div>

      <div></div>
    </div>
  );
}