import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc'
import { Container, Grid } from './About.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'
import aboutData from '../../data/About'
import Item from './Item'


const About = () => (
  <ContentContainer padding>
    <Container>
      <Title>Hieuge benefits to modern teams</Title>
      <Subtitle>
        Dynamic and adaptable, I fit into any team's style. 
        I'm up for any challenges, except ones that include heights, 
        I will nope right out of there.
      </Subtitle>
      <Grid>
        {aboutData.map((item, index) => <Item key={index} {...item} />)}
      </Grid>
    </Container>
  </ContentContainer>
)

export default About