import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc';
import { Title, Subtitle } from '../../styles/Texts.sc';
import projects from '../../data/Projects'
import Item from './Item';

const Projects = () => (
  <ContentContainer padding>
    <Title>Amazing things I've worked on</Title>
    <Subtitle>
      From chrome extensions to web apps to websites, I've worked on it all.
    </Subtitle>
    {projects.map((project, index) => <Item key={index} {...project} />)}
  </ContentContainer>
)

export default Projects