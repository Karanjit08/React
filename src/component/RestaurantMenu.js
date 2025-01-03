import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



var RestaurantMenu = () => {
  var [resMenu, setResMenu] = useState([]);

  var { resId } = useParams();

  useEffect(() => {
    console.log("Use Effect called on Rendering Restaurant Menu");
    fetchRestaurantMenu();
  }, []);

  console.log("Restaurant Menu Called");

  var fetchRestaurantMenu = async () => {
    var response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.627597&lng=73.74549&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    var data = await response.json();

    // console.log(data.data.cards);
    console.log(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );

    // setResMenu(data.data.cards);
    setResMenu(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };

  return (
    <div className="res-menu-container">
      {console.log("Restaurant menu outside")}
      {/* {resMenu.length == 0 ? <h3>Loading...</h3>: <h2>{resMenu[2].card.card.info.name}</h2> } 
            {resMenu.length == 0 ? <h3>Loading...</h3> : <h3>{resMenu[2].card.card.info.slugs.restaurant}</h3>}
            {resMenu.length == 0 ? <h3>Loading...</h3> : <h4>{resMenu[2].card.card.info.slugs.city}</h4>}
            {resMenu.length == 0 ? <h3>Loading...</h3> : <ul>
                <li>{resMenu[2].card.card.info.cuisines.join(", ")}</li>
            </ul>} */}
      {resMenu.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        resMenu.map((menu) => {
          {
            console.log(menu.card.info.name);
          }
          {
            /* return <h3 key={menu.card.info.id}>{menu.card.info.name}</h3> */
          }
          return <MenuCard key={menu.card.info.id} menuData={menu} />;
        })
      )}
    </div>
  );
};

var MenuCard = (props) => {
  var { menuData } = props;
  return (
    <div className="menu-container">
      <div className="menu-card">
      <div className="menu-content">
          <h3>{menuData.card.info.name}</h3>
          <h4>{menuData.card.info.category}</h4>
          <FontAwesomeIcon icon= {faStar} /> {menuData.card.info.ratings.aggregatedRating.rating}
          <h4> &#8377; {menuData.card.info.defaultPrice / 100}</h4>
          <h4>{menuData.card.info.description}</h4>
        </div>
        <img
          className="menu-img"
          src={`${baseImageURL}${menuData.card.info.imageId}`}
        ></img>
      </div>
    </div>
  );
};

export default RestaurantMenu;
