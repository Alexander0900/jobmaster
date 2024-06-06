import { AdsListing } from "../../components/AdsListing";
import { useAuth } from "../../hooks/useAuth";
import "./Ads.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Ads = () => {
  const navigate = useNavigate();
  const isAuth = useAuth();

  const handleButtonClick = () => {
    if (isAuth) {
      navigate("/ad");
      return;
    };

    navigate("/signin");
  }

  return (
    <div>
      <h1 className="AdsTitle">Просмотр объявлений</h1>
      <div className="buttonContainer">
        <Button variant="primary" onClick={handleButtonClick}>
          Разместить объявление
        </Button>
      </div>
      <AdsListing />
    </div>
  );
};  