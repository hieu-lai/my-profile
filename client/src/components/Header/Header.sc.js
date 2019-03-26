import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0; 
  position: fixed;
  width: 100%;
  transition: all 1s;

  ${props => !props.isTop && `
    background: ${props.theme.headerBackground};
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    padding: 1rem 0;
  `};
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
