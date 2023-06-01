import Nav from './nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto px-2 mt-[114px]">{children}</div>
    </>
  )
}
