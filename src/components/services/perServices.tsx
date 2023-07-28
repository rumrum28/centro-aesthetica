import { IconButton, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PageTitle from '../pageTitle'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { ServicesOffered } from '../../utils/productsOffered'
import HomeIcon from '@mui/icons-material/Home'
import Nav from '../nav'
import Footer from '../footer'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import useZustand from '../../utils/zustand'
import { Tags } from '../../types/services'

export default function PerServices() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<Tags | null>(null)
  const divRef = useRef<any>(null)
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-01-01T00:00'))
  const { addBooking, bookings } = useZustand((state) => ({
    addBooking: state.addBooking,
    bookings: state.bookings,
  }))
  const [isCarted, setIsCarted] = useState<boolean>(false)

  useEffect(() => {
    const paramsId = searchParams.get('id')
    const dataCheck = ServicesOffered.filter((item) => {
      return item.id === parseInt(paramsId!)
    })

    setData(dataCheck[0])

    const cartCheck = (bookings as []).filter((e: any) => {
      return e.id === dataCheck[0].id
    })
    console.log(cartCheck)

    if (cartCheck.length > 0) {
      setIsCarted(true)
    }

    if (divRef.current) {
      divRef.current.scrollTop = 0
    }
  }, [ServicesOffered, searchParams, bookings])

  const bookingHandler = () => {
    if (data) {
      data['dateSelected'] = value

      const check = (bookings as []).filter((e: any) => {
        return e.id === data.id
      })

      if (check.length < 1) return addBooking(data)
    }
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
        >
          <ShoppingCartIcon
            sx={{
              color: '#444444',
            }}
          />
        </IconButton>
      </div>

      {searchParams && data ? (
        <div className="max-w-6xl w-full mx-auto md:flex md:justify-center md:items-start md:px-5 md:pb-5 md:flex-1">
          <div className="w-full h-auto md:max-w-sm">
            <img src="/images/body-2.jpg" alt="service" />
          </div>

          <div className="relative w-full">
            <div className="w-full flex justify-between items-center p-4 h-16 md:flex-col md:items-start md:pb-5 md:pt-0 md:px-5">
              <PageTitle
                title={data.title}
                additionalClass="flex-1 text-primary"
              />
              <div className="flex justify-center items-center">
                <AccessTimeIcon fontSize="small" />
                <p className="text-xs">{data.duration}mins</p>
              </div>
            </div>

            <div
              className={`w-full h-full ${
                data.description ? 'px-4 pb-2 md:pt-2 md:p-5' : ''
              } `}
            >
              {data.description}
            </div>

            {data?.tags && (
              <div className="p-2 h-full md:px-5 md:py-2">
                <div className="flex flex-col items-start justify-center bg-slate-100 p-5 rounded-lg max-w-lg mx-auto shadow-lg md:max-w-full">
                  <h2 className="text-base font-semibold mb-4">Includes:</h2>
                  <ul className="list-disc list-inside space-y-1">
                    {data?.tags &&
                      data?.tags.map((service, index) => (
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
                  <div className="flex flex-col justify-center md:justify-around items-start md:flex-row md:w-full mx-auto">
                    <div>
                      <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                          label="Select Date"
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                          className="w-full mx-auto"
                        />
                      </DemoContainer>
                      <p className="pt-2">
                        (We will notify if date is not available)
                      </p>
                    </div>

                    <div className="-ml-5">
                      <DemoContainer components={['DateCalendar']}>
                        <DateCalendar
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </DemoContainer>
                    </div>
                  </div>
                </LocalizationProvider>
              </div>
            </div>

            {/* footer */}
            <div className="fixed md:relative md:m-5 md:w-auto bg-white md:bg-slate-100 md:shadow-lg md:rounded-lg bottom-0 left-0 right-0 w-full h-24 flex justify-center items-center border-t px-4">
              <p className="flex-1 font-bold">₱ {data.price}</p>
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
                  onClick={bookingHandler}
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
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p>Something went wrong!</p>
        </div>
      )}

      <div className="hidden md:block">
        <div className="flex-1"></div>
        <Footer />
      </div>
    </div>
  )
}
