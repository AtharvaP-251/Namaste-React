import ItemLists from "./ItemLists";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="w-6/12 my-4 p-1  m-auto shadow-lg">
            <div
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
            >
                <span className="mx-2 font-normal mb-2">
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="mx-2 opacity-50">{"˅"}</span>
            </div>

            {showItems && <ItemLists data={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategories;
