import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const GoogleOk = ({ checkToken }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const myParam = searchParams.get('token')
  localStorage.setItem('token', myParam)
  useEffect(() => {
    const token = async () => {
      await checkToken()
      navigate('/')
    }

    token()
  }, [])
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default GoogleOk
