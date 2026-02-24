import Style from "./cards.module.css";
export default function BoxCardSmall({ data, Icons }) {
  return (
    <div className={Style.boxCardSmall}>
      <div className={Style.boxCardSmallIcon}>
        <Icons />
      </div>
      <div className={Style.boxCardSmallText}>
        <p className={Style.boxCardSmallPara}>{data.subheading}</p>
        <h5 className={Style.boxCardSmallCost}>{data.cost}</h5>
      </div>
    </div>
  );
}
