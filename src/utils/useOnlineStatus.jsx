import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (event) => {});
        setOnlineStatus(false);

        window.addEventListener("online", (event) => {});
        setOnlineStatus(true);
    }, []);

    return OnlineStatus;
};

export default useOnlineStatus;
