import { Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import NavSignIn from '../components/navSignin'
import CopyRight from '../components/footer/copyright'
import KeyIcon from '@mui/icons-material/Key'
import useZustand from '../utils/zustand'
import LoginChecker from '../components/loginChecker'
import loginBanner from '/images/login-banner.jpg'
import ggsvg from '/svg/google.svg'

export default function Login({ display }: { display: string }) {
  const { setSnackbar, isLoggingIn } = useZustand((state) => ({
    setSnackbar: state.setSnackbar,
    isLoggingIn: state.isLoggingIn,
  }))
  const [email, setEmail] = useState<string>('')
  const [emailChecker, setEmailChecker] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordChecker, setPasswordChecker] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const checkEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
  }

  const loginHandler = async () => {
    // setIsLoading(true)
    // if (!checkEmail(email)) {
    //   setEmailChecker('Please enter a valid email address')
    //   return setIsLoading(false)
    // }
    // setEmailChecker('')
    // if (!password) {
    //   setPasswordChecker('Please enter a password')
    //   return setIsLoading(false)
    // }
    // setPasswordChecker('')
    // if (password.length < 5) {
    //   setPasswordChecker('Password must be at least 5 characters long')
    //   return setIsLoading(false)
    // }
    // setPasswordChecker('')
    // const url: string = import.meta.env.VITE_LOGIN_API
    // let data = JSON.stringify({
    //   email,
    //   password,
    // })
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://127.0.0.1:8080/api/login',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
    // }
    // try {
    //   await axios.request(config).then((response) => {
    //     if (response.data?.token) isLoggingIn(response.data)
    //     const message = response.data?.message || 'Login successful'
    //     setSnackbar(true, message)
    //   })
    // } catch (error: any) {
    //   const message = 'Error connecting to server.'
    //   setSnackbar(true, error.message || message)
    //   console.log(error)
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <>
      <LoginChecker />
      {display === 'full-login' && <NavSignIn />}

      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)] mt-[64px]">
        {display === 'full-login' && (
          <div className="hidden lg:block w-80 md:w-5/6 h-[calc(100vh-64px)]">
            <img
              src={loginBanner}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className={`bg-white w-full ${
            display === 'full-login' ? 'md:max-w-sm mx-auto' : ''
          } h-[calc(100vh-64px)] px-6 lg:px-8 flex items-center justify-center`}
        >
          <div className="w-full h-100">
            <Link
              to="/"
              className="flex items-center text-xl font-bold font-serif tracking-tight bg-[#ceb700] dark:bg-logo whitespace-nowrap"
              style={{
                color: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              CENTRO AESTHETICA
            </Link>

            <h1 className="text-xl md:text-base font-bold leading-tight mt-2">
              Log in to your account
            </h1>

            <form className="mt-6">
              <div>
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
                  helperText={passwordChecker}
                  fullWidth
                  onKeyDown={(e) => e.key === 'Enter' && loginHandler()}
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

              <LoadingButton
                onClick={loginHandler}
                loading={isLoading}
                loadingPosition="end"
                endIcon={<KeyIcon />}
                variant="contained"
                className="gold"
                fullWidth
              >
                <span>Log In</span>
              </LoadingButton>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <img src={ggsvg} alt="" className="w-6 h-6" />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8 text-center">
              Need an account?{' '}
              <Link
                to="/register"
                className="gold__text font-medium text-lg hover:font-bold"
              >
                Register
              </Link>
            </p>

            <CopyRight />
          </div>
        </div>
      </section>
    </>
  )
}
