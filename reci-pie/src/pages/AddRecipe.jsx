import { useState } from "react"
import Client from "../services/api"
const AddRecipe = () => {
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: "",
    description: "",
    cookingTime: "",
    steps: "",
    photo: "",
    ingredients: [{ name: "", amount: "", unit: "" }]
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
        { name: "", amount: "", unit: "" }
      ]
    }))
  }

  const handleIngredientChange = (index, event) => {
    const { name, value } = event.target
    setAddRecipeFormValues((prevState) => {
      const ingredients = [...prevState.ingredients]
      ingredients[index][name] = value
      return { ...prevState, ingredients }
    })
  }

  const handleSubmit = async (event) => {
    await Client.post(`/recipe`, addRecipeformValues)
    event.preventDefault()

    console.log(addRecipeformValues)
  }
  const handleDelete = (index, event) => {
    event.preventDefault()
    event.stopPropagation()
    if (index > 0) {
      event.preventDefault()
      setAddRecipeFormValues((prevState) => {
        const ingredients = [...prevState.ingredients]
        ingredients.splice(index, 1)
      })
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center bg-[url('/pies.jpg')]"></div>
      <div className="relative mx-auto w-full max-w-max px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg-white">
        <div class="w-full">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold uppercase"> Add a Recipe</h1>
            <br />
            <div className="relative">
              <input
                type="text"
                name="title"
                placeholder=""
                onChange={handleChange}
                value={addRecipeformValues.title}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="title"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="description"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="cookingTime"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="steps"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="photo"
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Photo
              </label>
            </div>
            <br />
            <h1 className="text-2xl font-bold uppercase">Ingredients</h1>
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
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    name
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
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="amount"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    amount
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
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  />
                  <label
                    htmlFor="unit"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    unit
                  </label>
                </div>
                <br />
                <button
                  className="text-red-500 font-extrabold uppercase hover:text-red-900"
                  onClick={() => handleDelete(index)}
                >
                  Delete an ingredient
                </button>
                <br />
              </div>
            ))}
            <br />
            <button
              className="text-blue-500 font-extrabold uppercase hover:text-blue-900"
              onClick={handleAdd}
            >
              Add more ingredients
            </button>
            <br />
            <br />
            <button className="reg-btn">Add Recipe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
