import SavedRecipe from '../components/SavedRecipe'
import CreatedRecipe from '../components/CreatedRecipe'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const Profile = ({ user }) => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getUserId()
  })

  const getUserId = async () => {
    const res = await Client.get('/')
    setId(res.data._id)
    setProfile(res.data)
  }
  const handleClick = () => {
    navigate(`/editprofile/${id}`)
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="shadow -lg p-6">
              <div className="flex flex-col items-center">
                <button onClick={handleClick}>Edit</button>
                <img
                  src={profile.avatar}
                  className="w-32 h-32 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{profile.name}</h1>
              </div>
              <hr className="my-6 border-t border-gray-300"></hr>
              {/* <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind Css</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className=" shadow p-6">
              <CreatedRecipe user={user} />
              <SavedRecipe user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
