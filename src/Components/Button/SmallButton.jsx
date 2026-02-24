import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function SmallButton({ children, url }) {
  return (
    <Link to={url} className={Style.smallButton}>
      {children}
    </Link>
  );
}
