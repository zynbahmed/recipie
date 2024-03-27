import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RecipeDB = ({ dishes, search }) => {
  const [filter, setFilter] = useState([])

  useEffect(() => {
    const searchWord = search.toLowerCase()
    const filteredDishes = dishes.filter((dish) =>
      dish.title.toLowerCase().includes(searchWord)
    )
    setFilter(filteredDishes)
  }, [dishes, search])

  const getTimeAgo = (timestamp) => {
    const now = new Date()
    const timeElapsed = parseInt(now) - parseInt(timestamp)
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
    const month = 30 * day
    const year = 365 * day

    if (timeElapsed < minute) {
      return Math.floor(timeElapsed / 1000) + ' seconds ago'
    } else if (timeElapsed < hour) {
      return Math.floor(timeElapsed / minute) + ' minutes ago'
    } else if (timeElapsed < day) {
      return Math.floor(timeElapsed / hour) + ' hours ago'
    } else if (timeElapsed < month) {
      return Math.floor(timeElapsed / day) + ' days ago'
    } else if (timeElapsed < year) {
      return Math.floor(timeElapsed / month) + ' months ago'
    } else {
      return Math.floor(timeElapsed / year) + ' years ago'
    }
  }

  // return (
  //   <div>
  //     {filter.map((food) => (
  //       <div>
  //         <h1>{food.title}</h1>
  //         <img src={food.photo} alt={food.title} />
  //       </div>
  //     ))}
  //   </div>
  // )
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filter.map((recipe) => (
          <div className="overflow-hidden shadow-lg flex flex-col w-full">
            <div key={recipe._id} className="relative">
              <Link to={`/recipeDetails/${recipe._id}`}>
                <img src={recipe.photo} alt={recipe.title} className="w-full" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </Link>
              <div className="px-6 py-4 mb-auto">
                <Link className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {recipe.title}
                </Link>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between">
                <span
                  href="#"
                  className="py-1 text-xs font-regular  mr-1 flex flex-row items-center"
                >
                  <span className="ml-1">{getTimeAgo(recipe.createdAt)}</span>
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
                  <span className="ml-1">{recipe.reviews.length} Comments</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecipeDB
