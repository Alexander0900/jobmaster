import { AdsListing } from "../../components/AdsListing";
import "./Ads.css"
import Button from 'react-bootstrap/Button';
export const Ads = () => {

    return <div>
        <h1 className="AdsTitle">Просмотр объявлений</h1>
        <div className="buttonContainer">
            <Button variant="primary">Разместить объявление</Button>
        </div>
        <AdsListing />
    </div>;


};