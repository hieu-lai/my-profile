import React from 'react'
import { Container, ProblemSolverIcon, Title, Subtitle } from './Shared.sc';

const Item = ({ title, subtitle, icon }) => (
  <Container>
    <ProblemSolverIcon />
    <Title small>{title}</Title>
    <Subtitle small>{subtitle}</Subtitle>
  </Container>
)

export default Item