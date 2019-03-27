import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'
import { ContactUs, OnThePhone, ModButton } from './YourMove.sc';

const YourMove = () => (
  <ContentContainer padding relative>
    <ContactUs />
    <Title>Contact me today</Title>
    <Subtitle smallWidth>
      Sign up and become one of the millions of people around the 
      world using Trello to get more done.
    </Subtitle>
    <ModButton as="a" href="mailto:hieuqlai@gmail.com">Hire me!</ModButton>
    <OnThePhone />
  </ContentContainer>
)

export default YourMove