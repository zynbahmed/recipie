const Search = ({ onSubmit, mealRef }) => {
  return (
    <form className="" onSubmit={onSubmit}>
      <input
        className="searchTerm"
        type="text"
        ref={mealRef}
        placeholder="SEARCH ACTIVITIES"
      />
      <button className="" type="submit">
        SEARCH
      </button>
    </form>
  )
}

export default Search
