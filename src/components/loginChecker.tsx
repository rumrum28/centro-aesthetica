import { useNavigate } from 'react-router-dom'
import useZustand from '../utils/zustand'
import { useEffect } from 'react'

export default function LoginChecker() {
  const { user } = useZustand((state) => ({
    user: state.user,
  }))
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return null
}
