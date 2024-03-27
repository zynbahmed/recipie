import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
const CreatorProfile = () => {
  const [profile, setProfile] = useState(null)
  let { id } = useParams()
  useEffect(() => {
    const getProfile = async () => {
      const responce = await Client.get(`/user/${id}`)
      setProfile(responce.data)
      console.log('this is the creator profile', responce.data)
    }
    getProfile()
  }, [])

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="shadow -lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={profile?.avatar}
                  className="w-32 h-32 rounded-full mb-4 shrink-0"
                />
                <p>{profile?.name}</p>
                <h1 className="text-xl font-bold"></h1>
              </div>
              <hr className="my-6 border-t border-gray-300"></hr>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className=" shadow p-6"></div>
            {profile?.myRecipes?.map((recipe) => (
              <div>
                <Link to={`/recipeDetails/${recipe._id}`}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.photo} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorProfile
