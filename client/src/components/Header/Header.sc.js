import styled from 'styled-components'

export const Container = styled.div`
  ${props => !props.isTop && `
    background: #2f5af7;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  `};
  padding: 2rem 0; 
  position: fixed;
  width: 100%;
  transition: all 1s;
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
