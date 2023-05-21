import { TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import NavSignIn from '../components/navSignin'

export default function Register() {
  const [email, setEmail] = useState<string>('')
  const [emailChecker, setEmailChecker] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordChecker, setPasswordChecker] = useState<string>('')
  const [passwordRetype, setPasswordRetype] = useState<string>('')
  const [passwordRetypeChecker, setPasswordRetypeChecker] =
    useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [terms, setTerms] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  //password validation (at least 5 characters check only)
  const checkPassword = (password: string) => {
    const passwordRegex = /^.{5,}$/
    return passwordRegex.test(password)
  }

  //email validation
  const checkEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
  }

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    let hasNumber = false,
      hasUpper = false,
      hasLower = false

    if (!checkEmail(email)) {
      console.log('Invalid email')
      setEmailChecker('Invalid email')
      return null
    }
    setEmailChecker('')

    //checking password
    if (!checkPassword(password)) {
      setPasswordChecker('Password must be at least 5 characters')
      return null
    }
    setPasswordChecker('')
    if (/\d/.test(password)) {
      hasNumber = true
    } else {
      return setPasswordChecker('Must contain at least 1 number')
    }
    if (/[A-Z]/.test(password)) {
      hasUpper = true
    } else {
      return setPasswordChecker('Must contain at least 1 uppercase letter')
    }
    if (/[a-z]/.test(password)) {
      hasLower = true
    } else {
      return setPasswordChecker('Must contain at least 1 lowercase letter')
    }
    //end of checking password

    if (hasNumber && hasUpper && hasLower) {
      try {
        await axios.post('/login', {
          email,
          password,
        })
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      } finally {
        setPassword('')
        setEmail('')
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <NavSignIn />
      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)] mt-[64px] items-center">
        <div className="hidden lg:block w-80 md:w-1/2 xl:w-2/3 h-[calc(100vh-64px)]">
          <img
            src="/images/login-banner.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-[calc(100vh-64px)] px-6 lg:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="flex items-center">
              <div className="text-2xl font-bold">logo-here</div>
            </div>

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 gold__text">
              Create an account
            </h1>

            <form className="mt-6" onSubmit={(e) => registerHandler(e)}>
              <div className="flex justify-center items-center">
                <TextField
                  error={emailChecker !== '' ? true : false}
                  id="outlined-firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="First Name"
                  helperText={emailChecker}
                  fullWidth
                />
                <TextField
                  error={emailChecker !== '' ? true : false}
                  id="outlined-lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  label="Last Name"
                  helperText={emailChecker}
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
                  error={passwordRetypeChecker}
                  id="outlined-retype-password-input"
                  type="password"
                  value={passwordRetype}
                  onChange={(e) => setPasswordRetype(e.target.value)}
                  label="Retype Password"
                  helperText={passwordChecker}
                  fullWidth
                />
              </div>

              <button
                type="submit"
                className="w-full uppercase block gold text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-center">
              Already have an account?{' '}
              <Link to="/login" className="gold__text font-semibold">
                Sign In
              </Link>
            </p>

            <p className="text-sm text-gray-500 mt-12 text-center">
              &copy; 2023 CentroAesthetica - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
