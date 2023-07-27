import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import NavSignIn from '../components/navSignin'
import LoginChecker from '../components/loginChecker'
import useZustand from '../utils/zustand'
import CopyRight from '../components/footer/copyright'
import { LoadingButton } from '@mui/lab'

export default function Register() {
  const { setSnackbar, isLoggingIn } = useZustand((state) => ({
    setSnackbar: state.setSnackbar,
    isLoggingIn: state.isLoggingIn,
  }))
  const [email, setEmail] = useState<string>('')
  const [emailChecker, setEmailChecker] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordChecker, setPasswordChecker] = useState<string>('')
  const [passwordRetype, setPasswordRetype] = useState<string>('')
  const [passwordRetypeChecker, setPasswordRetypeChecker] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [terms, setTerms] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const checkPassword = (password: string) => {
    const passwordRegex = /^.{5,}$/
    return passwordRegex.test(password)
  }

  const checkEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
  }

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    let hasNumber = false,
      hasLower = false,
      passwordSame = false

    if (!firstName) {
      setIsLoading(false)
      return setSnackbar(true, 'Please enter your first name')
    }

    if (!lastName) {
      setIsLoading(false)
      return setSnackbar(true, 'Please enter your last name')
    }

    if (!checkEmail(email)) {
      setIsLoading(false)
      return setEmailChecker('Invalid email')
    }
    setEmailChecker('')

    if (!checkPassword(password)) {
      setIsLoading(false)
      return setPasswordChecker('Password must be at least 5 characters')
    }
    setPasswordChecker('')
    if (/\d/.test(password)) {
      hasNumber = true
    } else {
      setIsLoading(false)
      return setPasswordChecker('Must contain at least 1 number')
    }
    if (/[a-z]/.test(password)) {
      hasLower = true
    } else {
      setIsLoading(false)
      return setPasswordChecker('Must contain at least 1 lowercase letter')
    }

    setPasswordChecker('')

    if (password && passwordRetype) {
      if (password === passwordRetype) {
        passwordSame = true
      } else {
        setIsLoading(false)
        return setPasswordRetypeChecker("Passwords don't match")
      }
    } else {
      setIsLoading(false)
      return setPasswordRetypeChecker("Password fields can't be empty")
    }
    setPasswordRetypeChecker('')
    //end of checking password

    let data = JSON.stringify({
      name: firstName + ' ' + lastName,
      email: email,
      password: password,
    })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    if (hasNumber && hasLower && passwordSame) {
      try {
        await axios.request(config).then((response) => {
          if (response.data?.token) isLoggingIn(response.data)
          const message = response.data?.message || 'Login successful'

          setSnackbar(true, message)
        })
      } catch (error: any) {
        const message = 'Error connecting to server.'
        setSnackbar(true, error.message || message)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <LoginChecker />
      <NavSignIn />
      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)] mt-[64px]">
        <div className="hidden lg:block w-80 md:w-5/6 h-[calc(100vh-64px)]">
          <img
            src="/images/login-banner.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-sm md:mx-auto h-[calc(100vh-64px)] px-6 flex items-center justify-center">
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
              Create an account
            </h1>

            <form className="mt-6" onSubmit={(e) => registerHandler(e)}>
              <div className="flex justify-center items-center">
                <TextField
                  id="outlined-firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="First Name"
                  fullWidth
                />
                <TextField
                  id="outlined-lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  fullWidth
                />
              </div>

              <div className="mt-3">
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

              <div className="mt-3">
                <TextField
                  error={passwordChecker !== '' ? true : false}
                  id="outlined-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  helperText={passwordChecker}
                  fullWidth
                />
              </div>

              <div className="mt-3">
                <TextField
                  error={passwordRetypeChecker !== '' ? true : false}
                  id="outlined-retype-password-input"
                  type="password"
                  value={passwordRetype}
                  onChange={(e) => setPasswordRetype(e.target.value)}
                  label="Retype Password"
                  helperText={passwordRetypeChecker}
                  fullWidth
                />
              </div>

              <Box sx={{ marginTop: 2 }}>
                <LoadingButton
                  type="submit"
                  loading={isLoading}
                  variant="contained"
                  className="w-full uppercase block gold text-white"
                >
                  <span>Sign Up</span>
                </LoadingButton>
              </Box>
            </form>

            <p className="mt-8 text-center">
              Already have an account?{' '}
              <Link
                to="/login"
                className="gold__text font-medium text-lg hover:font-bold"
              >
                Sign In
              </Link>
            </p>

            <CopyRight />
          </div>
        </div>
      </section>
    </>
  )
}
