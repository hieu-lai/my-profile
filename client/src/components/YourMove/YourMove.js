import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'
import { ModButton, DogWrapper } from './YourMove.sc';
import Dog from '../Lottie/Dog'; 

const YourMove = () => (
  <ContentContainer padding relative>
    {/* <DogWrapper><Dog /></DogWrapper> */}
    <Title>Contact me today</Title>
    <Subtitle smallWidth>
      The easiest way to contact me is by email. I'm also
      available through LinkedIn, just message me  
      <span role="img" aria-label="Smiley Face"> 😊</span>. 
    </Subtitle>
    <ModButton as="a" href="mailto:hieuqlai@gmail.com">Hire me!</ModButton>
  </ContentContainer>
)

export default YourMove  