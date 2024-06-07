import axios from "axios";
import { Card } from "react-bootstrap";
import { GET_ADS } from "../config";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export const AdsListing = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [err, setErr] = useState(null);

  const getAds = async () => {
    setLoading(true);

    try {
      //use async await
      const response = await axios.get(GET_ADS);
      setAds(response.data);
    } catch (err) {
      console.error(err);
      setErr(err);
      // show notif
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <Loader animation="border" size="lg" />
      ) : (
        <>
          {ads.map((ad) => (
            <div className="col-md-4" key={ad._id}>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title>{ad?.adTitle}</Card.Title>
                <Card.Text>{ad.requirements}</Card.Text>
                <Card.Text>Имя работодателя: {ad.username}</Card.Text>
                <Card.Text>Зарплата: {ad.salary}</Card.Text>
                <Card.Text>Моб: {ad.mobile}</Card.Text>
                <Card.Text>{ad.city}</Card.Text>
                {/* <Button variant="primary">Перейти</Button> */}
              </Card.Body>
            </Card>
          </div>
          ))}
        </>
      )}
    </div>
  );
};
