const SearchDB = ({ onSubmit, dishRef }) => {
  return (
    <form className="max-w-5xl mx-auto" onSubmit={onSubmit}>
      <label for="default-search" class="mb-2 text-sm font-medium  sr-only ">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          ref={dishRef}
          className="block w-full p-4 ps-10 text-sm  border border-red-100 focus:ring-red-500 focus:border-red-500"
          placeholder="Search Recipes, Ingredients..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchDB
