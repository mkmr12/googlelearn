import { ErrorMessage, useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { Link , Navigate } from "react-router-dom";
import * as yup from "yup";
import { userContext } from "../../App";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const userFetch = collection(db, "users");
export default function Login() {
  const user = useContext(userContext)
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
      signin(values.email,values.password)
    },
  });

  const signin = (email, password) => {
    console.log(email,password)
    getDocs(query(userFetch,where('email' ,'==', email).where('password','==', password))).then((res) => {
      console.log(res._snapshot.docChanges[0].doc.data.value.mapValue.fields)
     
  })
  };

  return (
    <>
      <div
        className="card col-5 p-5 m-auto mt-4"
        style={{ background: "whitesmoke" }}
      >
        <img
          className="m-auto mb-3"
          src="https://express.adobe.com/express-apps/logo-maker/img/visual-style-references/modern/modern4.png"
          style={{ height: 150, width: 165 }}
        />
        <form onSubmit={formik.handleSubmit}>
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
            <button type="submit" className="btn btn-primary px-5 mb-4 ">
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p>
              Not a member? <Link to='/register'>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
