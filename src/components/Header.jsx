import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfo from "../utils/UserInfo";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const OnlineStatus = useOnlineStatus();

    const { loggedUser } = useContext(UserInfo);

    const [btnName, setBtnName] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between shadow-lg border-solid border-b-1">
            <div className="w-32">
                <img className="logo" src={LOGO_URL} alt="image" />
            </div>
            <div className="my-auto">
                <ul className="flex px-4">
                    <li className="px-4 mx-4"> Hello {loggedUser}</li>
                    <li className="px-4">
                        Online Status : {OnlineStatus ? "✔" : "❌"}
                    </li>
                    <li className="px-4 mx-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 mx-4">
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li className="px-4 mx-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                    <li>
                        <button
                            className="px-2 mx-10 rounded-lg bg-gray-200 hover:shadow-sm hover:bg-gray-300"
                            onClick={() => {
                                btnName === "Login"
                                    ? setBtnName("Logout")
                                    : setBtnName("Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
