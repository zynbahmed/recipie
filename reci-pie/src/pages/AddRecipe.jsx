import { useState } from 'react'
const AddRecipe = () => {
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: '',
    description: '',
    cookingTime: '',
    steps: '',
    photo: '',
    ingredients: [{ name: '', amount: '', unit: '' }]
  })
  const handleChange = (event) => {
    event.preventDefault()
    setAddRecipeFormValues({
      ...addRecipeformValues,
      [event.target.name]: event.target.value
    })
  }
  const handleAdd = () => {
    setAddRecipeFormValues((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        { name: '', amount: '', unit: '' }
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(addRecipeformValues)
  }

  return (
    <div className="form-container sign-in-container">
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={addRecipeformValues.title}
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
          value={addRecipeformValues.description}
        ></textarea>
        <br />
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          id=""
          onChange={handleChange}
          value={addRecipeformValues.cookingTime}
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
          value={addRecipeformValues.steps}
        ></textarea>
        <br />
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          placeholder="Picture"
          id=""
          onChange={handleChange}
          value={addRecipeformValues.photo}
        />
        <label htmlFor="ingredients">ingredients</label>
        <br />
        {addRecipeformValues.ingredients.map((ingredient, index) => (
          <div key={index}>
            <h4>Add Ingredients</h4>
            <input
              type="text"
              placeholder="Enter an ingredient"
              name="name"
              value={ingredient.key}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              placeholder="amount"
              name="amount"
              value={ingredient.key}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              placeholder="units"
              name="unit"
              value={ingredient.key}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <button onClick={handleSubmit}>Add Recipe</button>
          </div>
        ))}
        <button onClick={handleAdd}>Add more ingredients</button>
      </form>
    </div>
  )
}

export default AddRecipe
