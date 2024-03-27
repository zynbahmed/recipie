import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { SignInUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google"

import "../styles/form.css"

const RegistrationForm = ({ setUser }) => {
  let navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConPasswordVisible, setIsConPasswordVisible] = useState(false)
  const [isLogPasswordVisible, setIsLogPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  function toggleConPasswordVisibility() {
    setIsConPasswordVisible((prevState) => !prevState)
  }

  function toggleLogPasswordVisibility() {
    setIsLogPasswordVisible((prevState) => !prevState)
  }
  const initialState = {
    email: "",
    password: ""
  }

  const [init, setInit] = useState(initialState)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
  }

  const handleChangeIn = (event) => {
    setInit({ ...init, [event.target.name]: event.target.value })
  }

  const handleSubmitIn = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(init)
    setInit(initialState)
    setUser(payload)
    console.log(init)
    navigate("/allrecipes")
  }

  const handleToggleContainer = (isActive) => {
    const container = document.getElementById("container")
    container.classList.toggle("right-panel-active", isActive)
  }

  return (
    <div className="body">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="reg-container" id="container">
        <div className="form-container sign-up-container">
          <form className="reg-form" onSubmit={handleLogin}>
            <h1 className="form-title">Create Account</h1>
            <input
              onChange={handleChange}
              className="mx-0 my-2 py-3 px-4"
              type="text"
              name="name"
              placeholder="Please Enter a Username"
            />
            <input
              onChange={handleChange}
              className="mx-0 my-2 py-3 px-4"
              type="email"
              name="email"
              placeholder="Please Enter Your E-mail"
            />
            <div className="relative w-full">
              <input
                onChange={handleChange}
                className="mx-0 my-2 py-3 px-4"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id="hs-toggle-password"
                placeholder="Please Enter a Password"
              />
              <button
                type="button"
                data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                className="absolute top-0 end-0 p-3.5 rounded-e-md mt-3"
                onClick={togglePasswordVisibility}
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    className="hs-password-active:hidden"
                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                  />
                  <path
                    className="hs-password-active:hidden"
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path
                    className="hs-password-active:hidden"
                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  />
                  <line
                    className="hs-password-active:hidden"
                    x1="2"
                    x2="22"
                    y1="2"
                    y2="22"
                  />
                  <path
                    className="hidden hs-password-active:block"
                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                  />
                  <circle
                    className="hidden hs-password-active:block"
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
              </button>
            </div>
            <div className="relative w-full">
              <input
                onChange={handleChange}
                className="mx-0 my-2 py-3 px-4"
                type={isConPasswordVisible ? "text" : "password"}
                placeholder="Please Enter a Password Again"
                name="confirmPassword"
                id="hs-toggle-conpassword"
                required
              />
              <button
                type="button"
                data-hs-toggle-conpassword='{
        "target": "#hs-toggle-conpassword"
      }'
                className="absolute top-0 end-0 p-3.5 rounded-e-md mt-3"
                onClick={toggleConPasswordVisibility}
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    className="hs-conpassword-active:hidden"
                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                  />
                  <path
                    className="hs-conpassword-active:hidden"
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path
                    className="hs-conpassword-active:hidden"
                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  />
                  <line
                    className="hs-conpassword-active:hidden"
                    x1="2"
                    x2="22"
                    y1="2"
                    y2="22"
                  />
                  <path
                    className="hidden hs-conpassword-active:block"
                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                  />
                  <circle
                    className="hidden hs-conpassword-active:block"
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
              </button>
            </div>
            <button className="reg-btn mt-16">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="reg-form" onSubmit={handleSubmitIn}>
            <h1 className="form-title">Sign in</h1>
            <input
              className="mx-0 my-2 py-3 px-4"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChangeIn}
            />
            <div className="relative w-full">
              <input
                className="mx-0 my-2 py-3 px-4"
                type={isLogPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChangeIn}
              />
              <button
                type="button"
                data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                className="absolute top-0 end-0 p-3.5 rounded-e-md mt-3"
                onClick={toggleLogPasswordVisibility}
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    className="hs-password-active:hidden"
                    d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                  />
                  <path
                    className="hs-password-active:hidden"
                    d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  />
                  <path
                    className="hs-password-active:hidden"
                    d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  />
                  <line
                    className="hs-password-active:hidden"
                    x1="2"
                    x2="22"
                    y1="2"
                    y2="22"
                  />
                  <path
                    className="hidden hs-password-active:block"
                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                  />
                  <circle
                    className="hidden hs-password-active:block"
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
              </button>
            </div>
            <button className="reg-btn mt-16">Sign In</button>
            <br />
            <p className="text-sm">Or Sign in With Your Google Account</p>
            <br />
            <div>
              <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}>
                <GoogleLogin />
              </a>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="form-title">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost reg-btn mt-16"
                id="signIn"
                onClick={() => handleToggleContainer(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="form-title">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost reg-btn mt-16"
                id="signUp"
                onClick={() => handleToggleContainer(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
