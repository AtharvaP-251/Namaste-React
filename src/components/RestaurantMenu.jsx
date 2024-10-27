import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Shimmer from "./Shimmer";
import RestaurantCategories from "./RestaurantCategories";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);

    const { resId } = useParams();

    const resInfo = useRestaurantsMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.data?.cards[0]?.card?.card?.info;

    const categories =
        resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-center">
            <h2 className="font-bold text-lg mt-4">{name}</h2>
            <h3 className="font-semibold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </h3>
            <div>
                {categories.map((category, index) => (
                    <RestaurantCategories
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
