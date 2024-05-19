import { AdsListing } from "../../components/AdsListing";
import "./Ads.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Ads = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="AdsTitle">Просмотр объявлений</h1>
      <div className="buttonContainer">
        <Button variant="primary" onClick={() => navigate("/ad")}>
          Разместить объявление
        </Button>
      </div>
      <AdsListing />
    </div>
  );
};  