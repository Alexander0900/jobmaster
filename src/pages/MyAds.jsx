import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GET_MY_ADS } from "../config";
import { UserContext } from "../contexts/UserContext";
import { Title } from "../components/Title";
import { CenteredContainer } from "../components/CenteredContainer";
import { Loader } from "../components/Loader";
import { AdsListing } from "../components/AdsListing";

export const MyAds = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [err, setErr] = useState(null);
  const { userData } = useContext(UserContext);

  const getMyAds = async () => {
    setLoading(true);

    try {
      const response = await axios.post(GET_MY_ADS, { email: userData.email });
      setAds(response.data);
    } catch (err) {
      console.error(err);
      setErr(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyAds();
  }, []);
  return (
    <>
      <div>
        <Title>Мои объявления</Title>
      </div>

      <div className="row">
        {loading ? (
          <CenteredContainer>
            <Loader animation="border" size="lg" />
          </CenteredContainer>
        ) : (
          <>
            <AdsListing ads={ads} getAds={getMyAds} />
          </>
        )}

        {!loading && ads.length === 0 && (
          <p style={{ textAlign: "center" }}>Объявлений не найдено</p>
        )}
      </div>
    </>
  );
};
