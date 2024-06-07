import { AdItem } from "./AdItem";

export const AdsListing = ({ ads, getAds }) => {
  return (
    <>
      {ads.map((ad) => (
        <AdItem key={ad._id} ad={ad} getAds={getAds} />
      ))}
    </>
  );
};
