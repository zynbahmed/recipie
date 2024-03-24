import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
const EditRecipe = () => {
  let { id } = useParams()
  const [editRecipe, setEditRecipe] = useState(null)
  useEffect(() => {
    const getRecipe = async () => {
      const response = await Client.get(`/recipe/${id}`)
      console.log(response.data)
      setEditRecipe(response.data)
    }
    getRecipe()
  }, [])
  const handleChange = (event) => {
    console.log(event.target.value)
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
        <label htmlFor="ingredients">ingredients</label>
        <br />
        {editRecipe?.ingredient?.map((item, index) => (
          <div key={index}>
            <h4>Add Ingredients</h4>
            <input
              type="text"
              placeholder="Enter an ingredient"
              name="name"
              defaultValue={item.name}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              placeholder="amount"
              name="amount"
              defaultValue={item.amount}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              placeholder="units"
              name="unit"
              defaultValuee={item.unit}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <button type="button" onClick={() => handleDelete(index)}>
              Delete an ingredient
            </button>
          </div>
        ))}
        <button>Add more ingredients</button>
        <br />
      </form>
    </div>
  )
}
export default EditRecipe
