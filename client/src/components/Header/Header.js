import React from 'react'
import { Container, Wrapper } from './Header.sc'
import Brand from '../Brand/Brand'
import { ContentContainer } from '../../styles/Containers.sc'
import Menu from '../Menu/Menu'

const Header = () => (
  <Container>
    <ContentContainer>
      <Wrapper>
        <Brand />
        <Menu />
      </Wrapper>
    </ContentContainer>
  </Container>
)

export default Header