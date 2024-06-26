import { Services } from '../types/services'
import aaf1 from '/images/anti-acne-facial.jpg'
import aaf2 from '/images/anti-acne-facial.jpg'
import aaf3 from '/images/anti-aging-facial.jpg'
import aaf4 from '/images/anti-aging-facial.jpg'
import bf1 from '/images/brightening-facial.jpg'
import bf2 from '/images/brightening-facial.jpg'
import rf1 from '/images/regular-facial.jpg'
import rf2 from '/images/regular-facial.jpg'
import cf1 from '/images/classic-facial.jpg'
import cf2 from '/images/classic-facial.jpg'
import hf1 from '/images/hydra-facial.jpg'
import hf2 from '/images/hydra-facial.jpg'
import atp1 from '/images/acne-therapy-package.jpg'
import atp2 from '/images/acne-therapy-package.jpg'
import cfwdp1 from '/images/complete-facial-with-diamond-peel.jpg'
import cfwdp2 from '/images/complete-facial-with-diamond-peel.jpg'

export const ServicesOffered: Services = [
  {
    id: 1,
    title: 'Anti Acne Facial',
    price: 500,
    tags: [
      'facial massage',
      'cleansing',
      'scrubbing',
      'pricking w/ betadine treatment',
      'toner',
      'whitening mask',
      'whitening cream / sunblock',
    ],
    image: [aaf1, aaf2],
    duration: 60,
    type: 'facial',
    description:
      'This is a facial treatment that is designed to help clear and prevent acne. A deep cleansing facial that is designed to help clear and prevent acne.',
  },
  {
    id: 2,
    title: 'Anti Aging Facial',
    price: 500,
    tags: [
      'facial massage',
      'cleansing',
      'scrubbing',
      'pricking w/ betadine treatment',
      'toner',
      'whitening mask',
      'whitening cream / sunblock',
    ],
    image: [aaf3, aaf4],
    duration: 60,
    type: 'facial',
    description:
      'Pamper yourself with our anti-aging facial treatment. This facial is designed to help reduce the appearance of fine lines and wrinkles',
  },
  {
    id: 3,
    title: 'Brightening Facial',
    price: 500,
    tags: [
      'facial massage',
      'cleansing',
      'scrubbing',
      'pricking w/ betadine treatment',
      'toner',
      'whitening mask',
      'whitening cream / sunblock',
    ],
    image: [bf1, bf2],
    duration: 60,
    type: 'facial',
    description:
      'This facial treatment is designed to help brighten and even out your skin tone. We use products that are designed to help improve overall skin texture, tone and appearance.',
  },
  {
    id: 4,
    title: 'Regular Facial',
    price: 400,
    tags: [
      'facial massage',
      'cleansing',
      'pricking w/ betadine treatment',
      'toner',
      'whitening mask',
      'moisturizing cream / sunblock',
    ],
    image: [rf1, rf2],
    duration: 60,
    type: 'facial',
    description:
      'This facial treatment is designed to help brighten and even out your skin tone and improve overall skin texture, tone and appearance.',
  },
  {
    id: 5,
    title: 'Classic Facial',
    price: 300,
    tags: [
      'facial massage',
      'cleansing',
      'toner',
      'whitening mask',
      'whitening cream / sunblock',
    ],
    image: [cf1, cf2],
    duration: 60,
    type: 'facial',
    description:
      'This facial treatment is designed to help brighten and even out your skin tone and improve overall skin texture, tone and appearance.',
  },
  {
    id: 6,
    title: 'Hydra Facial',
    price: 1000,
    packagePrice: 3000,
    description:
      'Package 3 + 1 sessions. With free Acne set cosmetics and free 1 session of RF slimming. Promo until December 31, 2021.',
    tags: [
      'deep exfoliation that clean your pores',
      'help improve overall skin texture',
      'tone and apperance',
    ],
    image: [hf1, hf2],
    duration: 60,
    type: 'facial',
  },
  {
    id: 7,
    title: 'Acne Therapy Package',
    price: 1250,
    packagePrice: 5000,
    description:
      'Package 4 + 1 sessions. With free Acne set cosmetics. Complete set of acne treatment. Comes with free 1 session of RF slimming. Promo until December 31, 2021.',
    image: [atp1, atp2],
    duration: 60,
    type: 'facial',
  },
  {
    id: 8,
    title: 'Complete Facial with Diamond Peel',
    price: 1000,
    tags: [
      'mechanical exfoliation that removes excess oil',
      'dirt and dead cells on the surface of the skin to reveal younger brighter skin',
    ],
    image: [cfwdp1, cfwdp2],
    duration: 60,
    type: 'facial',
    description:
      'This is a complete facial treatment that includes a diamond peel. It is designed to help brighten and even out your skin tone and improve overall skin texture, tone and appearance.',
  },
]

