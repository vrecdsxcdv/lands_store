import styles from "./Header.module.scss";
export function Header() {
  return (
    <>
      <div className={styles.header}>
        <img
          src="/header_photos/headerlogo.png"
          alt="header menu"
          height={115}
        />
        <button>
          <img src="/header_photos/header_menu.svg" alt="header menu" />
        </button>
      </div>

      <div className={styles.navigate}>
        <div className={styles.Nav}>
          <a href="#" className={styles.underline}>
            Main
          </a>
        </div>
        <div className={styles.Nav}>
          <a href="#" className={styles.underline}>
            About Us
          </a>
        </div>
        <div className={styles.Nav}>
          <a href="#" className={styles.underline}>
            Our Contacts
          </a>
        </div>
        <div className={styles.Nav}>
          <a href="#" className={styles.underline}>
            Our Social Networks
          </a>
        </div>
        <div className={styles.Nav}>
          <a href="#" className={styles.underline}>
            Support
          </a>
        </div>
      </div>
    </>
  );
}
