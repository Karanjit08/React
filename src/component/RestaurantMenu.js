import { useParams } from "react-router";
import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

var RestaurantMenu = () => {
  var { resId } = useParams();

  var resMenu = useRestaurantMenu(resId);
 

  return (
    <div className="res-menu-container">
      {console.log("Restaurant menu outside")}
      {resMenu.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        resMenu.map((menu, index) => {
          {
            {
              /* console.log(menu.card.info.name); */
            }
            {
              /* console.log(menu); */
            }
          }
          {
            /* return <h3 key={menu.card.info.id}>{menu.card.info.name}</h3> */
          }
          {
            /* return <MenuCard key={menu.card.info.id} menuData={menu} />; */
          }
          {
            if (
              menu.card?.card?.["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ) {
              return <MenuDropDownCard key={index} menuData={menu} />;
            }
          }
        })
      )}
    </div>
  );
};

// var MenuCard = (props) => {
//   var { menuData } = props;
//   return (
//     <div className="w-[100%] bg-body flex justify-center">
//       <div className="flex mt-[8px] w-[50%] bg-white rounded-xl shadow-custom transition-transform-shadow duration-300 ease-default hover:scale-105 hover:shadow-hover overflow-hidden   ">
//       <div className="w-[70%] h-[40%] pl-[8px]">
//           <h3>{menuData.card.info.name}</h3>
//           <h4>{menuData.card.info.category}</h4>
//           <FontAwesomeIcon icon= {faStar} /> {menuData.card.info.ratings.aggregatedRating.rating}
//           <h4> &#8377; {menuData.card.info.defaultPrice / 100}</h4>
//           <h4>{menuData.card.info.description}</h4>
//         </div>
//         <img
//           className="w-[30%] object-cover rounded-xl"
//           src={`${baseImageURL}${menuData.card.info.imageId}`}
//         ></img>
//       </div>
//     </div>
//   );
// };

var MenuDropDownCard = (props) => {
  var [isOpen, setIsOpen] = useState(false);
  var { menuData } = props;
  return (
    <div className="w-[100%] flex items-center  flex-col ">

     {/* ACCORDIAN HEADER */}
      <div className="w-[50%] h-[50px] bg-accordian rounded-xl m-1 flex justify-between p-4 items-center hover:cursor-pointer" onClick={() => {
        setIsOpen(!isOpen);
      }}>
        <h2 className="font-bold text-lg ">
          {menuData.card.card.title} ({menuData.card.card.itemCards.length})
        </h2>
        <h2>{isOpen ? "▲" : "▼"}</h2>
      </div>
      {/* ACCORDIAN BODY    */}     
      {isOpen && (
        <div className="w-[50%] bg-white p-4 rounded-xl shadow-md border-solid border-2 border-accordianSelect">
          {menuData.card.card.itemCards.map((item, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-medium">{item.card.info.name}</h3>
              <p className="text-sm text-gray-600">{item.card.info.description}</p>
            </div>
          ))}
        </div>
      )
      }

         {/* Used conditional rendering ({isOpen && ...}) to display the content when isOpen is true. */}
    </div>
  );
};

export default RestaurantMenu;
