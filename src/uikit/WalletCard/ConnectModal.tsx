import { Text } from '../Text'
import React from 'react'
import styled from 'styled-components'
import { connectors } from './connectors'
import WalletCard from './WalletCard'

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  max-width: 70%;
  background: ${p => p.theme.gradients.primaryGradient};
  border: 4px solid ${p => p.theme.colors.primary};
  border-radius: 8px;
  gap: 1.6rem;
  padding: 24px;
  z-index: 100;
`

interface Props {
  onDismiss: () => void
}

const ConnectModal: React.FC<Props> = ({ onDismiss }) => {
  const WalletCards = connectors.map((connectorConfig) => <WalletCard key={connectorConfig.title} connectorConfig={connectorConfig} onDismiss={onDismiss} />)
  return (
    <StyledModal>
      <Text fontSize='m' bold>Choose a wallet!</Text>
      {WalletCards}
    </StyledModal>
  )
}

export default ConnectModal