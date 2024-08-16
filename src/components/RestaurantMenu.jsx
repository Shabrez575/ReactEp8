import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.565057&lng=77.2849402&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER",
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  const { text } = resInfo?.cards[0]?.card?.card;
  const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
  // data.cards[0].card.card.text

  // data.cards[2].card.card.info
  //data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  return (
    <div>
      <h1>{text}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <p></p>
      <ul>
        {itemCards.map((item) => (
        <li key={item.card.info.id}>
        {item.card.info.name} -
          {"RS."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
