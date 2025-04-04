import styles from "./Footer.module.scss";
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footeritems}>
        <div className={styles.footeritem}>
          <h3>MENU</h3>
          <a href="#">MAIN</a>
          <a href="#">INFORMATION</a>
          <a href="#">CARE FOR THINGS</a>
        </div>
        <div className={styles.footeritem}>
          <h3>HELP</h3>
          <a href="#">MENU1</a>
          <a href="#">MENU2</a>
          <a href="#">MENU3</a>
          <a href="#">MENU4</a>
        </div>

        <div className={styles.footeritem}>
          <h3>SUPPORT</h3>
          <a href="#">MENU1</a>
          <a href="#">MENU2</a>
          <a href="#">MENU3</a>
          <a href="#">MENU4</a>
        </div>

        <div className={styles.footeritem}>
          <h3>HEALTHY</h3>
          <a href="#">MENU1</a>
          <a href="#">MENU2</a>
          <a href="#">MENU3</a>
          <a href="#">MENU4</a>
        </div>
        <div className={styles.footeritem}>
          <h3>FOLLOW US</h3>
          <a href="#">
            <p>TELEGRAM</p> <img src="/tg.png" alt="" width={20} height={20} />
          </a>
          <a href="#">
            <p>WHATSAPP</p>
            <img src="/whatsapp.png" alt="" width={20} height={20} />
          </a>
          <a href="#">
            <p>VK</p> <img src="/vk.png" alt="" width={20} height={20} />
          </a>
        </div>

        <a href="#">БЕСПЛАТНАЯ ДОСТАВКА ОТ 12000₽.</a>
      </div>
      <div className={styles.copyright}>
        <h3>Landish store</h3>
        <p>&copy;2025</p>
      </div>
    </div>
  );
}
