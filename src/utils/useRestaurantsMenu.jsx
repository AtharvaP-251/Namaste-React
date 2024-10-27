import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantsMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setresInfo(json);
    };

    return resInfo;
};

export default useRestaurantsMenu;
