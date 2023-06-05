import { Button } from '@mui/material'
import Layout from '../components/layout'
import { useParams } from 'react-router-dom'

export default function Error404() {
  const { params } = useParams()
  console.log(params)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-114px)]">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-4xl font-bold">"{params}'s" Page not found</h2>

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
