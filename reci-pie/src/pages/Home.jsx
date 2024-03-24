import '../styles/home.css'

import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
  let navigate = useNavigate()

  const navigation = () => {
    navigate('/register')
  }

  return (
    <div className="home-container">
      <div className="banner-text">
        <h1 className="text-3xl text-white">Reci-Pie</h1>
      </div>
      <div className="banner-button">
        <button className="" onClick={navigation}>
          Join Us
        </button>
      </div>
    </div>
  )
}
export default Home
