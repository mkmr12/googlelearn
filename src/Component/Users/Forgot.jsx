import { ErrorMessage, useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import * as yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object().shape({
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
        style={{ background: "whitesmoke" }}
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

         
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary px-5 mb-4 ">
              Send Reset Link
            </button>
          </div>
          <div className="text-center">
            <p>
              Remember Your Password ? <Link to ='/'>Sign in</Link>
            </p>

          </div>

        </form>
      </div>
    </>
  );
}
