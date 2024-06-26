import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loader: React.FC = () => {
  return (
    <Container>
      <img src="img/loading.gif" alt="Loading" />
    </Container>
  )
}

export default Loader