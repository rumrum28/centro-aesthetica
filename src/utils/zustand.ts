import Cookies from 'js-cookie'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Services, Tags } from '../types/services'

type UserState = {
  name: string
  email: string
}
type Session = {
  token: string
  user: UserState
}
type LoginUserState = {
  name: string
  email: string
}

type Zustand = {
  logout: () => void
  user: LoginUserState | null
  bookings: Services | []
  isLoggingIn: (session: Session) => void
  addBooking: (id: Services) => void
  snackbar: {
    status: boolean
    message: string
  }
  setSnackbar: (snackbar: boolean, snackbarMessage: string) => void
  snackbarMessage: string
  setSnackbarMessage: (snackbarMessage: string) => void
}

const pucspispfjsf = (set: any) =>
  ({
    user: null,
    bookings: [],
    isLoggingIn: (session: Session) => {
      if (session.token) {
        Cookies.set('user_session', session.token)
      }
      set(() => ({
        user: {
          name: session.user.name,
          email: session.user.email,
        },
      }))
    },
    addBooking: (data: Services) => {
      set(() => ({
        bookings: data,
      }))
    },
    snackbar: {
      status: false,
      message: '',
    },
    setSnackbar: (snackbar: boolean, snackbarMessage: string) => {
      set(() => ({
        snackbar: {
          status: snackbar,
          message: snackbarMessage,
        },
      }))
    },
    logout: () => {
      Cookies.remove('user_session')
      set(() => ({
        user: null,
      }))
    },
  } as Zustand)

const useZustand = create(
  persist(pucspispfjsf, {
    name: 'ca',
  })
)

export default useZustand
