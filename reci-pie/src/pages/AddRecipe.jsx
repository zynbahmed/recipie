import { useState } from 'react'
import Client from '../services/api'
import { Link } from 'react-router-dom'
const AddRecipe = ({ user }) => {
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
    await Client.post(`/recipe`, addRecipeformValues)

    console.log(addRecipeformValues)
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
      <div className="relative mx-auto w-full max-w-max px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg-base-100">
        <div class="w-full">
          <form>
            <h1 className="text-2xl font-bold uppercase"> Add a Recipe</h1>
            <br />
            <div className="relative">
              <label>Select Category</label>
              <select name="category" id="category" onChange={handleChange}>
                <option value="Beef">Beef</option>
                <option value="Lamb">Lamb</option>
                <option value="Chicken">Chicken</option>
                <option value="Sea-Food">Sea-Food</option>
                <option value="Dessert">Dessert</option>
                <option value="Breakfast">Breakfast</option>
              </select>

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
