import React from 'react'
import { Container, Grid, Content, Title, Text, Image } from './Landing.sc'
import { ContentContainer } from '../../styles/Containers.sc'
import { Button } from '../Button/Button.sc';

const Landing = () => (
  <Container name="landing">
    <ContentContainer>
      <Grid>
        <Content alignLeft>
          <Title>Hi there, I'm Hieu!</Title>
          <Text>
            A Front End Developer with a passion for building <span>beautiful</span>,
            <span> simple</span> and <span>clean</span> UI and UX.
          </Text>
          <Button as="a" href="mailto:hieuqlai@gmail.com">Lets work together!</Button>
        </Content>
        <Content alignRight>
          <Image />
        </Content>
      </Grid>
    </ContentContainer>
  </Container>
)

export default Landing