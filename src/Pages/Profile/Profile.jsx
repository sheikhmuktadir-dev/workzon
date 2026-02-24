import Style from "./profile.module.css";
import profile from "/images/person.webp";
import { BsPencilSquare } from "react-icons/bs";

export default function Profile() {
  const userDetails = JSON.parse(localStorage.getItem("userfirstname"));
  return (
    <div className={Style.profileBoxWrapper}>
      <div className={Style.profileBox}>
        <button className={Style.profileEdit}>
          <BsPencilSquare />
        </button>
        <div className={Style.profileTop}>
          <img src={profile} alt="profile" className={Style.profileImage} />
          <div className={Style.profileTopName}>
            <h4>
              {userDetails.firstname}
              {userDetails.lastname}
            </h4>
            <p className={Style.profileMute}>{userDetails.email}</p>
          </div>
        </div>
        <div className={Style.profileBottom}>
          <div className={Style.profilePart}>
            <p className={Style.profileMute}>City</p>
            <h5>Hyderabad</h5>
          </div>

          <div className={Style.profilePart}>
            <p className={Style.profileMute}>Country</p>
            <h5>India</h5>
          </div>

          <div className={Style.profilePart}>
            <p className={Style.profileMute}>Phone</p>
            <h5>+91 9856334566</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
