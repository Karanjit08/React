import { baseImageURL } from "../utils/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var RestaurantCard = (props) =>{

  var {resData} = props;

  // This below line 34 means DESTRUCTURING THE API DATA
  var {cloudinaryImageId, name, avgRating, cuisines} = resData.info;
  return (
    <div className="res-card">
    <img className="res-card-image" src={`${baseImageURL}${cloudinaryImageId}`}></img>

    <div className="res-card-content">
      <h3>{name}</h3>
      <FontAwesomeIcon icon= {faStar} /> {avgRating}
      <h4>{cuisines}</h4>
    </div>

    </div>
  );
}

export default RestaurantCard;