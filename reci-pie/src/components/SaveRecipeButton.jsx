const SaveRecipeButton = ({ saved, unsaveRecipe, saveRecipe }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {saved ? (
        <button
          onClick={unsaveRecipe}
          className="text-green-500 font-extrabold uppercase hover:text-green-900"
        >
          UnSave recipe
        </button>
      ) : (
        <button
          onClick={saveRecipe}
          className="text-green-500 font-extrabold uppercase hover:text-green-900"
        >
          Save
        </button>
      )}
    </div>
  )
}

export default SaveRecipeButton
