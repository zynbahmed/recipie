import '../styles/home.css'

import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
  let navigate = useNavigate()

  const navigation = () => {
    navigate('/register')
  }

  const recRavigation = () => {
    navigate("/allrecipes")
  }

  return (
    <div className="home-container">
      <div className="banner-text">
        <h1 className="text-3xl text-white">Reci-Pie</h1>
      </div>
      <div className="banner-button">
        <button onClick={navigation}>
          Join Us
        </button>
        <br/>
        <button onClick={recRavigation}>
          Discover Recipes
        </button>
      </div>
    </div>
  )
}
export default Home
