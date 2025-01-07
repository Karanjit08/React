import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import resList from "../utils/mockData";
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';





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
    console.log('Body called');

    // STATE VARIABLE IN REACT
    var [restaurantList, setRestaurantList] = useState([]);

    const [searchRestaurantList, setSearchRestaurantList] = useState([]);

    var [searchText,setSearchText] = useState("");

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

        setSearchRestaurantList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    var onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Please check your Internet Connection :((</h1>
    }

    
    return (
    <div className="h-[120vh] bg-body ">
        <div className="w-[100vw] h-[15vh] flex justify-center items-center gap-[20] ">
            <div className="w-[40vw] h-[8vh] rounded-xl flex  justify-around">
            <input 
            className='w-[100%] h-[100%] rounded-xl py-0 px-[10px] text-[20px]  border-none outline-none'
            id="searchbar" 
               type="text" name="search" 
               placeholder="Search foods.."
               value={searchText}
               onChange={(e) =>{
                setSearchText(e.target.value);
               }}
               ></input>
            </div>
            <div className="  text-[24px] cursor-pointer" onClick={() =>{
                console.log("Searching...")
                console.log(searchText);
                const filteredList = restaurantList.filter((items) =>
                    items.info.name.includes(searchText)
                );
                console.log(filteredList);
                setSearchRestaurantList(filteredList);
            }}>
            <FontAwesomeIcon icon= {faSearch} />
            </div>
            <button className="p-[8px] rounded-xl  cursor-pointer" onClick={() =>{
                console.log('Button Clicked');
                restaurantList = restaurantList.filter((items) => 
                    items.info.avgRating > 4
                )
                setRestaurantList(restaurantList);
              
            }}> Top Rated Restaurants</button>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {
            searchRestaurantList.length === 0 ? <h3>Loading...</h3>:
            searchRestaurantList.map((restaurant) => <Link to= {`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
            </Link>
            )
          }
        </div>

    </div>
    );
}

export default Body;