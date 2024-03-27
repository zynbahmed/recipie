import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Client from "../services/api"

import Reviews from "../components/Reviews"
import AddReview from "../components/AddReview"
import Creator from "../components/Creator"
import SaveRecipeButton from "../components/SaveRecipeButton"

const RecipeDetails = ({ user, list, setList }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const navigate = useNavigate()
  let { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [saved, Setsaved] = useState(false)
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    const getRecipe = async () => {
      const response = await Client.get(`/recipe/${id}`)
      setRecipe(response.data)
      let userdata = (await Client.get("/")).data
      if (
        userdata?.savedRecipes
          .map((recipe) => {
            return recipe._id.toString()
          })
          .includes(id)
      ) {
        Setsaved(true)
      } else {
        Setsaved(false)
      }
    }
    getRecipe()
  }, [user])

  const handleDelete = async (id) => {
    try {
      await Client.delete(`/recipe/${id}`)
      setShowSuccessMessage(true)
    } catch (error) {
      console.error("Error submitting recipe:", error)
    }
  }

  const handleEditPage = () => {
    navigate(`/editrecipe/${id}`)
  }

  const ali = (a) => {
    setRecipe(a)
  }

  const saveRecipe = async () => {
    await Client.post(`/recipe/${id}`, id)
    Setsaved(true)
  }
  const unsaveRecipe = async () => {
    await Client.delete(`/unsave/${id}`)
    Setsaved(false)
  }

  const chechBoxSelector = () => {
    const checkBoxes = document.querySelectorAll('ul input[type="checkbox"]')
    const checked = []
    checkBoxes.forEach((cb) => {
      if (cb.checked) {
        checked.push(cb.value)
      }
    })
    setShoppingList(checked)
  }
  const addToCart = (shoppingList) => {
    const existingItemIndex = list.findIndex(
      (itemInCart) => itemInCart.name === shoppingList.name
    )
    if (existingItemIndex !== -1) {
      return
    }
    setList([...list, shoppingList])
    // console.log(list)
  }

  function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0

    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
    const averageRating = totalRating / reviews.length
    return averageRating
  }

  function renderStars(averageRating) {
    const filledStars = Math.floor(averageRating)
    const emptyStars = 5 - filledStars

    return (
      <div className="flex space-x-2 mt-4">
        {[...Array(filledStars)]
          .fill(true)
          .concat(Array(emptyStars).fill(false))
          .map((isFilled, index) => (
            <svg
              key={index}
              class={`w-5 fill-${isFilled ? "red-800" : "gray-800"}`}
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
      </div>
    )
  }

  const averageRating = calculateAverageRating(recipe?.reviews)

  const close = () => {
    setShowSuccessMessage(false)
  }

  return (
    <div>
      <>
        {showSuccessMessage && (
          <div className="fixed bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg z-50">
            <svg
              viewBox="0 0 24 24"
              className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              />
            </svg>
            <span className="text-red-800">Your recipe has been deleted.</span>
            <button
              onClick={close}
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg focus:ring-2  p-1.5 inline-flex items-center justify-center h-8 w-8 "
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </>
      <div className="font-[sans-serif] mx-60">
        <div className="lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 border border-grey-200 p-10 mb-5 shadow-xl">
            <div className="lg:col-span-3 bg-base-100 w-full top-0 text-center p-8">
              <img src={recipe?.photo} alt={recipe?.title} />
              {user && user?.id === recipe?.creator?._id && (
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    className="text-red-500 font-extrabold uppercase hover:text-red-900"
                    onClick={() => {
                      handleDelete(recipe._id)
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleEditPage}
                    className="text-blue-500 font-extrabold uppercase hover:text-blue-900"
                  >
                    Edit
                  </button>
                </div>
              )}
              {/* <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={saveRecipe}
                className="text-red-500 font-extrabold uppercase hover:text-green-900"
              >
                UnSave Recipe
              </button>
              <button
                onClick={unsaveRecipe}
                className="text-green-500 font-extrabold uppercase hover:text-green-900"
              >
                Unsave
              </button>
            </div> */}
              <SaveRecipeButton
                saved={saved}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                user={user}
              />
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4 mt-4">
                <h1 className="text-2xl font-extrabold">{recipe?.title}</h1>
              </div>
              <div className="flex space-x-2 mt-4">
                {renderStars(averageRating)}
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold">About the Recipe</h3>
                <hr></hr>
              </div>
              <p>{recipe?.description}</p>
              <div className="mt-8">
                <h3 className="text-lg font-bold">Ingredients</h3>
                <hr></hr>
                <ul className="space-y-3 mt-4 pl-4 text-sm list-disc">
                  {recipe?.ingredient.map((item) => (
                    <li key={item.name} className="mr-4">
                      <input
                        type="checkbox"
                        onChange={chechBoxSelector}
                        value={item.name}
                      />
                      {item?.amount} {item?.unit} : {item?.name}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    addToCart(shoppingList)
                  }}
                  className="m-2 mt-5 reg-btn "
                >
                  Add to Grocery List
                </button>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold">Step by Step</h3>
                <hr></hr>
                <p className="text-l mt-4">
                  {recipe?.steps.replace(/(?:\\[rn]|[\r\n]+)+/g, "")}
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="border border-grey-200 p-10 mb-5 shadow-xl">
            <Creator creator={recipe?.creator} />
          </div>

          <div className="border border-grey-200 p-10 mb-5 shadow-xl">
            <Reviews reviews={recipe?.reviews} />
            {user ? <AddReview id={id} ali={ali} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
