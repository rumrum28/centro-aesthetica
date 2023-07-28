import { Button, CardActions, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
  title: string
  price: number
  packagePrice?: number | null
  image?: string | null
}

const SingleService = ({ product }: { product: Props }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg dark:border m-4">
      <img
        className="w-full"
        src={product?.image || '/images/no-image.jpg'}
        alt="Sunset in the mountains"
      />
      <div className="px-4 pt-4 flex-1">
        <div className="text-primary font-bold text-xl dark:text-darkgold">
          {product.title}
        </div>
      </div>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          className="dark:text-darkgold"
        >
          <FavoriteIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }} className="dark:text-darkgold">
          ₱{product.price}
        </Typography>
        <Button
          variant="contained"
          className="gold"
          onClick={() => navigate(`/book-services/service?id=${product.id}`)}
        >
          View
        </Button>
      </CardActions>
    </div>
  )
}

export default SingleService
