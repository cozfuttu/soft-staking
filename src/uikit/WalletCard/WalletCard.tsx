import { useWeb3React } from '@web3-react/core'
import { Text } from '../Text'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Connector } from './connectors'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 80%;
  background: ${p => p.theme.gradients.primaryGradientHorizontal};
  border: 4px solid ${p => p.theme.colors.secondary};
  padding: 12px;
  gap: 8px;
`

interface Props {
  connectorConfig: Connector
  onDismiss: () => void
}

const WalletCard: React.FC<Props> = ({ connectorConfig, onDismiss }) => {
  const { connector, title, Icon } = connectorConfig
  const { activate } = useWeb3React()

  const connect = useCallback(async () => {
    try {
      await activate(connector)
      onDismiss()
    } catch (e) {
      console.log(e)
    }
  }, [activate, connector, onDismiss])

  return (
    <StyledButton onClick={connect}>
      <Icon />
      <Text fontSize='m' bold>{title}</Text>
    </StyledButton>
  )
}

export default WalletCard