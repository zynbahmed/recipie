const ShoppingList = ({ list }) => {
  return (
    <div>
      <h1>Shopping List</h1>
      {list.map((item) => (
        <p>{item}</p>
      ))}

      <h2>Groceries</h2>
    </div>
  )
}

export default ShoppingList
