import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/ads');
    }

    return handleLogout;
}