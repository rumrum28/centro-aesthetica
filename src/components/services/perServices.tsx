import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type PerServicesProps = {
  images: string
  title: string
  description: string
  price: string
  duration: string
}

export default function PerServices({
  images,
  title,
  description,
  price,
  duration,
}: PerServicesProps) {
  return (
    <Card
      sx={{ width: '100%' }}
      className="dark:bg-slate-700 dark:text-slate-50"
      elevation={3}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" className="dark:text-slate-50">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        disableTypography
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardMedia component="img" height="194" image={images} alt={title} />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="dark:text-slate-50"
        >
          {description} {duration}.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          className="dark:text-slate-50"
        >
          <FavoriteIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }} className="dark:text-slate-50">
          {price}
        </Typography>
        <Button variant="contained" className="gold">
          Book Now
        </Button>
      </CardActions>
    </Card>
  )
}
