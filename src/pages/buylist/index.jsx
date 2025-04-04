import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Buylist.module.scss";
import { ClothItem } from "../../components";

export function Buylist() {
  const { id } = useParams();
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    const request = async () => {
      return await axios.get(
        "https://67d03054825945773eafe667.mockapi.io/api/v1/Cloth"
      );
    };
    setCurrentList(request().result.data);
  }, []);

  return (
    <div className={styles.buylist}>
      <h2>{id?.replace("_", " ").toUpperCase()}</h2>
      <div className={styles.items}>
        {currentList.map((item) => (
          <ClothItem
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
