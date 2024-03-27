import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [editProfile, setEditProfile] = useState(null)
  const [addProfileFromValues, setAddProfileFromValues] = useState({
    name: '',
    avatar: '',
    email: ''
  })
  useEffect(() => {
    const getUser = async () => {
      const res = await Client.get(`user/${id}`)
      console.log(res.data)
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

  const handleSubmit = async () => {
    await Client.put('/update', addProfileFromValues)
    // navigate('/profile')
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        defaultValue={editProfile?.name}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        defaultValue={editProfile?.email}
      />
      <label htmlFor="avatar">Avatar</label>
      <input
        type="text"
        name="avatar"
        onChange={handleChange}
        defaultValue={editProfile?.avatar}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EditProfile
