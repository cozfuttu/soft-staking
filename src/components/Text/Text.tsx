import { fontSizes } from 'components/Theme/config'
import styled from 'styled-components'
import { space } from 'styled-system'
import { TextProps } from './types'

const getFontSize = ({ fontSize }: TextProps) => {
  return fontSize ? fontSizes[fontSize] : fontSizes.s
}

/**
 * FONT SIZES - s: 1.6rem; m: 2.4rem; l: 3.2rem; header: 4.8rem; xl: 6.4rem -
 */
const Text = styled.div<TextProps>`
  color: ${p => p.color ? p.theme.colors[p.color] : p.theme.colors.text};
  font-size: ${getFontSize}rem;
  font-weight: ${p => p.bold ? 'bold' : '400'};
  white-space: pre-wrap;

  & > i, & > b {
    color: ${p => p.theme.colors.secondary};
  }
  ${space}
`

export default Text