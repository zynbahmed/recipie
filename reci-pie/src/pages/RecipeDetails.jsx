import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'
import Creator from '../components/Creator'

const RecipeDetails = ({ user, list, setList }) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    const getRecipe = async () => {
      const response = await Client.get(`/recipe/${id}`)
      console.log(response.data)
      setRecipe(response.data)
    }
    getRecipe()
  }, [])

  const handleDelete = async (id) => {
    console.log(`/recipe/${id}`)
    await Client.delete(`/recipe/${id}`)
  }

  const handleEditPage = () => {
    navigate(`/editrecipe/${id}`)
  }

  const ali = (a) => {
    setRecipe(a)
  }

  const saveRecipe = async () => {
    console.log(id)
    await Client.post(`/recipe/${id}`, id)
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
    console.log(checked)
    console.log(shoppingList)
  }
  const addToCart = (shoppingList) => {
    const existingItemIndex = list.findIndex(
      (itemInCart) => itemInCart.name === shoppingList.name
    )
    if (existingItemIndex !== -1) {
      return
    }
    setList([...list, shoppingList])
    console.log(list)
  }
  return (
    <div className="font-[sans-serif]">
      <div className="lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-base-100 w-full lg:sticky top-0 text-center p-8">
            <img src={recipe?.photo} alt={recipe?.title} />
          </div>
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-4 mt-4">
              <h1 className="text-2xl font-extrabold">{recipe?.title}</h1>
              {user?.id === recipe?.creator?._id && (
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
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={saveRecipe}
                  className="text-green-500 font-extrabold uppercase hover:text-green-900"
                >
                  Save Recipe
                </button>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <svg
                className="w-5 fill-red-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-red-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-red-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-red-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">About the Recipe</h3>
              <hr></hr>
            </div>
            <p>{recipe?.description}</p>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Ingredients</h3>
              <hr></hr>
              {recipe?.ingredient.map((item) => (
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm">
                  <li>
                    <input
                      type="checkbox"
                      onChange={chechBoxSelector}
                      value={item.name}
                    />
                    {item?.amount} {item?.unit} : {item?.name}
                  </li>
                </ul>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Step by Step</h3>
              <hr></hr>
              <p className="text-l mt-4">
                {recipe?.steps.replace(/(?:\\[rn]|[\r\n]+)+/g, '')}
                <br />
                <button
                  onClick={() => {
                    addToCart(shoppingList)
                  }}
                >
                  Add to Grocery List
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Creator creator={recipe?.creator} />
          <Reviews reviews={recipe?.reviews} />
          {user ? <AddReview id={id} ali={ali} /> : null}
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
