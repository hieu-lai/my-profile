import React from 'react'
import { Link } from 'react-scroll'
import { Container, Link as Text, Github, LinkedIn, SocialLink, Wrapper } from './Menu.sc'
import Switch from '../Lottie/Switch';


const Menu = () => (
  <Container name="landing">
    <Link to="projects" smooth={true} offset={-40}>
      <Text>Projects</Text>
    </Link>
    <Text as="a" href="/files/Hieu Lai Resume.pdf" target="_blank">Resume</Text>
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