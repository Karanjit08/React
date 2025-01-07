import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var RestaurantCard = (props) =>{

  var {resData} = props;

  // This below line 34 means DESTRUCTURING THE API DATA
  var {cloudinaryImageId, name, avgRating, cuisines} = resData.info;


  
  return (
    <div className="w-[280px] h-[300px]  overflow-hidden rounded-xl shadow-custom transition-transform-shadow duration-300 ease-default hover:scale-105 hover:shadow-hover bg-body">
    <img className="w-[100%] h-[60%] object-cover rounded-xl" src={`${baseImageURL}${cloudinaryImageId}`}></img>

    <div className="w-[100%] h-[40%]  text-left font-sans p-[16px]">
      <h3>{name}</h3>
      <FontAwesomeIcon icon= {faStar} /> {avgRating}
      <h4>{cuisines.join(", ")}</h4>
    </div>

    </div>
  );
}

// HIGHER ORDER COMPONENT
export var promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    var {resData} = props;
    return (
      <div>
        <label className="text-sm font-bold text-blue-500 mb-1">Promoted</label>
        <RestaurantCard key={resData.info.id} resData = {resData} 
        />
      </div>
    );
  }
}



export default RestaurantCard;