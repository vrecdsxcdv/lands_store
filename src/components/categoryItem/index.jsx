import styles from "./Categoryitem.module.scss";

export function CategoryItem({ name, img, onClick }) {
  return (
    <div
      className={styles.catitem}
      onClick={() => {
        onClick();
      }}
    >
      <img src={img} alt={`${name} photo`} />
      <p>{name}</p>
    </div>
  );
}
