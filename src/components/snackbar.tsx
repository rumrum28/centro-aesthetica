import { IconButton, Snackbar } from '@mui/material'
import useZustand from '../utils/zustand'
import CloseIcon from '@mui/icons-material/Close'

export default function SnackBar() {
  const { snackbar, setSnackbar, snackbarMessage, setSnackbarMessage } =
    useZustand((state) => ({
      snackbar: state.snackbar,
      setSnackbar: state.setSnackbar,
      snackbarMessage: state.snackbarMessage,
      setSnackbarMessage: state.setSnackbarMessage,
    }))

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setSnackbar(false)
    setSnackbarMessage('')
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={snackbar}
      autoHideDuration={6000}
      onClose={handleClose}
      message={snackbarMessage}
      action={action}
    />
  )
}
