import SavedRecipe from '../components/SavedRecipe'
import CreatedRecipe from '../components/CreatedRecipe'

const Profile = ({ user }) => {
  console.log(user)
  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="shadow -lg p-6">
              <div className="flex flex-col items-center">
                <button>Edit</button>
                <img
                  src={user?.avatar}
                  className="w-32 h-32 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{user?.name}</h1>
                {/* <h2>HEREEEEE {user?.savedRecipes[0].title}</h2> */}
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
              <CreatedRecipe />
              <SavedRecipe user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
