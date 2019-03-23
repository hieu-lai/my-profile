import React from 'react'
import { Container, Title, Text, Companies, Image, Equal, Name, ModButton } from './Banner.sc'
import { ContentContainer } from '../../styles/Containers.sc'

const Banner = () => (
  <ContentContainer padding>
    <Container>
      <Title>Need things done. I got you covered.</Title>
      <Text>Companies that got things done.</Text>
      <Companies>
        <Equal>
          <Image src="/equal-logo.png" alt="equal-logo" small />
          <Name>EQUAL</Name>
        </Equal>
        <Image src="/cusi-logo.png"  alt="cusi-logo" />
        <Title small>Your company here</Title>
      </Companies>
      <ModButton>Its go time!</ModButton>
    </Container>
  </ContentContainer>
)

export default Banner