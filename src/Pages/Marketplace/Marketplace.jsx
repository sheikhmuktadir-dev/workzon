import Style from "./marketplace.module.css";
import banner from "/images/nft.webp";
import { nftData } from "../../Data/Marketplace";
import MarketCard from "../../Components/Cards/MarketCard";
import { recentnftData } from "../../Data/Marketplace";
import TableOne from "../../Components/Table/TableOne";
import { topCreatorsHeaders } from "../../Data/Table";
import { topCreators } from "../../Data/Table";

export default function Marketplace() {
  return (
    <div className={Style.marketplaceMainGid}>
      <div className={Style.marketplaceleftBox}>
        <div className={Style.marketplaceMainBanner}>
          <img
            src={banner}
            alt="banner"
            className={Style.marketplaceMainBannerImage}
          />
          <div className={Style.marketplaceMainBannerText}>
            <h4 className={Style.marketplaceMainBannerTextHeading}>
              Discover, collect, and sell extraordinary NFTs
            </h4>
            <p className={Style.marketplaceMainBannerPara}>
              Enter in this creative world. Discover now the latest NFTs or
              start creating your own!
            </p>
          </div>
        </div>

        <h4 className={Style.marketplaceHeading}>Trending NFTs</h4>

        <div className={Style.marketplaceCardGrid}>
          {nftData?.map((list, i) => {
            return <MarketCard key={list.title || i} data={list} />;
          })}
        </div>

        <h4 className={Style.marketplaceHeading}>Recently Added</h4>

        <div className={Style.marketplaceCardGrid}>
          {recentnftData?.map((list, i) => {
            return <MarketCard key={list.title || i} data={list} />;
          })}
        </div>
      </div>
      <div className={Style.marketplacerightBox}>
        <TableOne
          heading="Top Creators"
          headerData={topCreatorsHeaders}
          bodyData={topCreators}
          data1="username"
          data2="artworks"
          data3="rating"
          img={true}
          imageMain="avtar"
        />

        <TableOne
          heading="Active Creators"
          headerData={topCreatorsHeaders}
          bodyData={topCreators}
          data1="username"
          data2="artworks"
          data3="rating"
          img={true}
          imageMain="avtar"
        />
      </div>
    </div>
  );
}
