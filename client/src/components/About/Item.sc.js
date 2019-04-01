import styled, { css } from 'styled-components'
import ProblemSolverIcon from '../../icons/ProblemSolver'
import TeamPlayerIcon from '../../icons/TeamPlayer'
import LearnerIcon from '../../icons/Learner'
import { media } from '../../styles/MediaQueries';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Image = css`
  /* border: 1px solid; */
  height: 12rem;
  margin: 0 auto 2rem auto;
  width: 12rem;

  ${media.desktop`
    height: 20rem;
    margin: 0 auto 4rem auto;
    width: 20rem;
  `}
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