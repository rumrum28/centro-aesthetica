import { IconButton, Button, Badge } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState, useRef, Suspense } from 'react'
import { ServicesOffered } from '../../utils/productsOffered'
import HomeIcon from '@mui/icons-material/Home'
import Nav from '../nav'
import Footer from '../footer'
import dayjs, { Dayjs } from 'dayjs'
import useZustand from '../../utils/zustand'
import { Clock10, Phone, ShoppingBasket } from 'lucide-react'

export default function PerServices() {
  const { addBooking, bookings } = useZustand((state) => ({
    addBooking: state.addBooking,
    bookings: state.bookings,
  }))
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<any>()
  const divRef = useRef<any>(null)
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-01-01T00:00'))
  const [isCarted, setIsCarted] = useState<boolean>(false)
  const paramsId = searchParams.get('id')

  useEffect(() => {
    //check params for data input in screen
    const dataCheck = ServicesOffered.filter((item) => {
      return item.id === parseInt(paramsId!)
    })
    setData(dataCheck[0])

    //check if the product is in the cart
    const cartCheck = bookings.some((e: any) => {
      return e.id === dataCheck[0].id
    })

    if (cartCheck) {
      setIsCarted(true)
    }

    if (divRef.current) {
      divRef.current.scrollTop = 0
    }
  }, [ServicesOffered, paramsId, bookings])

  const bookingHandler = () => {
    data['dateSelected'] = value

    const check = bookings.filter((e: any) => {
      return e.id === data.id
    })

    addBooking([...bookings, data])

    if (check.length > 0) {
      addBooking(bookings)
      setIsCarted(true)
    }
  }

  const removeBookingHandler = () => {
    const removeFromCart = bookings.filter((e: any) => {
      return e.id !== data.id
    })

    addBooking(removeFromCart)
    setIsCarted(false)
  }

  return (
    <div ref={divRef} className="relative flex flex-col w-full min-h-screen">
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="fixed md:relative w-full md:max-w-6xl md:mx-auto top-0 left-0 right-0 flex items-center justify-between p-4 md:pt-32 md:px-5">
        <IconButton
          sx={{
            bgcolor: 'white',
          }}
          onClick={() => window.history.go(-1)}
        >
          <ArrowBackIosNewIcon
            sx={{
              color: '#444444',
              paddingRight: '3px',
            }}
          />
        </IconButton>
        <div className="flex-1 pl-3">
          <IconButton
            sx={{
              bgcolor: 'white',
            }}
            onClick={() => navigate('/')}
          >
            <HomeIcon
              sx={{
                color: '#444444',
              }}
            />
          </IconButton>
        </div>

        <IconButton
          sx={{
            bgcolor: 'white',
          }}
          onClick={() => navigate('/cart')}
        >
          <Badge
            color="error"
            overlap="rectangular"
            badgeContent={bookings && bookings.length}
          >
            <ShoppingCartIcon
              sx={{
                color: '#444444',
              }}
            />
          </Badge>
        </IconButton>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {searchParams && data ? (
          <div className="md:flex items-start justify-center py-16 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img className="w-full" alt="1st image" src={data.image[0]} />
              <img
                className="mt-6 w-full"
                alt="2nd image"
                src={data.image[1]}
              />
            </div>
            <div className="md:hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src={data.image[0]}
              />
              <div className="flex items-center justify-start mt-3 space-x-4 md:space-x-0">
                {data.image.map((img: string, index: number) => (
                  <img
                    key={index}
                    alt="loading"
                    className="w-1/5 h-auto"
                    src={img}
                  />
                ))}
              </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-300 pb-6">
                <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
                  {data.type}
                </p>
                <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                  {data.title}
                </h1>
              </div>
              <div className="py-4 border-b border-gray-300 flex items-center justify-start gap-2 mb-5">
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300 font-semibold">
                  Price
                </p>
                <div className="flex items-center justify-center">
                  <p className="text-lg leading-none text-gray-600 dark:text-gray-300">
                    ₱
                    {parseInt(data.price)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </p>
                </div>
              </div>
              {isCarted ? (
                <button
                  className="bg-red-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none w-full py-4 focus:outline-none"
                  onClick={removeBookingHandler}
                >
                  <ShoppingBasket size={20} className="mr-2" />
                  Remove from cart
                </button>
              ) : (
                <button
                  className="gold focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none w-full py-4 focus:outline-none"
                  onClick={bookingHandler}
                >
                  <ShoppingBasket size={20} className="mr-2" />
                  Add to cart
                </button>
              )}

              <div>
                <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                  {data.description}
                </p>
                <p className="flex items-center justify-start gap-2 text-base leading-4 my-7 text-gray-600 dark:text-gray-300">
                  Duration: <Clock10 /> {data.duration}mins
                </p>
                {data?.tags && (
                  <div className="flex flex-col items-start justify-center bg-slate-100 p-5 rounded-lg max-w-lg mx-auto shadow-lg md:max-w-full">
                    <h2 className="text-base font-semibold mb-4">Includes:</h2>
                    <ul className="list-disc list-inside space-y-1">
                      {data?.tags &&
                        data?.tags.map((service: string, index: number) => (
                          <li key={index} className="hover:text-primary">
                            {service}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-7">
                <p className="flex items-center justify-start  text-base leading-4 text-gray-800 dark:text-gray-300">
                  Concerns about this service?
                  <Link
                    to="/contact"
                    className="underline mx-2 flex items-center justify-start gap-2"
                  >
                    <Phone size={20} />
                    Contact us.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p>Something went wrong!</p>
          </div>
        )}
      </Suspense>

      <div className="hidden md:block">
        <div className="flex-1"></div>
        <Footer />
      </div>
    </div>
  )
}

{
  /* <div className="max-w-6xl w-full mx-auto md:flex md:justify-center md:items-start md:px-5 md:pb-5 md:flex-1">
          <div className="w-full h-auto md:max-w-sm">
            <img src="/images/body-2.jpg" alt="service" />
          </div>

          <div className="relative w-full">
            <div className="w-full flex justify-between items-center p-4 h-16 md:flex-col md:items-start md:pb-5 md:pt-0 md:px-5">
              <PageTitle
                title={data[0].title}
                additionalClass="flex-1 text-primary"
              />
              <div className="flex justify-center items-center">
                <AccessTimeIcon fontSize="small" />
                <p className="text-xs pl-1">{data[0].duration}mins</p>
              </div>
            </div>

            <div
              className={`w-full h-full ${
                data[0].description ? 'px-4 pb-2 md:pt-2 md:p-5' : ''
              } `}
            >
              {data[0].description}
            </div>

            {data[0]?.tags && (
              <div className="p-2 h-full md:px-5 md:py-2">
                <div className="flex flex-col items-start justify-center bg-slate-100 p-5 rounded-lg max-w-lg mx-auto shadow-lg md:max-w-full">
                  <h2 className="text-base font-semibold mb-4">Includes:</h2>
                  <ul className="list-disc list-inside space-y-1">
                    {data[0]?.tags &&
                      data[0]?.tags.map((service, index) => (
                        <li key={index} className="hover:text-primary">
                          {service}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="p-2 w-full pb-28 md:px-5 md:py-2">
              <div className="flex flex-col items-start justify-center bg-slate-100 p-5 rounded-lg max-w-lg shadow-lg mx-auto md:max-w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="relative flex flex-col justify-center items-start w-full mx-auto">
                    

                    <>
                      <DemoContainer
                        components={['DateCalendar']}
                        sx={{
                          width: '100%',
                        }}
                      >
                        <DateCalendar
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                          sx={{
                            width: '100%',
                          }}
                        />
                      </DemoContainer>
                    </>
                  </div>
                </LocalizationProvider>
              </div>
            </div>

            <div className="fixed md:relative md:m-5 md:w-auto bg-white md:bg-slate-100 md:shadow-lg md:rounded-lg bottom-0 left-0 right-0 w-full h-24 flex justify-center items-center border-t px-4">
              <p className="flex-1 font-bold">₱ {data[0].price}</p>
              <IconButton
                aria-label="add to favorites"
                className="dark:text-slate-50"
              >
                <FavoriteIcon />
              </IconButton>
              {isCarted ? (
                <Button
                  variant="contained"
                  className="bg-red-600 text-white"
                  onClick={removeBookingHandler}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="gold"
                  onClick={bookingHandler}
                >
                  Add to booking
                </Button>
              )}
            </div>
          </div>
        </div> */
}
