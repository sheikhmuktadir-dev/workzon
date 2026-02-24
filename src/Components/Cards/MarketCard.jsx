import SmallButton from "../Button/SmallButton";
import Style from "./cards.module.css";

export default function MarketCard({ data }) {
  return (
    <div className={Style.marketCard}>
      <img src={data.image} className={Style.marketCardImage} />
      <div className={Style.marketCardText}>
        <div className={Style.marketCardTextTop}>
          <h5 className={Style.marketCardTitle}>{data.title}</h5>
          <h6 className={Style.marketCardAuthor}>{data.author}</h6>
        </div>

        <div className={Style.marketCardBottom}>
          <p className={Style.marketCardBid}>{data.bid}</p>
          <SmallButton url="/nft-marketplace">Place Bid</SmallButton>
        </div>
      </div>
    </div>
  );
}
