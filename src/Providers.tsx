import { Web3ReactProvider } from '@web3-react/core'
import React, { PropsWithChildren } from 'react'
import Web3 from 'web3'
import { Provider } from 'react-redux'
import ThemeProvider from 'components/context/themeContext'
import ModalProvider from 'components/context/modalContext'
import store from 'state'

const getLibrary = (provider: any) => new Web3(provider)

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ModalProvider>
            {children}
          </ModalProvider>
        </Web3ReactProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default Providers