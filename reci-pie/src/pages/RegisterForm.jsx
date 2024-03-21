import { useState } from "react"
import "../styles/form.css"

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // await ({
    //   name: formValues.name,
    //   email: formValues,email,
    //   password: formValues.password
    // }
    // )
  }

  const handleToggleContainer = (isActive) => {
    const container = document.getElementById("container")
    container.classList.toggle("right-panel-active", isActive)
  }

  return (
    <div className="body">
      <div className="reg-container" id="container">
        <div className="form-container sign-up-container">
          <form className="reg-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Create Account</h1>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Please enter a username"
              value={formValues.name}
            />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="your email"
              value={formValues.email}
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="enter your password"
              value={formValues.password}
            />
            <input
              type="password"
              placeholder="confirm passord"
              onChange={handleChange}
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
            <button
              className="btn"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="reg-form" action="#">
            <h1 className="form-title">Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Sign In</button>
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
                className="ghost btn"
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
                className="ghost btn"
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
