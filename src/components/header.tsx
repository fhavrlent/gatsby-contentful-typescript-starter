import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <HeaderWrapper>
    <HeaderContainer>
      <StyledHeader>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledHeader>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: '1.45rem';
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const StyledHeader = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
