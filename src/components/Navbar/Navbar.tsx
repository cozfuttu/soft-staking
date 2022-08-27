import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { ModalContext } from 'components/context/modalContext'
import ConnectModal from 'components/WalletCard/ConnectModal'
import { network } from 'components/helpers/connectors'

const HeaderWrapper = styled.header`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const ContactButtonContainer = styled.div`
 ${p => p.theme.mediaQueries.m} {
    display: none;
  }
`

const LogoText = styled(Text)`
  font-size: ${p => p.theme.fontSizes.header}rem;
  ${p => p.theme.mediaQueries.m} {
    display: none;
  }
`

const Navbar: React.FC = () => {
  const { account, activate } = useWeb3React()
  const { handleShow, handleHide } = useContext(ModalContext)

  const showConnectModal = useCallback(() => {
    handleShow({ customModal: <ConnectModal onDismiss={handleHide} /> })
  }, [handleShow, handleHide])

  const disconnect = useCallback(() => {
    try {
      activate(network)
    } catch (e) {
      console.log(e)
    }
  }, [activate])

  return (
    <HeaderWrapper>
      <Logo>
        <LogoText color='primary'>Battlemancers</LogoText>
      </Logo>
      <ContactButtonContainer>
        {account ? <Button onClick={disconnect}>{account?.slice(0, 6) + '...' + account?.slice(36)}</Button> : <Button onClick={showConnectModal}>Connect</Button>}
      </ContactButtonContainer>
    </HeaderWrapper>
  )
}

export default Navbar