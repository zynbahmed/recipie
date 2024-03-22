import { useState } from 'react'
const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([
    {
      name: '',
      amount: '',
      unit: ''
    }
  ])
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
  // const handleAdd = (index, event) => {
  //   // event.preventDefault()
  //   // const values = [...inputs]
  //   // values[index].value = event.target.value
  //   setIngredients([...ingredients, { value: '' }])
  // }
  const handleIngredientChange = (index, event) => {
    const{name,value}=e.target
    setAddRecipeFormValues(prevState=>{const ingredients=[...prevState.ingredients] 
      ingredients[index][name]=value
      return {...prevState,ingredients}
    })
    // const values = [...ingredients]
    // values[index][field].value = event.target.value
    // setIngredients(values)
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
            <h4>Add an ingredient</h4>
            <input
              type="text"
              placeholder="Enter an ingredient"
              value={ingredient.key}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.key}
              onChange={(event) =>
                handleIngredientChange(index, event)
              }
            />
            <input
              type="text"
              placeholder="units"
              value={ingredient.key}
              onChange={(event) => handleIngredientChange(index, event)}
            />
          </div>
        ))}
        <button onClick={handleAdd}>Add more ingredients</button>
      </form>
    </div>
  )
}

export default AddRecipe
