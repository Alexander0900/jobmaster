import { useEffect, useState } from "react";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState(null);
    const authData = localStorage.getItem("userData");

    useEffect(() => {        
        if (authData) {
            const parsedAuthData = JSON.parse(authData);

            if (parsedAuthData.token) {
                setIsAuth(true);
                setUserData(parsedAuthData);
            } else {
                setIsAuth(false);
                setUserData(null);
            }
        } else {
            setIsAuth(false);
            setUserData(null);
        }
    }, [authData]);

    return { isAuth, userData };
};
