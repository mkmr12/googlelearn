import { ErrorMessage, useFormik } from "formik";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
export default function Register() {
    const navigate = useNavigate()

    const initialValues = {
        name: "",
        email: "",
        age: "",
        password: "",
        phoneno: "",
    };
    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is Required"),
        age: yup.string().required("Age is Required"),
        phoneno: yup.string().required("Phone is Required"),
        password: yup.string().required("Password is Required"),
        email: yup.string().email().required("Email is Required"),
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            addUser(values)
        },
    });

    const addUser = (data) => {
        console.log(db)
        addDoc(collection(db, "users"), data).then((res) => {
            if (res._key.path.segments[1] != null)
                navigate('/dashboard')
        })
        delete data["password"];
        localStorage.setItem('user',JSON.stringify(data))
    }
    return (
        <>
            <div
                className="card col-5 p-5 m-auto mt-4 p-0"
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
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="Number"
                            placeholder="Age"
                            className="form-control"
                            {...formik.getFieldProps("age")}
                        />
                        {formik.touched.age && formik.errors.age ? (
                            <div style={{ color: "red" }}>{formik.errors.age}</div>
                        ) : null}
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="form-control"
                            {...formik.getFieldProps("phoneno")}
                        />
                        {formik.touched.phoneno && formik.errors.phoneno ? (
                            <div style={{ color: "red" }}>{formik.errors.phoneno}</div>
                        ) : null}
                    </div>
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

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary px-5 mb-4 ">
                            Register
                        </button>
                    </div>
                    <div className="text-center">
                        <p>
                            Already member? <Link to='/'>Sign in</Link>
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
