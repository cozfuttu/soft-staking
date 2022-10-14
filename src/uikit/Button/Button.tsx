import styled from "styled-components";
import { space } from 'styled-system'
import { ThemedButtonProps, ButtonProps } from "./types";

const getBackground = ({ theme, variant = "primary" }: ThemedButtonProps) => {
  return variant === 'secondary' ? theme.colors.secondaryButton : theme.gradients.primaryGradient
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  background: ${getBackground};
  box-shadow: 0px 2px 4px 4px rgba(74, 60, 148, 0.5);
  border-radius: 4px;
  border-image: ${p => p.variant === 'secondary' ? p.theme.gradients.primaryGradient : 'none'} 1;
  padding: 1.2rem 3rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: #fffc;
  border-width: ${p => p.variant === 'secondary' ? '4px' : 'none'};
  border-style: ${p => p.variant === 'secondary' ? 'solid' : 'none'};
  cursor: ${p => p.disabled ? 'initial' : 'pointer'};
  transition: all 100ms linear;
  width: fit-content;
  align-items: center;

  &:disabled {
    background: #eee;
    color: #666;
  }

  &:hover {
    box-shadow: ${p => p.disabled ? 'none' : '0px 2px 4px 12px rgba(74, 60, 148, 0.5)'};
  }

  &:active {
    box-shadow: ${p => p.disabled ? 'none' : '0px 2px 4px 12px rgba(70, 148, 60, 0.5)'};
  }

  ${space}
`;


export default StyledButton;
