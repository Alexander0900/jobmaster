import { AdsListing } from "../../components/AdsListing";
import "./Ads.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UseIsUserAuth } from "../../hooks/UseIsUserAuth";

export const Ads = () => {
  const isUserAuth = UseIsUserAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isUserAuth) {
      navigate("/signin");
      return;
    }

    navigate("/add-ad");
  };

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
