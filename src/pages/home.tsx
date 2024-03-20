import BackgroundVideo from '../components/backgroundVideo'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import HomeBody from '../components/home/homeBody'
import HomeBody2 from '../components/home/HomeBody2'
import HeaderTitle from '../components/home/headerTitle'
import HomeServices from '../components/home/homeServices'
import cosmeticMassage from '/images/cosmetic-massage.webp'
import v1080 from '/videos/Centro-Aesthetica-1080p.mp4'
import v720 from '/videos/Centro-Aesthetica-720p.mp4'
import v576 from '/videos/Centro-Aesthetica-576p.mp4'
import v480 from '/videos/Centro-Aesthetica-480p.mp4'
import v460 from '/videos/Centro-Aesthetica-460p.mp4'
import v360 from '/videos/Centro-Aesthetica-360p.mp4'

const videoSources = [
  { src: v1080 },
  { src: v720 },
  { src: v576 },
  { src: v480 },
  { src: v460 },
  { src: v360 },
]

export default function Home() {
  const ratio = (720 / 1280) * window.innerWidth

  return (
    <>
      <Nav />
      <div
        className={`relative w-full overflow-hidden mt-[96px] max-h-[calc(100vh-96px)] p-5`}
        style={{ height: ratio - 10 }}
      >
        <BackgroundVideo
          videoSources={videoSources}
          placeholderImage={cosmeticMassage}
        />

        <div className="relative z-10 flex justify-start items-start h-full max-w-8xl mx-auto">
          <HeaderTitle />

          <div className="absolute bottom-0 right-0 hidden sm:flex justify-center">
            <div className="animate-bounce text-slate-300 hover:text-slate-50 pb-5 cursor-pointer">
              <ExpandCircleDownIcon sx={{ fontSize: 32 }} />
            </div>
          </div>
        </div>
      </div>

      <HomeBody />
      <HomeServices />
      <HomeBody2 />

      <Footer />
    </>
  )
}
