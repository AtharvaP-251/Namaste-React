import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

const ItemLists = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {data.map((item) => (
                <div className="border-b-2" key={item?.card?.info?.id}>
                    <div className="flex mx-2 justify-between text-xs mt-2 ">
                        <span>
                            {item?.card?.info?.name}- ₹
                            {item?.card?.info?.price / 100}
                        </span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="flex text-left font-thin text-xs m-2 w-2/3 ">
                            <p>{item?.card?.info?.description}</p>
                        </span>
                        <span>
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                className="w-32 h-24 rounded-lg mx-2"
                            />
                            <button
                                className="px-2 mx-1 text-xs  hover:bg-black text-white bg-slate-800 hover:shadow-lg rounded-lg"
                                onClick={() => handleAddItem(item)}
                            >
                                add+
                            </button>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemLists;
