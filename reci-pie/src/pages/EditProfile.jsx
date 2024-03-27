import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [editProfile, setEditProfile] = useState(null)
  const [addProfileFromValues, setAddProfileFromValues] = useState({
    name: "",
    avatar: "",
    email: ""
  })

  useEffect(() => {
    const getUser = async () => {
      const res = await Client.get(`user/${id}`)
      setEditProfile(res.data)
      setAddProfileFromValues({
        name: res.data.name,
        avatar: res.data.avatar,
        email: res.data.email
      })
    }
    getUser()
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setAddProfileFromValues({
      ...addProfileFromValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.put("/update", addProfileFromValues)
      setShowSuccessMessage(true)
      navigate("/profile")
    } catch (error) {
      console.error("Error submitting recipe:", error)
    }
  }

  const close = () => {
    setShowSuccessMessage(false)
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center bg-[url('/pies.jpg')]"></div>
      {showSuccessMessage && (
        <div className="fixed bg-green-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg z-50">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            />
          </svg>
          <span className="text-green-800">Your profile has been updated.</span>
          <button
            onClick={close}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg focus:ring-2  p-1.5 inline-flex items-center justify-center h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="relative mx-auto w-full h-96 max-w-max px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 bg-base-100">
        <div className="w-full">
          <form className="h-96">
            <h1 className="text-2xl font-bold uppercase">
              Edit {editProfile?.name} Details
            </h1>
            <br />
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder=""
                onChange={handleChange}
                defaultValue={editProfile?.name}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="name"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>
            <br />
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=""
                onChange={handleChange}
                defaultValue={editProfile?.email}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="email"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <br />
            <div className="relative">
              <input
                type="text"
                name="avatar"
                placeholder=""
                onChange={handleChange}
                defaultValue={editProfile?.avatar}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:bored-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              />
              <label
                htmlFor="avatar"
                className="absolute bg-base-100 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Avatar
              </label>
            </div>
            <br />
            <button onClick={handleSubmit} className="reg-btn">
              Submit
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
