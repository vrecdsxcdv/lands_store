import styles from "./clothitem.module.scss";
import { useNavigate } from "react-router-dom";
export function ClothItem({ id, img, name, price, link }) {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className={styles.item}
      onClick={() => {
        navigate(`/buy/${link}`);
      }}
    >
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
