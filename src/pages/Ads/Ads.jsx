import { AdsListing } from "../../components/AdsListing";
import "./Ads.css";
import { Title } from "../../components/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_ADS } from "../../config";
import { CenteredContainer } from "../../components/CenteredContainer";
import { Loader } from "../../components/Loader";

export const Ads = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [, setErr] = useState(null);

  const getAds = async () => {
    setLoading(true);

    try {
      const response = await axios.get(GET_ADS);
      setAds(response.data);
    } catch (err) {
      console.error(err);
      setErr(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      <Title>Просмотр объявлений</Title>

      <div className="row">
        {loading ? (
          <CenteredContainer>
            <Loader animation="border" size="lg" />
          </CenteredContainer>
        ) : (
          <>
            <AdsListing ads={ads} getAds={getAds} />
          </>
        )}

        {!loading && ads.length === 0 && (
          <p style={{ textAlign: "center" }}>Объявлений не найдено</p>
        )}
      </div>
    </div>
  );
};
