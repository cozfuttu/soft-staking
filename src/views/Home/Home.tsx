import React from 'react'
import { Layout } from 'components'
import { useUserNfts } from 'state/hooks'

const Home = () => {
  const nfts = useUserNfts()

  console.log('nfts: ', nfts)

  return (
    <Layout>
      a
    </Layout>
  )
}

export default Home