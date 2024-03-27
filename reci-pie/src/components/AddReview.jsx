import { useState } from "react"
import Client from "../services/api"

const AddReview = ({ id, ali }) => {
  const initialState = {
    rating: 0,
    content: "",
    user: "",
    userAvatar: "",
    userName: ""
  }

  const [review, setReview] = useState(initialState)

  const [rating, setRating] = useState(0) // Initial rating state

  const handleClick = (value) => {
    setRating(value)
    setReview({ ...review, rating: value }) // Update review state
  }

  const handleChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Client.post(`/recipe/${id}/review`, review)
      .then((response) => {
        ali(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    setReview(initialState)
    setRating(0)
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold uppercase my-2"> Add a Review</h1>
        <div className="rating my-2">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <label key={starValue}>
              <input
                type="radio"
                name="rating" // Use a single name for the group
                value={starValue}
                checked={rating >= starValue}
                onChange={() => handleClick(starValue)}
                className={`mask mask-star-2 ${
                  rating >= starValue ? "bg-red-800" : ""
                }`}
              />
              <span className="star" />
            </label>
          ))}
        </div>
        <div className="relative my-2">
          <textarea
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border border-gray-300 appearance-none dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=""
            id="content"
            type="text"
            onChange={handleChange}
            value={review.content}
            rows={8}
            cols={100}
          />
          <label
            className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            htmlFor="content"
          >
            Content
          </label>
        </div>
        <button className="reg-btn m-2">Add Review</button>
      </form>
    </div>
  )
}

export default AddReview
