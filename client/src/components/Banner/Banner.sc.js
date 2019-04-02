import styled from 'styled-components'
import { Button } from '../Button/Button.sc'
import { media } from '../../styles/MediaQueries'

export const Container = styled.div`
  background: ${props => props.theme.bannerBackground};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;

  ${media.desktop`
    padding: 6rem;
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.small ? '2rem' : '2.5rem'};
  font-weight: 500; 
  margin: ${props => props.small ? '2rem 0' : '0'};
  text-align: center;

  ${media.desktop`
    font-size: ${props => props.small ? '2rem' : '3.5rem'};
  `}
`

export const Text = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin: 2rem 0;
  text-align: center;

  ${media.desktop`
    font-size: 1.8rem;
  `}
`

export const Companies = styled.div`
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 2rem auto;
  width: 80%;

  ${media.desktop`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const Image = styled.img`
  ${props => !props.small && 'margin: 0 auto'};
  width: ${props => props.small ? '3rem' : '13rem'};

  ${media.desktop`
    height: ${props => props.small ? '4rem' : '13rem'};
    width: unset;
  `}
`

export const Equal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Name = styled.h2`
  color: #fff;
  font-family: 'Montserrat';
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 0 1rem;

  ${media.desktop`
    font-size: 3.5rem;
  `}
`

export const ModButton = styled(Button)`
  margin: 0 auto;
`