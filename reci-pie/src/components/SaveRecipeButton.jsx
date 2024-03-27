const SaveRecipeButton = ({ saved, unsaveRecipe, saveRecipe, user }) => {
  return user ? (
    <div className="flex flex-wrap gap-4 mt-4">
      {saved ? (
        <button
          onClick={unsaveRecipe}
          className="text-gray-500 font-extrabold uppercase hover:text-gray-900"
        >
          Remove From Favourites
        </button>
      ) : (
        <button
          onClick={saveRecipe}
          className="text-orange-500 font-extrabold uppercase hover:text-orange-900"
        >
          Save to Favourites
        </button>
      )}
    </div>
  ) : null
}

export default SaveRecipeButton
