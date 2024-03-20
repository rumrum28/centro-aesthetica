import { Dayjs } from 'dayjs'

export type Tags = {
  id: number
  title: string
  price: number
  tags?: string[]
  packagePrice?: number | null
  description: string
  image: string[]
  duration: number
  dateSelected?: Dayjs | null
  type: string
}

export type Services = Tags[]
