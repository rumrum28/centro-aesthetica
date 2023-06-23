import Layout from '../components/layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from '@mui/material'

const Cart = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row shadow-md">
          <div className="w-full md:w-3/5 bg-white px-4 lg:px-8 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-xl">Book an appointment</h1>
              <h2 className="font-semibold text-md text-red-600">Cancel</h2>
            </div>
            <div className="flex items-center hover:bg-gray-100 px-5 py-5">
              <div className="flex w-full">
                <div className="flex justify-center items-start w-20 h-auto">
                  <img
                    className="h-auto w-full"
                    src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                    alt=""
                  />
                </div>
                <div className="flex flex-col ml-4 w-full">
                  <span className="font-bold text-sm mb-2">
                    cleansing test with sample image no relation to the work
                  </span>
                  {/* <span className="font-semibold text-sm gold__text mb-2 flex-1">
                    ₱400.00
                  </span> */}
                  <span className="text-sm mb-2">
                    Description: ₱400.00 for 3 sessions. Lorem ipsum dolor sit
                    amet consectetur
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start h-6">
              <ArrowBackIcon />
              <p className="flex font-semibold text-sm pl-2">Add booking</p>
            </div>
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
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
