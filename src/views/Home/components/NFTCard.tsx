import { Button, Text } from "components";
import useStake from "hooks/useStake";
import { useCallback } from "react";
import { Nft } from "state/types";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${p => p.theme.gradients.primaryGradientTransparent};
  border-radius: 8px;
  gap: 1.6rem;
  width: 250px;
  max-width: 30%;

  & > img {
    max-width: 80%;
  }
`

interface Props {
  nft: Nft
}

const NFTCard: React.FC<Props> = ({ nft }) => {
  const { image, name, tokenId } = nft

  const { onStake } = useStake()

  const handleStake = useCallback(async () => {
    try {
      const result = await onStake(tokenId)
    } catch (e) {
      console.log('An error occured: ', e)
    }
  }, [onStake])

  return (
    <StyledCard>
      <img src={`images/characters/${image}.webp`} alt={image} />
      <Text color="primary">{name}</Text>
      <Button onClick={handleStake}>Stake</Button>
    </StyledCard>
  )
}

export default NFTCard