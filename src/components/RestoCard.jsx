import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
    return (
        <div className="bg-gray-200 rounded-lg px-2 m-2 hover:shadow-xl hover:bg-gray-300">
            <div>
                <img
                    className="w-52 h-36 py-2 rounded-2xl"
                    src={CDN_URL + props.resData.cloudinaryImageId}
                    alt="food-image"
                />
            </div>
            <div>
                <h4 className="font-semibold">{props.resData.name}</h4>
                <h5>
                    {"⭐"}
                    {props.resData.avgRating}
                </h5>
            </div>
        </div>
    );
};

export default RestoCard;
