import { useEffect, useState } from "react";


var useOnlineStatus = () => {

    var [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
          });

          window.addEventListener("offline", () => {
            setOnlineStatus(false);
          });
        
    });

    return onlineStatus;
}

export default useOnlineStatus;