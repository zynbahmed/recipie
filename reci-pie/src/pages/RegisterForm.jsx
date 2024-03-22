import { useState, useRef } from "react"
import "../styles/form.css"

const RegistrationForm = () => {
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // })

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const conPassRef = useRef(null)
  const loginEmailRef = useRef(null)
  const loginPassRef = useRef(null)

  // const handleChange = (event) => {
  //   setFormValues({ ...formValues, [event.target.name]: event.target.value })
  // }

  const handleReg = async (event) => {
    event.preventDefault()
    // Client.post('/Auth', {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   passwordDigaset: passRef.current.value
    // }).then((response) => {
    // })
    nameRef.current.value = null
    emailRef.current.value = null
    passRef.current.value = null
    conPassRef.current.value = null
  }

  const handleToggleContainer = (isActive) => {
    const container = document.getElementById("container")
    container.classList.toggle("right-panel-active", isActive)
  }

  return (
    <div className="body">
      <div className="reg-container" id="container">
        <div className="form-container sign-up-container">
          <form className="reg-form" onSubmit={handleReg}>
            <h1 className="form-title">Create Account</h1>
            <input
              className="mx-0 my-2 py-3 px-4"
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Please Enter a Username"
            />
            <input
              className="mx-0 my-2 py-3 px-4"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Please Enter Your E-mail"
            />
            <input
              className="mx-0 my-2 py-3 px-4"
              type="password"
              name="password"
              ref={passRef}
              placeholder="Please Enter a Password"
            />
            <input
              className="mx-0 my-2 py-3 px-4"
              type="password"
              placeholder="Please Enter a Password Again"
              name="confirmPassword"
              ref={conPassRef}
              required
            />
            <button
              className="reg-btn"
              disabled={
                !emailRef ||
                (!passRef &&
                  conPassRef === passRef)
              }
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="reg-form" action="#">
            <h1 className="form-title">Sign in</h1>
            <input
              className="mx-0 my-2 py-3 px-4"
              type="email"
              ref={loginEmailRef}
              placeholder="Email"
            />
            <input
              className="mx-0 my-2 py-3 px-4"
              type="password"
              ref={loginPassRef}
              placeholder="Password"
            />
            <button className="reg-btn">Sign In</button>
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
                className="ghost reg-btn"
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
                className="ghost reg-btn"
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
