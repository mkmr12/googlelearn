import { ErrorMessage, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is Required"),
    email: yup.string().email().required("Email is Required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div
        className="card col-5 p-5 m-auto mt-4"
        style={{  background: "whitesmoke" }}
      >
        <img
          className="m-auto mb-3"
          src="https://express.adobe.com/express-apps/logo-maker/img/visual-style-references/modern/modern4.png"
          style={{ height: 150, width: 165}}
        />
        <form>
          <div className="form-outline mb-4">
            <input
              type="email"
             placeholder="Email"
              className="form-control"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>

            <div className="col">
            <Link to="/forgot-password">Forgot Password ?</Link>

            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary px-5 mb-4 ">
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p>
              Not a member? <Link to ='/register'>Register</Link>
            </p>
            {/* <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button> */}
          </div>
        </form>
      </div>
    </>
  );
}
