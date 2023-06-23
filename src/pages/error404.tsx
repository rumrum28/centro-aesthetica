import { Button } from '@mui/material'
import Layout from '../components/layout'
import { useLocation, useParams } from 'react-router-dom'

export default function Error404() {
  let location = useLocation()

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h3 className="text-4xl font-bold">Page not found</h3>
        <h2 className="mt-2">Could not find `{location.pathname}`</h2>

        {/* tailwind button back to home "/" */}
        <Button
          size="large"
          variant="contained"
          className="gold hover:opacity-90 dark:hover:bg-gold-700 dark:text-white"
          sx={{ marginTop: 2 }}
          onClick={() => window.location.replace('/')}
        >
          Back to Home
        </Button>
      </div>
    </Layout>
  )
}
