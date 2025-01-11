import { useSelector,useDispatch } from "react-redux";
import AddToCartItems from "./AddToCartItems";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearItem } from "../utils/cartSlice";

var Cart = () => {

  
  var cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  var dispatch = useDispatch();
  var deleteItems = () => {
    console.log('Deleted');
    dispatch(clearItem())
  }  
  return (
    <div className="w-[100%] flex  flex-col items-center ">
    <h1 className="font-bold text-3xl mb-3  ">Cart Items</h1>
    <FontAwesomeIcon onClick={() => deleteItems()} className="cursor-pointer " icon={faTrash} />
      {cartItems.map((items) => (
        <AddToCartItems key={items.card.info.id} data = {items} />
      ))}
    </div>
  );
};

export default Cart;
