import Footer from './footer'
import Nav from './nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="relative max-w-6xl mx-auto px-2 py-4 pt-[120px] md:min-h-[calc(100vh-326px)]">
        {children}
      </div>
      <Footer />
    </>
  )
}
