import { useState } from "react"
import Client from "../services/api"

const AddReview = ({ id, ali }) => {
  const initialState = {
    rating: "",
    content: "",
    user: "",
    userAvatar: "",
    userName: ""
  }

  const [review, setReview] = useState(initialState)

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
        <input
          type="number"
          placeholder="rate"
          max={5}
          min={1}
          id="rating"
          onChange={handleChange}
          value={review.rating}
        />
        <label className="" htmlFor="content">
          Rating
        </label>
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
