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
        console.log(response.data)
        ali(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    setReview(initialState)
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
      <div className="rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <label key={starValue}>
          <input
            type="radio"
            name="rating" // Use a single name for the group
            value={starValue}
            checked={rating >= starValue}
            onChange={() => handleClick(starValue)}
            className={`mask mask-star-2 ${
              rating >= starValue ? "bg-red-500" : ""
            }`}
          />
          <span className="star" />
        </label>
      ))}
    </div>
        <textarea
          className=""
          placeholder="add a review"
          id="content"
          type="text"
          onChange={handleChange}
          value={review.content}
          rows={8}
          cols={100}
        />
        <label className="" htmlFor="content">
          Content
        </label>
        <button className="" type="submit">
          Add Review
        </button>
      </form>
    </div>
  )
}

export default AddReview
