import styled from 'styled-components'

const StyledDivider = styled.div<{ fullWidth?: boolean }>`
  background: ${p => p.theme.gradients.primaryGradientHorizontal};
  height: 6px;
  width: ${p => p.fullWidth ? '100%' : '25.6rem'};
  margin: 2rem 0;
`

export default StyledDivider