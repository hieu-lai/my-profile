import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc'
import { Container, Grid } from './About.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'
import aboutData from '../../data/About'
import Item from './Item'

const About = () => (
  <ContentContainer padding> 
    <Container>
      <Title>Huge benefits to modern teams</Title>
      <Subtitle>
        I'm organised and resourceful yet flexible and fun.
        I'm up for any challenges, be it trivial or critical, I'll place
        all my energy in completing the task. 
      </Subtitle>
      <Grid>
        {aboutData.map((item, index) => <Item key={index} index={index} {...item} />)}
      </Grid>
    </Container>
  </ContentContainer>
)

export default About