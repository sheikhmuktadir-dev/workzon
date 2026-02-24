import Style from "./toast.module.css";

export default function Toast({ type, toastMessage }) {
  if (!toastMessage) return null;
  return (
    <div className={Style.toastContainer}>
      <div
        className={`${Style.toastBox} ${type === "error" ? Style.toastError : Style.toastSuccesss}`}
      >
        {toastMessage}
      </div>
    </div>
  );
}
