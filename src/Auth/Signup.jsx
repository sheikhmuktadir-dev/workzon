import { Link, useNavigate } from "react-router-dom";
import Style from "./auth.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import usePasswordEyeToggle from "../CustomHooks/usePasswordEyeToggle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Toast from "../Components/Toast/Toast";
import useAutoDismiss from "../CustomHooks/useAutoDismiss";
import authImage from "/images/auth.webp";

export default function Signup() {
  // react custom hook
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

  // eye toggle custom hook
  const { eyeToggle, inputType, eyeToggleHandler } = usePasswordEyeToggle();

  // toast hide after 2s custom hook
  useAutoDismiss(error, setError, 2000);
  useAutoDismiss(success, setSuccess, 2000);

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

        const existUser = workzoneusers.find(
          (user) => user.email.toLowerCase() === data.email.toLowerCase(),
        );

        if (existUser) {
          setError("User already exists");
          setLoading(false);
          return;
        }

        workzoneusers.push(data);
        localStorage.setItem("workzoneusers", JSON.stringify(workzoneusers));
        setSuccess("Register successfully");
        reset();
        setTimeout(() => {
          navigate("/sign-in", { replace: true });
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
            <h4 className="fontweight-700">Create an account</h4>
            <p className={Style.formHeadingPara}>
              Enter your name, email, and password to register!
            </p>
          </div>

          <div className={Style.formBox}>
            {/* first name */}
            <label>First Name*</label>
            <input
              type="text"
              {...register("firstname", {
                required: "Please enter first name",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "No spaces or special characters allowed",
                },
              })}
              placeholder="John"
              className={Style.inputBox}
            />
            {errors.firstname && (
              <p className={Style.errorMsg}>{errors.firstname.message}</p>
            )}
          </div>

          <div className={Style.formBox}>
            {/* last name */}
            <label>Last Name*</label>
            <input
              type="text"
              {...register("lastname", {
                required: "Please enter last name",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "No spaces or special characters allowed",
                },
              })}
              placeholder="Doe"
              className={Style.inputBox}
            />
            {errors.lastname && (
              <p className={Style.errorMsg}>{errors.lastname.message}</p>
            )}
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

          <div className={Style.formBoxBtn}>
            <button disabled={loading} type="submit" className={Style.authBtn}>
              {loading ? <span className={Style.spinner}></span> : "Register"}
            </button>
          </div>

          <p>
            Already have an account?
            <Link to="/sign-in" className={Style.authRedirectLink}>
              Sign in
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
