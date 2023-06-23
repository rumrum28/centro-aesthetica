import { IconButton, Snackbar } from '@mui/material'
import useZustand from '../utils/zustand'
import CloseIcon from '@mui/icons-material/Close'

export default function SnackBar() {
  const { snackbar, setSnackbar } = useZustand((state) => ({
    snackbar: state.snackbar,
    setSnackbar: state.setSnackbar,
  }))

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setSnackbar(false, '')
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
      open={snackbar.status}
      autoHideDuration={6000}
      onClose={handleClose}
      message={snackbar.message}
      action={action}
    />
  )
}
