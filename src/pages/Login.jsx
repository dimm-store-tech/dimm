import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Formik } from "formik";
import "../styles/login.css";
import { InputForm } from "../components/specific/ComponentsForm";
import logo from "../assets/logo.svg";
import { BsEyeSlash } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const  {login,errors, isAutenticaded} = useAuth()
  const navigate = useNavigate()
  if(isAutenticaded) navigate('/profile')
  console.log(errors)
  const [showPassword, setShowPassword] = useState(true);
  console.log(import.meta.env.VITE_APP_API_URL)
  return (
    <div className="cont m-auto mt-12">
      <div className="image px-4 shadow-md">
      {errors.length <= 0 ? "" : <Alert className="mt-3" severity="error">{errors}</Alert>}

        <picture className="mt-4 flex justify-center">
          <img src={logo} alt="" />
        </picture>
        <h1 className="mt-2 color-text-primary font-semibold text-2xl text-center">
          <span className="text-gray-600">¡Hola</span>, te damos la{" "}
          <br className="md:block hidden" /> Bienvenida!
        </h1>
          {/* Formik */}
          <Formik
            initialValues={{ user: "", password: "" }}
            onSubmit={async (values, actions) => {
              await login(values)
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="color-text" htmlFor="email">
              Email
            </label>
            <InputForm
              type="text"
              name="user"
              placeholder="Ingresa tu DNI"
              autofocus={true}
              onChange={handleChange}
              value={values.user}
            />
          </div>

          <div className="mt-4 ">
            <label className="color-text" htmlFor="email">
              Password
            </label>
            <div className="flex justify-center">
              <InputForm
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="**********"
                autofocus={true}
                onChange={handleChange}
                value={values.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="color-text"
              >
                <BsEyeSlash />
              </button>
            </div>
          </div>

          {/* submit */}

          <button
            type="submit"
            className="mt-6 button-primary w-full py-2 text-white rounded-xl md:rounded-xl"
            // disabled={props.disabled}
          >
            Acceder
          </button>
          </form>
            )}
          </Formik>
      </div>
    </div>
  );
}
