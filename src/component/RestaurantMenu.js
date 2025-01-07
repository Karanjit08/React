import { useParams } from "react-router";
import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useRestaurantMenu from "../utils/useRestaurantMenu";



var RestaurantMenu = () => {

  var { resId } = useParams();

  var resMenu = useRestaurantMenu(resId);

  return (
    <div className="res-menu-container">
      {console.log("Restaurant menu outside")}
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
    <div className="w-[100%] bg-body flex justify-center">
      <div className="flex mt-[8px] w-[50%] bg-white rounded-xl shadow-custom transition-transform-shadow duration-300 ease-default hover:scale-105 hover:shadow-hover overflow-hidden   ">
      <div className="w-[70%] h-[40%] pl-[8px]">
          <h3>{menuData.card.info.name}</h3>
          <h4>{menuData.card.info.category}</h4>
          <FontAwesomeIcon icon= {faStar} /> {menuData.card.info.ratings.aggregatedRating.rating}
          <h4> &#8377; {menuData.card.info.defaultPrice / 100}</h4>
          <h4>{menuData.card.info.description}</h4>
        </div>
        <img
          className="w-[30%] object-cover rounded-xl"
          src={`${baseImageURL}${menuData.card.info.imageId}`}
        ></img>
      </div>
    </div>
  );
};

export default RestaurantMenu;
