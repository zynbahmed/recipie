import { Link } from 'react-router-dom'

const CreatedRecipe = ({ user }) => {
  const recipes = user?.myRecipes

  const getTimeAgo = (timestamp) => {
    const time = new Date(timestamp)
    const now = new Date()
    const differenceInMs = now.getTime() - time.getTime()

    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
    const month = 30 * day
    const year = 365 * day

    if (differenceInMs < minute) {
      return Math.floor(differenceInMs / 1000) + ' seconds ago'
    } else if (differenceInMs < hour) {
      return Math.floor(differenceInMs / minute) + ' minutes ago'
    } else if (differenceInMs < day) {
      return Math.floor(differenceInMs / hour) + ' hours ago'
    } else if (differenceInMs < month) {
      return Math.floor(differenceInMs / day) + ' days ago'
    } else if (differenceInMs < year) {
      return Math.floor(differenceInMs / month) + ' months ago'
    } else {
      return Math.floor(differenceInMs / year) + ' years ago'
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Created Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {recipes?.map((recipe) => (
          <div className="overflow-hidden shadow-lg flex flex-col w-full">
            <div key={recipe._id} className="relative">
              <Link to={`/recipeDetails/${recipe._id}`}>
                <img src={recipe?.photo} alt={recipe?.title} className="w-full" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </Link>
              <div className="px-6 py-4 mb-auto">
                <Link className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {recipe?.title}
                </Link>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between">
                <span
                  href="#"
                  className="py-1 text-xs font-regular  mr-1 flex flex-row items-center"
                >
                  <span className="ml-1">{getTimeAgo(recipe?.createdAt)}</span>
                </span>

                <span
                  href="#"
                  className="py-1 text-xs font-regular mr-1 flex flex-row items-center"
                >
                  <svg
                    className="h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span className="ml-1">{recipe?.reviews?.length} Comments</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreatedRecipe
