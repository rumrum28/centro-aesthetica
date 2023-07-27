import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import useZustand from '../../utils/zustand'

export default function HeaderButtons() {
  const { user } = useZustand((state) => ({
    user: state.user,
  }))

  return (
    <div className="bg-slate-100 dark:bg-slate-700">
      {user && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
          <button className="w-full px-3 py-2 text-sm text-slate-600 hover:text-slate-50 hover:bg-primary hover:font-semibold dark:text-slate-50">
            Services
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button className="w-full px-3 py-2 text-sm text-slate-600 hover:text-slate-50 hover:bg-primary hover:font-semibold dark:text-slate-50">
            Bookings
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button className="w-full px-3 py-2 text-sm text-slate-600 hover:text-slate-50 hover:bg-primary hover:font-semibold dark:text-slate-50">
            Feedbacks
          </button>
        </Box>
      )}
    </div>
  )
}
