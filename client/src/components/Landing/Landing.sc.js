import styled from 'styled-components'
import OnTheOffice from '../../icons/OnTheOffice'

export const Container = styled.div`
  background: linear-gradient(45deg, #2f76f7, #2f5af7);
  height: 85vh;
  padding: 8.1rem 0 0 0;
`

export const Grid = styled.div`
  /* border: 1px solid; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-template-rows: calc(85vh - 8.1rem);
`

export const Content = styled.div`
  ${props => props.alignRight && 'align-items: flex-end'};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  color: #fff;
  font-family: ${props => props.theme.headingFont};
  font-size: 4rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
`

export const Text = styled.p`
  color: #fff;
  font-size: 2.5rem;
  margin: 0 0 2.5rem 0;

  span {
    font-weight: 600;
  }
`

export const Image = styled(OnTheOffice)`
  height: 50rem;
  width: 50rem;
`