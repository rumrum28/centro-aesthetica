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

type Props = {
  id: number
  title: string
  price: number
  tags?: string[] | null
  packagePrice?: number | null
  description?: string | null
  image?: string | null
  duration: number
}

export default function PerServices() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<Props | null>(null)
  const divRef = useRef<any>(null)

  useEffect(() => {
    const paramsId = searchParams.get('id')
    const dataCheck = ServicesOffered.filter((item: Props) => {
      return item.id === parseInt(paramsId!)
    })
    setData(dataCheck[0])

    if (divRef.current) {
      divRef.current.scrollTop = 0
    }
  }, [ServicesOffered, searchParams])

  return (
    <div ref={divRef} className="relative w-full min-h-screen">
      <div className="fixed w-full top-0 left-0 right-0 flex items-center justify-between p-4">
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
        <>
          <div className="w-full h-auto">
            <img src="/images/body-2.jpg" alt="service" />
          </div>

          <div className="w-full flex justify-between items-center p-4 h-16">
            <PageTitle title={data.title} additionalClass="flex-1" />
            <AccessTimeIcon fontSize="small" />{' '}
            <p className="text-xs">{data.duration}mins</p>
          </div>

          <div className="w-full h-full px-4 pb-2">{data.description}</div>
          {data?.tags && (
            <div className="p-2 h-full pb-28">
              <div className="flex flex-col items-start justify-center bg-slate-100 p-5 rounded-lg max-w-lg mx-auto shadow-lg">
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

          {/* footer */}
          <div className="fixed bg-white bottom-0 left-0 right-0 w-full h-24 flex justify-center items-center border-t px-4">
            <p className="flex-1 font-bold">₱ {data.price}</p>

            <IconButton
              aria-label="add to favorites"
              className="dark:text-slate-50"
            >
              <FavoriteIcon />
            </IconButton>
            <Button variant="contained" className="gold">
              Add to booking
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p>Something went wrong!</p>
        </div>
      )}
    </div>
  )
}
