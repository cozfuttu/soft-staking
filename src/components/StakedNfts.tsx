import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { REWARD_PER_SECOND, SECONDS_IN_A_DAY } from "../config";
import formatAddress from "../helpers/formatAddress";
import { useTransfers } from "../hooks/useTransfers";
import { Nft } from "../state/types";
import { Text } from "../uikit";
import { injected } from "../uikit/helpers/connectors";
import NFTCard from "./NFTCard";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const StyledStakedNfts = styled.div`
  width: 427px;
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("images/backgrounds/StakedNFTsBg.webp") no-repeat;
  justify-content: flex-start;
  padding: 48px;
  gap: 16px;
  z-index: 2;
`

const NFTs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 88%;
  height: 75%;
  overflow-y: auto;
  gap: 16px;
  padding: 12px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #90806B, #DAC4A6);
    width: 24px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    width: 8px;
    background: #90806B;
    border-radius: 4px;
  }
`

const ConnectAndBalanceContainer = styled.div<{ connected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-left: -6px;
  margin-top: 40px;

  & > button {
    background: url("images/backgrounds/GreenBtn.webp") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 44px;
    border: none;
    color: white;
    font-weight: bold;
    font-family: "Kingthings Organica", sans-serif;
    font-size: ${p => p.connected ? "1.6rem" : "2rem"};
    cursor: pointer;
  }
`

const Balance = styled.div<{ blue?: boolean }>`
  background: url(${p => `images/backgrounds/${p.blue ? "BookmarkBlue" : "BookmarkGreen"}.webp`}) no-repeat;
  width: 144px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
`

interface Props {
  nfts: Nft[]
}

const StakedNfts: React.FC<Props> = ({ nfts }) => {
  const [userCardsState, setUserCardsState] = useState<JSX.Element[]>([])
  const [totalEarned, setTotalEarned] = useState(0)
  const [dailyEarnings, setDailyEarnings] = useState(0)
  const { account, activate, deactivate } = useWeb3React()

  const { handleTransfers } = useTransfers()

  useEffect(() => {
    const filteredNfts = nfts?.filter((nft) => nft.stakeTimeBlock)
    filteredNfts.forEach((nft) => {
      handleTransfers(nft.stakeTimeBlock, nft.tokenId, nft.stakeTimeEpoch!)
    })
    const userCards = filteredNfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} staked setTotalEarned={setTotalEarned} />)
    for (let i = userCards.length; i < 6; i++) {
      userCards.push(<NFTCard key={i * 100} staked />)
    }
    setUserCardsState(userCards)
    setDailyEarnings(filteredNfts.length * SECONDS_IN_A_DAY * REWARD_PER_SECOND)
  }, [nfts, setUserCardsState, setDailyEarnings, handleTransfers])

  const handleConnect = useCallback(async () => {
    activate(injected)
  }, [activate])

  return (
    <Wrapper>
      <StyledStakedNfts>
        <Text fontSize="header" KO color="secondary">Staked NFTs</Text>
        <NFTs>
          {userCardsState}
        </NFTs>
        <Text color="red" bold center>Do NOT unstake or transfer your NFTs otherwise your earnings will be lost</Text>
      </StyledStakedNfts>
      <ConnectAndBalanceContainer connected={typeof account === "string"}>
        <img src="images/icons/BTMG.svg" alt="BTMG" />
        <button onClick={account ? () => deactivate() : handleConnect}>{account ? formatAddress(account) : "Connect"}</button>
        <Balance blue>
          <Text fontSize="xs" color="textGray">Balance: </Text>
          <Text fontSize="s" color="green" bold>{totalEarned} BTMG</Text>
        </Balance>
        <Balance>
          <Text fontSize="xs" color="textGray">Daily Earnings: </Text>
          <Text fontSize="s" color="green" bold>{dailyEarnings} BTMG </Text>
        </Balance>
      </ConnectAndBalanceContainer>
    </Wrapper>
  )
}

export default StakedNfts