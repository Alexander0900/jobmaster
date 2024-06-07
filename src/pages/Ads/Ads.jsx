import { AdsListing } from "../../components/AdsListing";
import "./Ads.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UseIsUserAuth } from "../../hooks/UseIsUserAuth";
import { Title } from "../../components/Title";

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
      <Title>Просмотр объявлений</Title>
      <div className="buttonContainer">
        <Button variant="primary" onClick={handleButtonClick}>
          Разместить объявление
        </Button>
      </div>
      <AdsListing />
    </div>
  );
};
