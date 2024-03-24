import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
const EditRecipe = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [editRecipe, setEditRecipe] = useState(null)
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: '',
    description: '',
    cookingTime: '',
    steps: '',
    photo: ''
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
    navigate('/allrecipes')
  }

  return (
    <div>
      <form>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          defaultValue={editRecipe?.title}
        />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          name="description"
          placeholder="Description"
          id=""
          cols="100"
          rows="10"
          onChange={handleChange}
          defaultValue={editRecipe?.description}
        ></textarea>
        <br />
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          id=""
          onChange={handleChange}
          defaultValue={editRecipe?.cookingTime}
        />
        <label htmlFor="steps">Steps</label>
        <br />
        <textarea
          name="steps"
          placeholder="Steps"
          id=""
          cols="100"
          rows="10"
          onChange={handleChange}
          defaultValue={editRecipe?.steps}
        ></textarea>
        <br />
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          placeholder="Picture"
          id=""
          onChange={handleChange}
          defaultValue={editRecipe?.photo}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}
export default EditRecipe
