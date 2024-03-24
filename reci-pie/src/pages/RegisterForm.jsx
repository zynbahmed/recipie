import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { SignInUser } from '../services/Auth'
import '../styles/form.css'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = {
    email: '',
    password: ''
  }
  const [init, setInit] = useState(initialState)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    navigate('/')
  }

  const handleToggleContainer = (isActive) => {
    const container = document.getElementById('container')
    container.classList.toggle('right-panel-active', isActive)
  }

  return (
    <div className="body">
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
            <input
              onChange={handleChange}
              className="mx-0 my-2 py-3 px-4"
              type="password"
              name="password"
              placeholder="Please Enter a Password"
            />
            <input
              onChange={handleChange}
              className="mx-0 my-2 py-3 px-4"
              type="password"
              placeholder="Please Enter a Password Again"
              name="confirmPassword"
              required
            />
            <button
              className="reg-btn mt-16"
              // disabled={
              //   !emailRef.current.value &&
              //   !passRef.current.value &&
              //   conPassRef.current.value === passRef.current.value
              // }
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="reg-form" action="#" onSubmit={handleSubmitIn}>
            <h1 className="form-title">Sign in</h1>
            <input
              className="mx-0 my-2 py-3 px-4"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChangeIn}
            />
            <input
              className="mx-0 my-2 py-3 px-4"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChangeIn}
            />
            <button
              className="reg-btn mt-16"
              // disabled={
              //   !loginEmailRef.current.value && !loginPassRef.current.value
              // }
            >
              Sign In
            </button>
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
