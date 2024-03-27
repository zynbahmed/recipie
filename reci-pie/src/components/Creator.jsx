import { useNavigate } from "react-router-dom"

const Creator = ({ creator }) => {
  let navigate = useNavigate()
  const viewProfile = (id) => {
    navigate(`/creatorprofile/${id}`, { state: { creator } })
  }
  return creator ? (
    <div>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl items-center ">
        <h3 className="mb-6 text-3xl font-bold">Created By:</h3>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div className="gap-6 text-center">
          <button onClick={() => viewProfile(creator._id)}>
            <div className="mb-6 flex justify-center">
              <img
                src={creator?.avatar}
                className="w-32 rounded-full shadow-lg "
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">{creator?.name}</h5>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl items-center ">
        <h3 className="mb-6 text-3xl font-bold">Created By:</h3>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8">
        <div className="gap-6 text-center">
          <h5 className="mb-4 text-xl font-semibold">Creator is not found!</h5>
        </div>
      </div>
    </div>
  )
}

export default Creator
