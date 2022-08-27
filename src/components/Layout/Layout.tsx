import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";
import { Navbar } from "../Navbar";

const StyledLayout = styled.main`
  width: 164rem;
  max-width: 86%;
  max-height: 90vh;
  margin: 6.4rem auto 0 auto;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.2rem;

  ${p => p.theme.mediaQueries.m} {
    text-align: center;
  }
`;

const Layout: React.FC<{ children: ReactNode, style?: CSSProperties }> = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <StyledLayout {...props}>
        {children}
      </StyledLayout>
    </>
  )
}

export default Layout