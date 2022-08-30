import React from 'react'
import { Flex, Layout, Text } from 'components'
import { useUserNfts } from 'state/hooks'
import NFTCard from './components/NFTCard'

const Home = () => {
  const userData = useUserNfts()

  const cards = userData?.nfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} />)

  console.log(userData)

  return (
    <Layout>
      <Text fontSize='l'>MY NFTs</Text>
      <Flex flexWrap="wrap" gap={6}>
        {cards}
      </Flex>
      <Text fontSize='l'>STAKED NFTs</Text>
      <Flex flexWrap="wrap" gap={6}>
        {cards}
      </Flex>
    </Layout>
  )
}

export default Home