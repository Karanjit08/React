import { useEffect, useState } from "react";
import { useParams } from "react-router";



var RestaurantMenu = () => {


    var [resMenu, setResMenu] = useState([]);

    var {resId} = useParams();

    useEffect( () =>{
        console.log('Use Effect called on Rendering Restaurant Menu')
        fetchRestaurantMenu();
    },[])

    console.log('Restaurant Menu Called')


    var fetchRestaurantMenu = async() => {
        var response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.627597&lng=73.74549&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);


        var data = await response.json();

        // console.log(data.data.cards);
        console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

        // setResMenu(data.data.cards); 
        setResMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);


        } 
    

    return (
        <div className="res-menu-container">
        {console.log('Restaurant menu outside')}
            {/* {resMenu.length == 0 ? <h3>Loading...</h3>: <h2>{resMenu[2].card.card.info.name}</h2> } 
            {resMenu.length == 0 ? <h3>Loading...</h3> : <h3>{resMenu[2].card.card.info.slugs.restaurant}</h3>}
            {resMenu.length == 0 ? <h3>Loading...</h3> : <h4>{resMenu[2].card.card.info.slugs.city}</h4>}
            {resMenu.length == 0 ? <h3>Loading...</h3> : <ul>
                <li>{resMenu[2].card.card.info.cuisines.join(", ")}</li>
            </ul>} */}
            {
                resMenu.length === 0 ? <h3>Loading...</h3> :
                resMenu.map((menu) => {
                    {console.log(menu.card.info.name)}
                    return <h3 key={menu.card.info.id}>{menu.card.info.name}</h3>
                })
            }
        </div>
    );
    
}


export default RestaurantMenu;