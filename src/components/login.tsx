import { TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

export default function Login({ display }: { display: string }) {
  const [email, setEmail] = useState<string>('')
  const [emailChecker, setEmailChecker] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordChecker, setPasswordChecker] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  //email validation
  const checkEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
  }

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (!checkEmail(email)) {
      setEmailChecker('Please enter a valid email address')
      return null
    }
    setEmailChecker('')

    if (!password) {
      setPasswordChecker('Please enter a password')
      return null
    }
    setPasswordChecker('')

    try {
      await axios.post('/login', {
        email,
        password,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)]  items-center">
        {display === 'full-login' && (
          <div className="hidden lg:block w-80 md:w-1/2 xl:w-3/4 h-[calc(100vh-64px)]">
            <img
              src="/images/login-banner.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className={`bg-white w-full ${
            display === 'full-login'
              ? 'md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/4'
              : ''
          } h-[calc(100vh-64px)] px-6 lg:px-8 flex items-center justify-center`}
        >
          <div className="w-full h-100">
            <div className="flex items-center">
              <div className="text-2xl font-bold">logo-here</div>
            </div>

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 gold__text">
              Log in to your account
            </h1>

            <form className="mt-6" onSubmit={(e) => loginHandler(e)}>
              <div style={{ minHeight: '79px' }}>
                <TextField
                  error={emailChecker !== '' ? true : false}
                  id="outlined-error-helper-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Enter email address"
                  helperText={emailChecker}
                  fullWidth
                />
              </div>

              <div className="mt-3" style={{ minHeight: '79px' }}>
                <TextField
                  error={passwordChecker !== '' ? true : false}
                  id="outlined-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  autoComplete="current-password"
                  fullWidth
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block gold text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns="https://vecta.io/nano"
                  width="18"
                  height="18"
                  viewBox="0 0 186.69 190.5"
                >
                  <g transform="translate(1184.583 765.171)">
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                      fill="#4285f4"
                    />
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                      fill="#34a853"
                    />
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                      fill="#fbbc05"
                    />
                    <path
                      d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                      fill="#ea4335"
                      clipPath="none"
                      mask="none"
                    />
                  </g>
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8 text-center">
              Need an account?{' '}
              <Link to="/register" className="gold__text font-semibold">
                Create an account
              </Link>
            </p>

            <p className="text-sm text-gray-500 mt-12 text-center">
              &copy; 2023 CentroAesthetica - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
