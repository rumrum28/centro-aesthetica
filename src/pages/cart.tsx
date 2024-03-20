import Layout from '../components/layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button, Divider, InputBase, Paper, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import useZustand from '../utils/zustand'
import { Link } from 'react-router-dom'
import { CircleX } from 'lucide-react'

const Cart = () => {
  const { addBooking, bookings } = useZustand((state) => ({
    addBooking: state.addBooking,
    bookings: state.bookings,
  }))
  const [total, setTotal] = useState(0)

  useEffect(() => {
    //  calculate total
    if (bookings) {
      const total = (bookings as any).reduce((acc: any, item: any) => {
        return acc + item.price
      }, 0)
      setTotal(total)
    }
  }, [bookings])

  const cancelBooking = (id: number) => {
    const removeFromCart = bookings.filter((e: any) => {
      return e.id !== id
    })

    addBooking(removeFromCart)
  }

  const removeAllBooking = () => {
    addBooking([])
  }

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row shadow-md">
          <div className="w-full md:w-3/5 bg-white dark:bg-slate-800 px-4 lg:px-8 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-xl dark:text-white">
                Book an appointment
              </h1>
              <button
                className="font-semibold text-md text-red-600"
                onClick={removeAllBooking}
              >
                Remove all
              </button>
            </div>

            <div className="flex flex-col items-center hover:bg-gray-100 px-5 py-5 gap-5">
              {bookings.map((item) => (
                <div key={item.id} className="relative flex w-full">
                  <div className="flex justify-center items-start w-20 h-auto">
                    <img
                      className="h-auto w-full"
                      src={item.image[0]}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col ml-4 w-full">
                    <span className="font-bold text-sm mb-2 dark:text-white">
                      {item.title}
                    </span>
                    <span className="font-semibold text-sm gold__text mb-2 flex-1">
                      ₱{item.price}
                    </span>
                    <span className="text-sm mb-2 dark:text-white">
                      {item.description}
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-semibold text-md">
                    <CircleX
                      size={20}
                      className="cursor-pointer text-red-500"
                      onClick={() => cancelBooking(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/centro-aesthetica/book-services"
              className="flex items-center justify-start h-6"
            >
              <ArrowBackIcon className="dark:text-white" />
              <span className="flex font-semibold text-sm pl-2 dark:text-white">
                Add booking
              </span>
            </Link>
          </div>

          <div className="bg-slate-200 w-full md:w-2/5 px-4 lg:px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              User Details
            </h1>

            <TextField
              id="outlined-basic"
              label="Full Name (required)"
              variant="outlined"
              fullWidth
            />

            <div className="relative py-10 w-full">
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Promo code"
                  inputProps={{ 'aria-label': 'Enter promo code' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button color="error">Apply</Button>
              </Paper>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  ₱{total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </span>
              </div>
              <Button
                className="gold font-semibold py-3 text-sm uppercase w-full"
                color="inherit"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
