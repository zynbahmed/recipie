const SaveRecipeButton = ({ saved, unsaveRecipe, saveRecipe, user }) => {
  return user ? (
    <div className="flex flex-wrap gap-4 mt-4">
      {saved ? (
        // <button
        //   onClick={unsaveRecipe}
        //   className="text-gray-500 font-extrabold uppercase hover:text-gray-900"
        // >
        //   Remove From Favourites
        // </button>
        <button className="btn bg-orange-500 text-white" onClick={unsaveRecipe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Remove
        </button>
      ) : (
        // <button
        //   onClick={saveRecipe}
        //   className="text-orange-500 font-extrabold uppercase hover:text-orange-900"
        // >
        //   Save to Favourites
        // </button>
        <button className="btn hover:bg-orange-200" onClick={saveRecipe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Save
        </button>
      )}
    </div>
  ) : null
}

export default SaveRecipeButton
