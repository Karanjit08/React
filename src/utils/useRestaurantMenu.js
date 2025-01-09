import { useEffect, useState } from "react";




// STEPS FOR API CALL FOR FETCHING EACH RESTAURANT MENU BASED ON RESTUARANT ID

var useRestaurantMenu = (resId) => {

    // STEP 1
    var [resMenu, setResMenu] = useState([]);

    // STEP 2
    useEffect(() => {
        console.log("Use Effect called on Rendering Restaurant Menu");
        fetchRestaurantMenu();
      }, []);

    // STEP 3

    var fetchRestaurantMenu = async () => {
        var response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.627597&lng=73.74549&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
    
        var data = await response.json();
    
        // console.log(data.data.cards);
        // console.log(
        //   data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        //     .itemCards
        // );
        console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    
        // setResMenu(data.data.cards);
        setResMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
      }

    // STEP 4  
    return resMenu;
}

export default useRestaurantMenu;