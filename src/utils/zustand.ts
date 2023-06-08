import Cookies from 'js-cookie'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
  user: LoginUserState | null
  isLoggingIn: (session: Session) => void
  snackbar: boolean
  setSnackbar: (snackbar: boolean) => void
  snackbarMessage: string
  setSnackbarMessage: (snackbarMessage: string) => void
}

const pucspispfjsf = (set: any) =>
  ({
    user: null,
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
    snackbar: false,
    setSnackbar: (snackbar: boolean) => {
      set(() => ({
        snackbar,
      }))
    },
    snackbarMessage: '',
    setSnackbarMessage: (snackbarMessage: string) => {
      set(() => ({
        snackbarMessage,
      }))
    },
  } as Zustand)

const useZustand = create(
  persist(pucspispfjsf, {
    name: 'ca-frontend',
  })
)

export default useZustand
