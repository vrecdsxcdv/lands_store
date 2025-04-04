import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { CategoryItem } from "../../components";
import axios from "axios";

export function Home() {
  const [imgNumber, setImgNumber] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      img: "/clothing/syna x nike tech fleece.png",
      name: "New Arrivals",
      link: "new_arrivals",
    },
    { id: 2, img: "/clothing/tees.png", name: "Tees", link: "tees" },
    { id: 3, img: "/clothing/outwear.png", name: "Jackets", link: "jackets" },
    {
      id: 4,
      img: "/clothing/footwear.png",
      name: "Sneakers",
      link: "footwear",
    },
    {
      id: 5,
      img: "/clothing/vetements 2.png",
      name: "Hoodies",
      link: "hoodies",
    },
  ];
  const arArray = [
    {
      id: 1,
      img: "/clothing/syna x nike tech fleece.png",
      name: "New Arrivals",
    },
    { id: 2, img: "/clothing/tees.png", name: "Tees" },
    { id: 3, img: "/clothing/outwear.png", name: "jackets" },
    { id: 4, img: "/clothing/footwear.png", name: "sneakers" },
  ];

  const sliderArray = ["/Ythug.png", "/Keef.png"];
  const handleNext = () => {
    setImgNumber((prev) => (prev + 1) % sliderArray.length);
  };
  const handlePrev = () => {
    setImgNumber((prev) => (prev === 0 ? sliderArray.length - 1 : prev - 1));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https:67d03054825945773eafe667.mockapi.io/api/v1/emails",
      email
    );
    if (response.statusText === "Created") {
      alert("Succesful");
      setEmail("");
    } else {
      alert("Some errors");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setImgNumber((prev) => (prev + 1) % sliderArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.main}>
      <div
        className={styles.slider}
        style={{ backgroundImage: `url(${sliderArray[imgNumber]})` }}
      >
        <button className={styles.slideArrow} onClick={handlePrev}>
          <img src="/arrow.svg" alt="" />
        </button>
        <div className={styles.Sliderbutton}>
          <h2>First text</h2>
          <p>Secound Text</p>
          <button>SHOP NOW</button>
        </div>
        <button className={styles.slideArrow1} onClick={handleNext}>
          <img src="/arrow1.svg" alt="" />
        </button>
      </div>

      <div className={styles.category}>
        <h3>Shop by category</h3>

        <div className={styles.catlist}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              img={category.img}
              name={category.name}
              onClick={() => {
                navigate(`/store/${category.link}`);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.newarlist}>
        <img src="new arrivals Explore our newest merchandise..png" alt="" />

        <div className={styles.newAr}>
          {arArray.map((el) => (
            <CategoryItem key={el.id} img={el.img} name={el.name} />
          ))}
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subtitle}>
          <img src="/chs.png" alt="sign up" />
          <p>
            <strong>
              SIGN UP FOR UPDATES AND JOIN THE LANDISH CONVERSATION
            </strong>
          </p>
          <p>
            <em>receive 15% off</em>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="forexample@mail.ru"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>subscribe</button>
        </form>
      </div>
    </div>
  );
}
