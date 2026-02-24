import { Link, useNavigate } from "react-router-dom";
import Style from "./auth.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import usePasswordEyeToggle from "../CustomHooks/usePasswordEyeToggle";
import { useForm } from "react-hook-form";
import Toast from "../Components/Toast/Toast";
import useAutoDismiss from "../CustomHooks/useAutoDismiss";
import { useState, useEffect } from "react";
import authImage from "/images/auth.webp";

export default function Signin() {
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // navigate
  const navigate = useNavigate();

  // eye toggle handle custom hook
  const { eyeToggle, inputType, eyeToggleHandler } = usePasswordEyeToggle();

  // toast message hide after 2s custom hook
  useAutoDismiss(error, setError, 2000);
  useAutoDismiss(success, setSuccess, 2000);

  // redirect page if user already login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  function onSubmit(data) {
    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      try {
        let workzoneusers = JSON.parse(localStorage.getItem("workzoneusers"));
        if (!Array.isArray(workzoneusers)) {
          workzoneusers = [];
        }

        const findUser = workzoneusers.find(
          (user) =>
            user.email === data.email && user.password === data.password,
        );

        if (!findUser) {
          setError("Invalid Credentials");
          setLoading(false);
          return;
        }

        localStorage.setItem("token", "userToken");
        localStorage.setItem("userfirstname", JSON.stringify(findUser));
        setSuccess("Login Sucessfully");
        reset();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }, 2000);
  }

  return (
    <>
      <div className={Style.authSection}>
        <form className={Style.authForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={Style.formHeading}>
            <h4 className="fontweight-700">Sign In</h4>
            <p className={Style.formHeadingPara}>
              Enter your email and password to sign in!
            </p>
          </div>

          <div className={Style.formBox}>
            {/* email */}
            <label>Email*</label>
            <input
              type="text"
              placeholder="mail@simple.com"
              className={Style.inputBox}
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className={Style.errorMsg}>{errors.email.message}</p>
            )}
          </div>

          <div className={Style.formBox}>
            {/* password */}
            <label>Password*</label>
            <div className={Style.inputBoxPasswordArea}>
              <input
                type={inputType}
                placeholder="Min. 8 characters"
                className={Style.inputBox}
                {...register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Must include uppercase, lowercase, number & special character",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => eyeToggleHandler()}
                className={Style.eyeToggleBtn}
              >
                {eyeToggle ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            {errors.password && (
              <p className={Style.errorMsg}>{errors.password.message}</p>
            )}
          </div>

          <Link to="/sign-in" className={Style.forgotPass}>
            <p>Forgot Password?</p>
          </Link>

          <div className={Style.formBoxBtn}>
            <button disabled={loading} type="submit" className={Style.authBtn}>
              {loading ? <span className={Style.spinner}></span> : "Sign In"}
            </button>
          </div>

          <p>
            Not registered yet?
            <Link to="/sign-up" className={Style.authRedirectLink}>
              Create an account
            </Link>
          </p>
        </form>
      </div>

      <div className={Style.authImageArea}>
        <img src={authImage} className={Style.authImage} />
        <h2 className={Style.authLargeText}>Workzon</h2>
      </div>

      {error && <Toast type="error" toastMessage={error} />}
      {success && <Toast type="success" toastMessage={success} />}
    </>
  );
}
