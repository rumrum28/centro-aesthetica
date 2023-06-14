import { useState } from 'react'
import Layout from '../components/layout'

export default function Home() {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <Layout>
      {isLogin ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl font-bold">Login</h1>
          <button onClick={() => setIsLogin(false)}>Register</button>
        </div>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </Layout>
  )
}
