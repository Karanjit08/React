import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import resList from "../utils/mockData";
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';





// NORMAL JS VARIABLE IN REACT
var restaurantListJS = [
    {
        "info": {
        "id": "36014",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ec733942-4589-44d4-a543-64e83c412f72_36014.JPG",
        "locality": "KAILASH HOTEL",
        "areaName": "Tathawade",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
        ],
        "avgRating": 3.8,
        },   
    },
    {
        "info": {
        "id": "25845",
        "name": "Taste Of Indore Fun Food Since 2016",
        "cloudinaryImageId": "elinrtfdmkrsfrqqt7pf",
        "locality": "Pimple Saudagar",
        "areaName": "Pimple Saudagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Chaat",
        "Snacks",
        "Street Food",
        "Sweets"
        ],
        "avgRating": 4.6,
        },   
    }
]


var Body = () => {

    // STATE VARIABLE IN REACT
    var [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        console.log("Use Effect Called");
        fetchData();
    },[]);


    var fetchData = async() =>{
        console.log('Fetching Data...');
        var response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.627597&lng=73.74549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        var data = await response.json();
        console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }


    
    return (
    <div className="body">
        <div className="search-container">
            <div className="search-bar">
            <input id="searchbar" 
               type="text" name="search" 
               placeholder="Search foods.."></input>
            </div>
            <div className="search-icon">
            <FontAwesomeIcon icon= {faSearch} />
            </div>
            <button className="res-filter-btn" onClick={() =>{
                console.log('Button Clicked');
                restaurantList = restaurantList.filter((items) => 
                    items.info.avgRating > 4
                )
                setRestaurantList(restaurantList);
              
            }}> Top Rated Restaurants</button>
        </div>
        <div className="res-cards-container">
          {
            restaurantList.length === 0 ? <h3>Loading...</h3>:
            restaurantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)
          }
        </div>

    </div>
    );
}

export default Body;