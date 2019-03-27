import React from 'react'
import { Container, ProblemSolver, TeamPlayer, Learner } from './Item.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'

const Item = ({ title, subtitle, index }) => {
  let image
  switch (index) {
    case 0:
      image = <ProblemSolver />
      break
    case 1:
      image = <TeamPlayer />
      break
    case 2: 
      image = <Learner />
      break
    default:
      break      
  }

  return (
    <Container>
      {image}
      <Title small>{title}</Title>
      <Subtitle small>{subtitle}</Subtitle>
    </Container>
  )
}

export default Item