import { useSelector, UseDispatch, useDispatch } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart(cartItems));
    };

    return (
        <div>
            <div className="text-center p-2 mt-2">Your Cart</div>
            <div className="text-center">
                <button
                    className="bg-red-700 text-white hover:shadow-md hover:bg-red-500  rounded-lg px-2"
                    onClick={() => handleClearCart(cartItems)}
                >
                    Clear Cart
                </button>
            </div>
            <div>
                {cartItems.map((item) => {
                    <div>{item.card.info.name}</div>;
                })}
            </div>
            <div className="w-6/12 my-4 p-1  m-auto shadow-lg">
                <ItemLists data={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
