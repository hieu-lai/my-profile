import React from 'react'
import { Container, Information, Image, Name, Text, TechStack, Tech, Header, Link, Code, ExternalLink, Wrapper } from './Item.sc'


const Item = ({ title, description, imageUrl, techStack, siteUrl, codeUrl, index }) => (
  <Container index={index}>
    <Information>
      <Header>
        <Name>{title}</Name>
        <Wrapper>
          {codeUrl && <Link href={codeUrl} target="_blank"><Code /></Link>}
          {siteUrl && <Link margin href={siteUrl} target="_blank"><ExternalLink /></Link>}
        </Wrapper>
      </Header>
      
      <Text>{description}</Text>
      <TechStack>
        {techStack.map((tech, index) => <Tech key={index}>{tech}</Tech>)}
      </TechStack>
    </Information>
    <Image src={imageUrl} />
  </Container>
)

export default Item