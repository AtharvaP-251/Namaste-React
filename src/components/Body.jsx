import UserInfo from "../utils/UserInfo";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ListofResto, setListofResto] = useState([]);
    const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const { loggedUser, setUserName } = useContext(UserInfo);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Optional Chaining
        setListofResto(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline!! Please check your internet
                connection;
            </h1>
        );

    return ListofResto.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="mt-2">
            <div className="flex py-3">
                <div className="flex px-4">
                    <div className="text-box  mx-2 shadow-lg">
                        <input
                            className="border border-black px-2"
                            placeholder="search here"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                    </div>
                    <div className="search-box shadow-sm py-1 px-2 text-xs rounded-lg bg-gray-200 border-1 border-solid ">
                        <button
                            onClick={() => {
                                const FilteredSearch = ListofResto.filter(
                                    (res) =>
                                        res.info.name
                                            .toLowerCase()
                                            .includes(searchText.toLowerCase())
                                );

                                setFilteredRestaurant(FilteredSearch);
                            }}
                        >
                            search
                        </button>
                    </div>
                </div>

                <div className="best-restro-button mx-4 py-1 px-2 text-xs shadow-sm rounded-lg bg-gray-200 border-1 border-solid ">
                    <button
                        onClick={() => {
                            const FilteredList = ListofResto.filter(
                                (resData) => resData.info.avgRating > 4.4
                            );
                            setFilteredRestaurant(FilteredList);
                        }}
                    >
                        Best Restroz
                    </button>
                </div>

                <div>
                    <input
                        className=" mx-4 px-2 border border-black"
                        placeholder="Enter your name"
                        value={loggedUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-wrap">
                {FilteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                        <RestoCard resData={restaurant?.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
