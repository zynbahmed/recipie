import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/api"
const EditRecipe = () => {
  let { id } = useParams()
  const [editRecipe, setEditRecipe] = useState(null)
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: "",
    description: "",
    cookingTime: "",
    steps: "",
    photo: ""
  })
  useEffect(() => {
    const getRecipe = async () => {
      const response = await Client.get(`/recipe/${id}`)
      console.log(response.data)
      setEditRecipe(response.data)
      setAddRecipeFormValues({
        title: response.data.title,
        description: response.data.description,
        cookingTime: response.data.cookingTime,
        steps: response.data.steps,
        photo: response.data.photo
      })
    }
    getRecipe()
  }, [])
  const handleChange = (event) => {
    event.preventDefault()
    setAddRecipeFormValues({
      ...addRecipeformValues,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async () => {
    await Client.put(`/recipe/${id}`, addRecipeformValues)
    navigate("/allrecipes")
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center bg-[url('/pies.jpg')]"></div>
      <div className="relative mx-auto w-full max-w-max px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg-base-100">
        <div class="w-full">
          <form>
            <h1 className="text-2xl font-bold uppercase">
              Edit {editRecipe?.title} Details
            </h1>
            <br />
            <div className="relative">
              <input
                type="text"
                name="title"
                placeholder=""
                onChange={handleChange}
                defaultValue={editRecipe?.title}
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
                id=""
                cols="100"
                rows="10"
                onChange={handleChange}
                defaultValue={editRecipe?.description}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              ></textarea>
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
                id=""
                onChange={handleChange}
                defaultValue={editRecipe?.cookingTime}
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
                id=""
                cols="100"
                rows="10"
                onChange={handleChange}
                defaultValue={editRecipe?.steps}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              ></textarea>
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
                placeholder="Picture"
                id=""
                onChange={handleChange}
                defaultValue={editRecipe?.photo}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="photo"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Photo
              </label>
            </div>
            <button onClick={handleSubmit} className="reg-btn m-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditRecipe
