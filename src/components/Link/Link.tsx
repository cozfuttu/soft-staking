import { ReactNode } from "react";
import { Link as ReactLink, LinkProps as ReactLinkProps } from "react-router-dom";
import styled from "styled-components";

interface LinkProps extends ReactLinkProps {
  external?: boolean;
  isActive?: boolean;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ isActive, external, children, ...props }) => {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}
  return (
    <ReactLink {...props} {...externalProps}>
      {children}
    </ReactLink>
  )
}

const StyledLink = styled(Link) <LinkProps>`
  font-weight: ${p => p.isActive ? 'bold' : 'normal'};
  font-size: 1.6rem;
  color: ${p => p.isActive ? p.theme.colors.primary : p.theme.colors.secondary};
  text-decoration: none;

  ${p => p.theme.mediaQueries.m} {
    font-size: 6.4rem;
  }
`

export default StyledLink