const Reviews = ({ reviews }) => {
  function calculateAverageRating(reviews) {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
    const averageRating = totalRating / reviews.length
    return Array(5).fill(averageRating >= 1) // Assuming rating is out of 5
  }

  return reviews && reviews.length > 0 ? (
    <div>
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 class="mb-6 text-3xl font-bold">Reviews</h3>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div class="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
          {reviews.map((review) => (
            <div className="" key={review._id}>
              <div class="mb-6 flex justify-center">
                <img
                  className=""
                  src={review.userAvatar}
                  class="w-32 rounded-full shadow-lg "
                />
              </div>
              <h5 class="mb-4 text-xl font-semibold">{review.userName}</h5>
              
              <div class="flex space-x-2 mt-4 items-center justify-center">
                {Array(Math.floor(review.rating))
                  .fill(true)
                  .concat(Array(5 - Math.floor(review.rating)).fill(false))
                  .map((isFilled, index) => (
                    <svg
                      key={index}
                      class={`w-5 fill-${
                        isFilled ? "red-800" : "grey-50"
                      }`}
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
              </div>
              <p class="my-4">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    // </div>
    <div>
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl items-center">
        <h3 class="mb-6 text-3xl font-bold">Reviews:</h3>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div class="gap-6 text-center">
          <h5 class="mb-4 text-xl font-semibold">No Reviews Available</h5>

          {/* <h3 className=""> {review.rating}</h3> */}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  )
}
export default Reviews
