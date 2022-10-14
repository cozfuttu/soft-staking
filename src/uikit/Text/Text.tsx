import { fontSizes } from '../Theme/config'
import styled from 'styled-components'
import { space } from 'styled-system'
import { TextProps } from './types'

const getFontSize = ({ fontSize }: TextProps) => {
  return fontSize ? fontSizes[fontSize] : fontSizes.s
}

/**
 * FONT SIZES - xs: 1.2rem; s: 1.6rem; m: 2.4rem; l: 3.2rem; header: 4.8rem; xl: 6.4rem -
 */
const Text = styled.div<TextProps>`
  color: ${p => p.color ? p.theme.colors[p.color] : p.theme.colors.text};
  font-size: ${getFontSize}rem;
  font-weight: ${p => p.bold ? 'bold' : '400'};
  font-family: ${p => p.KO ? "Kingthings Organica" : 'inherit'};
  white-space: pre-wrap;
  text-align: ${p => p.center ? 'center' : 'initial'};

  & > i, & > b {
    color: ${p => p.theme.colors.secondary};
  }
  ${space}
`

export default Text