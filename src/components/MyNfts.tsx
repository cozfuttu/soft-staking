import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useMultiStake } from "../hooks/useStake";
import { Nft } from "../state/types";
import { Text } from "../uikit";
import NFTCard from "./NFTCard";

const StyledMyNfts = styled.div`
  width: 497px;
  height: 851px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("images/backgrounds/MyNFTsBanner.webp") no-repeat;
  justify-content: flex-start;
  padding: 48px;
  gap: 16px;

  & > button {
    background: url("images/backgrounds/GreenBtn.webp") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 69px;
    border: none;
    color: white;
    font-weight: bold;
    font-family: "Kingthings Organica", sans-serif;
    font-size: 2rem;
    cursor: pointer;
  }
`

const NFTs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  height: 75%;
  overflow-y: auto;
  gap: 16px;
  padding: 12px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #7904c7;
    width: 24px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    width: 8px;
    background: #4D0082;
    border-radius: 4px;
  }
`

interface Props {
  nfts: Nft[]
  setNftsState: Dispatch<SetStateAction<Nft[]>>
}

const MyNfts: React.FC<Props> = ({ nfts, setNftsState }) => {
  const [chosenStakingNFTs, setChosenStakingNFTs] = useState<string[]>([])
  const [userCardsState, setUserCardsState] = useState<JSX.Element[]>([])

  useEffect(() => {
    const userCards = nfts?.filter((nft) => !nft.stakeTimeBlock).map((nft) => <NFTCard key={nft.tokenId} nft={nft} chooseFunc={setChosenStakingNFTs} chosen={chosenStakingNFTs.includes(nft.tokenId)} />)
    for (let i = userCards.length; i < 6; i++) {
      userCards.push(<NFTCard key={i * 100} />)
    }
    setUserCardsState(userCards)
  }, [nfts, setUserCardsState, setChosenStakingNFTs, chosenStakingNFTs])

  const { onMultiStake } = useMultiStake()

  const handleStake = useCallback(async () => {
    try {
      const results = await onMultiStake(chosenStakingNFTs)
      console.log('result: ', results)

      results.forEach((result) => {
        setNftsState((prev) => [...prev.filter((prevNft) => prevNft.tokenId !== result.tokenId), { ...prev.find((prevNft) => prevNft.tokenId === result.tokenId)!, stakeTimeBlock: result.stakeTimeBlock, stakeTimeEpoch: result.stakeTimeEpoch }]
        )
        setUserCardsState((prev) => {
          const filtered = prev.filter((prevNftCards) => prevNftCards.key !== result.tokenId)
          console.log('previousUserCards: ', prev, 'filtered: ', filtered)
          return filtered
        })
      })
    } catch (e) {
      console.log('an error occured while staking: ', e)
    }
  }, [onMultiStake, chosenStakingNFTs, setNftsState])

  return (
    <StyledMyNfts>
      <Text fontSize="header" KO color="primary">My NFTs</Text>
      <NFTs>
        {userCardsState}
      </NFTs>
      {chosenStakingNFTs.length > 0 && <button onClick={handleStake}>Confirm Stake</button>}
      <Text fontSize="s" color="primary" center>Each staked NFT will earn you 25 BTMG a day.</Text>
    </StyledMyNfts>
  )
}

export default MyNfts