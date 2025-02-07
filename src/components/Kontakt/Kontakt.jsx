import styles from "./Kontakt.module.css";

export const Kontakt = () => {
    return (
      <div>
        <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
    </div>

    <div className={styles.content}>
        <h2>Kontakt meg</h2>
        <div className={styles.contact-links}>
            <p>sander.122kodehode@gmail.com</p>
            <p><a href="https://github.com/sander1222" style="color: white; text-decoration: none;">GitHub</a></p>
        </div>
        <p>+47 47397384</p>
    </div>
      </div>
    );
  };