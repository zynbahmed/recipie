import Client from "../services/api"
import { useState, useEffect } from "react"

const ShoppingList = ({ list, user, setList }) => {
  const flattenedList = list.flat()

  const add = async () => {
    const request = { flattenedList, user }
    await Client.post("/list", request)
    setList([])
  }
  
  const clear = () => {
    setList([])
  }

  const [shList, setShList] = useState([])

  useEffect(() => {
    const details = async () => {
      let selected = await Client.get("/")
      setShList(selected.data.shoppingList)
    }
    details()
  }, [shList])

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border border-grey-200 p-10 mb-5 shadow-xl">
        <h1 className="text-xl font-bold mb-4">Shopping List</h1>
        <div>
          {flattenedList && (
            <>
              {flattenedList.length > 0 ? (
                <div>
                  <ul className="space-y-3 mt-4 pl-4 text-sm list-disc">
                    {flattenedList.map((item) => (
                      <li key={item} className="mr-4">
                        <p> {item} </p>
                      </li>
                    ))}
                  </ul>
                  <button className="reg-btn m-2" onClick={add}>
                    Add to Shopping List
                  </button>
                  <button className="reg-btn m-2" onClick={clear}>
                    Clear Shopping List
                  </button>
                </div>
              ) : (
                <p>Shopping List is Empty</p>
              )}
            </>
          )}
        </div>
      </div>
      <div className="border border-grey-200 p-10 mb-5 shadow-xl">
        <h1 className="text-xl font-bold mb-4">Shopping List</h1>
        <ul className="space-y-3 mt-4 pl-4 text-sm list-disc">
          {shList?.length > 0 ? (
            shList.map((item) => (
              <li key={item.name} className="mr-4">
                <p>{item.name}</p>
              </li>
            ))
          ) : (
            <p>Nothing in the shopping list yet</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList
