import React from 'react'
import { Container, Link, Github, LinkedIn, SocialLink, Wrapper } from './Menu.sc'

const Menu = () => (
  <Container>
    <Link>Projects</Link>
    <Link>Resume</Link>
    <Wrapper>
      <SocialLink href="https://github.com/hieu-lai" target="_blank">
        <Github />
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/hieulai/" target="_blank" margin>
        <LinkedIn />
      </SocialLink>
    </Wrapper>
  </Container>
)

export default Menu