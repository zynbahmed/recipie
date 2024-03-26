import Client from '../services/api'
const ShoppingList = ({ list, user, setList }) => {
  const add = async () => {
    const flattenedList = list.flat()
    const request = { flattenedList, user }
    await Client.post('/list', request)
    setList([])
  }
  return (
    <div>
      <h1>Shopping List</h1>
      {list.map((item) => (
        <p>{item}</p>
      ))}
      <button onClick={add}>Add to Shopping List</button>
      <h2>Groceries</h2>
    </div>
  )
}

export default ShoppingList
