const Recipe = ({ rec }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {rec.map((recipe) => (
          <div className="overflow-hidden shadow-lg flex flex-col w-full">
            <div key={recipe._id} className="relative">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <div className="px-6 py-4 mb-auto">
                <h1 className="text-3xl">{recipe.strMeal}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipe
