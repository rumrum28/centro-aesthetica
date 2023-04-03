import { useState } from 'react'
import Layout from '../components/layout'
import Products from '../components/products'

export default function Home() {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <Layout>
      {isLogin ? (
        <Products />
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </Layout>
  )
}
