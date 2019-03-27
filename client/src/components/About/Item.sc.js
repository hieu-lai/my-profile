import styled, { css } from 'styled-components'
import ProblemSolverIcon from '../../icons/ProblemSolver'
import TeamPlayerIcon from '../../icons/TeamPlayer'
import LearnerIcon from '../../icons/Learner'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Image = css`
  /* border: 1px solid; */
  height: 20rem;
  margin: 0 auto 4rem auto;
  width: 20rem;
`

export const ProblemSolver = styled(ProblemSolverIcon)`
  ${Image};
`

export const TeamPlayer = styled(TeamPlayerIcon)`
  ${Image};
`

export const Learner = styled(LearnerIcon)`
  ${Image};
`