import { InputHTMLAttributes, MutableRefObject } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`

const StyledLabel = styled.label``

const StyledInput = styled.input`
  max-width: 100%;
  width: 464px;
  height: 42px;
  border: 4px solid ${p => p.theme.colors.secondary};
  border-radius: 4px;
  background: #0000;
  color: ${p => p.theme.colors.text};
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  ref?: MutableRefObject<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({ label, ref, ...props }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={props.id}>{label}</StyledLabel>
      <StyledInput {...props} ref={ref} />
    </Wrapper>
  )
}

export default Input