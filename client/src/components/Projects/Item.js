import React from 'react'
import { Container, Information, Image, Name, Text, TechStack, Tech } from './Item.sc'


const Item = ({ title, description, imageUrl, techStack, index }) => (
  <Container>
    <Information>
      <Name>{title}</Name>
      <Text>{description}</Text>
      <TechStack>
        {techStack.map((tech, index) => <Tech key={index}>{tech}</Tech>)}
      </TechStack>
    </Information>
    <Image src={imageUrl} />
  </Container>
)

export default Item