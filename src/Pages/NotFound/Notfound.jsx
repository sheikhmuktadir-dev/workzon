import { Link } from "react-router-dom";
import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.notFoundContainer}>
      <h2>404</h2>
      <h4>Page Not Found</h4>
      <Link to="/" className={Style.notFoundLink}>
        Go back to the Dashboard
      </Link>
    </div>
  );
}
