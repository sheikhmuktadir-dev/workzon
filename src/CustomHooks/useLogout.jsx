import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userfirstname");
    navigate("/sign-in", { replace: true });
  };

  return { Logout };
}
