import React from 'react'
import { ContentContainer } from '../../styles/Containers.sc';
import { Text } from './Footer.sc';

const Footer = () => (
  <ContentContainer>
    <Text>Made with <span role="img" aria-label="Heart">💖</span> © 2019</Text>
  </ContentContainer>
)

export default Footer