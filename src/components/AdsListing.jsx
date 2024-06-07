import axios from "axios";
import { GET_ADS } from "../config";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { AdItem } from "./AdItem";

export const AdsListing = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [err, setErr] = useState(null);

  const getAds = async () => {
    setLoading(true);

    try {
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
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <Loader animation="border" size="lg" />
      ) : (
        <>
          {ads.map((ad) => (
            <AdItem key={ad._id} ad={ad} getAds={getAds} />
          ))}
        </>
      )}

      {!loading && ads.length === 0 && (
        <p style={{ textAlign: "center" }}>Объявлений не найдено</p>
      )}
    </div>
  );
};
