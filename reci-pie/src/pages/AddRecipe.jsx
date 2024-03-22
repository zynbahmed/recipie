import { useState } from 'react'
const AddRecipe = () => {
  const [inputs, setInputs] = useState([{ value: '' }])
  const [addRecipeformValues, setAddRecipeFormValues] = useState({
    title: '',
    description: '',
    cookingTime: '',
    steps: '',
    photo: '',
    ingredients: []
  })
  const handleChange = (event) => {
    event.preventDefault()
    setAddRecipeFormValues({
      ...addRecipeformValues,
      [event.target.name]: event.target.value
    })
  }
  const handleAdd = (index, event) => {
    event.preventDefault()
    // const values = [...inputs]
    // values[index].value = event.target.value
    setInputs([...inputs, { value: '' }])
  }
  const handleInputChange = (index, event) => {
    const values = [...inputs]
    values[index].value = event.target.value
    setInputs(values)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
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
        <textarea
          type="text"
          name="ingredients"
          placeholder="ingredients"
          id=""
          cols="100"
          rows="10"
          onChange={handleChange}
          // value={addRecipeformValues.ingredients}
        />
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter an ingredient"
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
        <button onClick={handleAdd}>submit</button>
      </form>
    </div>
  )
}

export default AddRecipe
