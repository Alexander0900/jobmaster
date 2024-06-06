import { useContext } from "react";
import { AdsListing } from "../../components/AdsListing";
import "./Ads.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Ads = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!userData.token) {
      navigate("/ad");
      return;
    }

    navigate("/signin");
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
