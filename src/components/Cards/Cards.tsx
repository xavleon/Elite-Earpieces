import CardData from "./CardData";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router";

const Cards = () => {

    const navigate = useNavigate()

  const onClickBuy = () => {
    //TODO: Later
  };

  const onClickCard = (id:number) => {
    navigate('/productdetails/' +id)


  }

  return (
    <div className={styles.cardComp}>
      {CardData.map((data, index) => (
        <div onClick={()=>onClickCard(data.id)} className={`${styles.cardI} card-compact  w-96 shadow-xl p-10`} key={index}>
          <figure>
            <img
              src={data.img}
              alt="Shoes"
            />
          </figure>
          <div className={styles.cardBody}>
            <h2 className="card-title">{data.title}</h2>
            <p>{data.paragraph}</p>
        
          </div>
          <div className="card-actions">
              <button className="btn btn-primary" onClick={onClickBuy}>
                Add to cart
              </button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
