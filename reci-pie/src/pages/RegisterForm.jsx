import { useState } from 'react'

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

  return (
    <div>
      Register User
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Please enter a username"
          value={formValues.name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="your email"
          value={formValues.email}
        />
      </form>
      <label htmlFor="email">Password</label>
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="enter your password"
        value={formValues.password}
      />
      <br />
      <label htmlFor="email">Confirm Password</label>
      <input
        onChange={handleChange}
        type="password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        required
      />
      <button
        className="loginBtn"
        disabled={
          !formValues.email ||
          (!formValues.password &&
            formValues.confirmPassword === formValues.password)
        }
      ></button>
    </div>
  )
}

export default RegistrationForm
