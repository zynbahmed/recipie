const Creator = ({ creator }) => {
  return creator ? (
    <div>
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl items-center">
        <h3 class="mb-6 text-3xl font-bold">Created By:</h3>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div class="gap-6 text-center">
          <div class="mb-6 flex justify-center">
            <img
              className=""
              src={creator?.avatar}
              class="w-32 rounded-full shadow-lg "
            />
          </div>
          <h5 class="mb-4 text-xl font-semibold">{creator?.name}</h5>

          {/* <h3 className=""> {review.rating}</h3> */}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl items-center">
        <h3 class="mb-6 text-3xl font-bold">Created By:</h3>
      </div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div class="gap-6 text-center">
          <h5 class="mb-4 text-xl font-semibold">Creator is not found!</h5>

          {/* <h3 className=""> {review.rating}</h3> */}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  )
}

export default Creator
