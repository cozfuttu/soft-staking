import { ReactNode } from "react";
import styled from "styled-components";
import Link, { LinkProps } from 'next/link'

interface CustomLinkProps extends LinkProps {
  external?: boolean;
  isActive?: boolean;
  children: ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ isActive, external, children, ...props }) => {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}
  return (
    <Link {...props} {...externalProps}>
      {children}
    </Link>
  )
}

const StyledLink = styled(Link) <CustomLinkProps>`
  font-weight: ${p => p.isActive ? 'bold' : 'normal'};
  font-size: 1.6rem;
  color: ${p => p.isActive ? p.theme.colors.primary : p.theme.colors.secondary};
  text-decoration: none;

  ${p => p.theme.mediaQueries.m} {
    font-size: 6.4rem;
  }
`

export default CustomLink