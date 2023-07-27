import { Dayjs } from 'dayjs'

type Tags = {
  id: number
  title: string
  price: number
  tags?: string[] | null
  packagePrice?: number | null
  description?: string | null
  image?: string | null
  duration: number
  dateSelected?: string | null
}

export type Services = Tags[]
