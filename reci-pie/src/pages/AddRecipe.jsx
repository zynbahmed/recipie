import { useState } from 'react'
import Client from '../services/api'

const AddRecipe = ({ user }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: '',
    description: '',
    cookingTime: '',
    steps: '',
    photo: '',
    ingredients: [{ name: '', amount: '', unit: '' }],
    category: '',
    creator: user.id
  })

  const handleChange = (event) => {
    event.preventDefault()
    setAddRecipeFormValues({
      ...addRecipeformValues,
      [event.target.name]: event.target.value
    })
  }

  const handleAdd = (event) => {
    event.preventDefault()
    setAddRecipeFormValues((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        { name: '', amount: '', unit: '' }
      ]
    }))
  }

  const handleIngredientChange = (index, event) => {
    event.preventDefault()
    const { name, value } = event.target
    setAddRecipeFormValues((prevState) => {
      const ingredients = [...prevState.ingredients]
      ingredients[index][name] = value
      return { ...prevState, ingredients }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await Client.post(`/recipe`, addRecipeformValues)
      setShowSuccessMessage(true)
    } catch (error) {
      console.error('Error submitting recipe:', error)
    }

    setAddRecipeFormValues({
      title: '',
      description: '',
      cookingTime: '',
      steps: '',
      photo: '',
      ingredients: [{ name: '', amount: '', unit: '' }],
      category: '',
      creator: user.id
    })
  }

  const close = () => {
    setShowSuccessMessage(false)
  }

  const handleDelete = (index, event) => {
    if (index > 0) {
      setAddRecipeFormValues((prevState) => {
        const ingredients = [...prevState.ingredients]
        ingredients.splice(index, 1)
        return { ...prevState, ingredients }
      })
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center bg-[url('/pies.jpg')]"></div>
      {showSuccessMessage && (
        <div className="fixed bg-green-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg z-50">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            />
          </svg>
          <span className="text-green-800">Your recipe has been added.</span>
          <button
            onClick={close}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg focus:ring-2  p-1.5 inline-flex items-center justify-center h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span Breakfast="sr-only">Close</span>
            <svg
              className="w-3 h-3"
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
      <div className="relative mx-auto w-full max-w-max px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg-base-100">
        <div className="w-full">
          <form>
            <h1 className="text-2xl font-bold uppercase"> Add a Recipe</h1>
            <br />
            <div className="relative">
              <select
                name="category"
                id="category"
                onChange={handleChange}
                className="block px-2.5 pb-2.5 pt-4 w-full border border-gray-300 text-gray-900 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 "
              >
                <option selected disabled>
                  Select a Category
                </option>
                <option value="Beef">Beef</option>
                <option value="Lamb">Lamb</option>
                <option value="Chicken">Chicken</option>
                <option value="Sea-food">Sea-Food</option>
                <option value="Dessert">Dessert</option>
                <option value="Breakfast">Breakfast</option>
              </select>
            </div>
            <br />
            <div className="relative">
              <input
                type="text"
                name="title"
                placeholder=""
                onChange={handleChange}
                value={addRecipeformValues.title}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="title"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Title
              </label>
            </div>
            <br />
            <div className="relative">
              <textarea
                name="description"
                placeholder=""
                cols="100"
                rows="10"
                onChange={handleChange}
                value={addRecipeformValues.description}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="description"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Description
              </label>
            </div>
            <br />
            <div className="relative">
              <input
                type="text"
                name="cookingTime"
                placeholder=""
                onChange={handleChange}
                value={addRecipeformValues.cookingTime}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="cookingTime"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Cooking Time
              </label>
            </div>
            <br />
            <div className="relative">
              <textarea
                name="steps"
                placeholder=""
                cols="100"
                rows="10"
                onChange={handleChange}
                value={addRecipeformValues.steps}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="steps"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Steps
              </label>
            </div>
            <br />
            <div className="relative">
              <input
                type="text"
                name="photo"
                placeholder=""
                onChange={handleChange}
                value={addRecipeformValues.photo}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="photo"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Photo
              </label>
            </div>
            <br />
            <h1 className="text-2xl font-bold uppercase border-b">
              Ingredients
            </h1>
            {addRecipeformValues.ingredients.map((ingredient, index) => (
              <div key={index}>
                <br />
                <h4>Add Ingredients</h4>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=""
                    value={ingredient.name}
                    onChange={(event) => handleIngredientChange(index, event)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Name
                  </label>
                </div>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    name="amount"
                    placeholder=""
                    value={ingredient.amount}
                    onChange={(event) => handleIngredientChange(index, event)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="amount"
                    className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Amount
                  </label>
                </div>
                <br />
                <div className="relative">
                  <input
                    type="text"
                    name="unit"
                    placeholder=""
                    value={ingredient.unit}
                    onChange={(event) => handleIngredientChange(index, event)}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none d dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="unit"
                    className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Unit
                  </label>
                </div>
                <br />
                <button
                  type="button"
                  className="text-red-500 font-extrabold uppercase hover:text-red-900 m-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete an ingredient
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-blue-500 font-extrabold uppercase hover:text-blue-900 m-2"
              onClick={handleAdd}
            >
              Add more ingredients
            </button>
            <br />
            <button onClick={handleSubmit} className="reg-btn m-2">
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
