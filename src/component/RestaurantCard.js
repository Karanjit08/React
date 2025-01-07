import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var RestaurantCard = (props) =>{

  var {resData} = props;

  // This below line 34 means DESTRUCTURING THE API DATA
  var {cloudinaryImageId, name, avgRating, cuisines} = resData.info;
  return (
    <div className="w-[280px] h-[300px] bg-body   overflow-hidden rounded-xl shadow-custom transition-transform-shadow duration-300 ease-default hover:scale-105 hover:shadow-hover ">
    <img className="w-[100%] h-[60%] object-cover rounded-xl" src={`${baseImageURL}${cloudinaryImageId}`}></img>

    <div className="w-[100%] h-[40%]  text-left font-sans p-[16px]">
      <h3>{name}</h3>
      <FontAwesomeIcon icon= {faStar} /> {avgRating}
      <h4>{cuisines}</h4>
    </div>

    </div>
  );
}

export default RestaurantCard;