export const Slimming = [
  {
    id: 1,
    title: 'Radio Frequency',
    price: 1500,
  },
  {
    id: 2,
    title: 'Lipo Laser',
    price: 1500,
  },
  {
    id: 3,
    title: 'Lipo Cavitation',
    price: 1500,
  },
]

export const Infusions = [
  {
    id: 1,
    title: 'Glow',
    price: 8000,
  },
  {
    id: 2,
    title: 'Repair',
    price: 8000,
  },
  {
    id: 3,
    title: 'Protect',
    price: 8000,
  },
  {
    id: 4,
    title: 'Whiten',
    price: 8000,
  },
  {
    id: 5,
    title: 'Anti Aging',
    price: 8000,
  },
  {
    id: 6,
    title: 'Gluta + Vitamin C',
    price: 1500,
  },
]

export const Peels = [
  {
    id: 1,
    title: 'Underarms',
    price: 2500,
  },
  {
    id: 2,
    title: 'Face and Neck',
    price: 5000,
  },
  {
    id: 3,
    title: 'Body',
    price: 15000,
  },
  {
    id: 4,
    title: 'Glycolic Peel',
    price: 5000,
  },
  {
    id: 5,
    title: 'Obagi Blue Peel',
    price: 25000,
  },
]

export const TreatmentsNeedConsultation = [
  {
    id: 1,
    title: 'Cosmetic Sugeries',
  },
  {
    id: 2,
    title: '4D Ultherapy / HIFU',
  },
  {
    id: 3,
    title: 'Thread Lift / V-Lift',
  },
  {
    id: 4,
    title: 'Fillers',
  },
  {
    id: 5,
    title: 'Sclerotherapy (Varicose Veins)',
  },
  {
    id: 6,
    title: 'Botox',
  },
  {
    id: 7,
    title: 'Meso Botox',
  },
  {
    id: 8,
    title: 'Keloid Inject',
  },
  {
    id: 9,
    title: 'Warts Removal',
  },
]

export const HairRemoval = [
  {
    id: 1,
    title: 'Upper Lips',
    price: 500,
    packagePrice: 2500,
    description: 'Package 5 + 1 sessions',
  },
  {
    id: 2,
    title: 'Face',
    price: 1666,
    packagePrice: 5000,
    description: 'Package 3 + 1 sessions',
  },
  {
    id: 3,
    title: 'Underarms',
    price: 1000,
    packagePrice: 5000,
    description: 'Package 5 + 1 sessions',
  },
  {
    id: 4,
    title: 'Half Arms',
    price: 1500,
    packagePrice: 6000,
    description: 'Package 4 + 1 sessions',
  },
  {
    id: 5,
    title: 'Full Arms',
    price: 2666,
    packagePrice: 8000,
    description: 'Package 3 + 1 sessions',
  },
  {
    id: 6,
    title: 'Lower Legs',
    price: 2000,
    packagePrice: 8000,
    description: 'Package 4 + 1 sessions',
  },
  {
    id: 7,
    title: 'Full Legs',
    price: 3333,
    packagePrice: 10000,
    description: 'Package 3 + 1 sessions',
  },
  {
    id: 8,
    title: 'Brazilian',
    price: 1200,
    packagePrice: 12000,
    description: 'Package 10 + 2 sessions',
  },
]
