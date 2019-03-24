import React from 'react'
import { Container, Link, Github, LinkedIn, SocialLink, Wrapper } from './Menu.sc'
import Switch from '../Lottie/Switch';

const Menu = () => (
  <Container>
    <Link>Projects</Link>
    <Link>Resume</Link>
    <Wrapper>
      <SocialLink href="https://github.com/hieu-lai" target="_blank">
        <Github />
      </SocialLink>
      <div />
      <SocialLink href="https://linkedin.com/in/hieulai/" target="_blank" margin>
        <LinkedIn />
      </SocialLink>   
      <Switch /> 
    </Wrapper>
  </Container>
)

export default Menu