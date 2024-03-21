import { NavLink } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img src="../public/logo2.png" />
          </a>
        </div>
        <div className="menu">
          <div className="menu-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/shoopingList">ShoppingList</NavLink>
            <NavLink to="/">
              <button className="log-in">Logout</button>
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
  const publicOptions = (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src="../public/logo2.png" />
        </a>
      </div>
      <div className="menu">
        <div className="menu-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">
            <button className="log-in">Login</button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
  return (
    <header>
      <nav>{user ? userOptions : publicOptions}</nav>
    </header>
  )
}

export default Nav
