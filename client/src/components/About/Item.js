import React from 'react'
import { Container, ProblemSolverIcon } from './Shared.sc'
import { Title, Subtitle } from '../../styles/Texts.sc'

const Item = ({ title, subtitle, icon }) => (
  <Container>
    <ProblemSolverIcon />
    <Title small>{title}</Title>
    <Subtitle small>{subtitle}</Subtitle>
  </Container>
)

export default Item