import React from 'react'
import { Element } from 'react-scroll'
import { ContentContainer } from '../../styles/Containers.sc';
import { Title, Subtitle } from '../../styles/Texts.sc';
import projects from '../../data/Projects'
import Item from './Item';

const Projects = () => ( 
  <Element name="projects">
    <ContentContainer padding>
      <Title>Amazing things I've worked on</Title>
      <Subtitle>
        From chrome extensions to web apps to websites, I've worked on it all.
      </Subtitle>
      {projects.map((project, index) => <Item key={index} index={index} {...project} />)}
    </ContentContainer>
  </Element>
)

export default Projects