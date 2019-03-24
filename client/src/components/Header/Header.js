import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from './Header.sc'
import Brand from '../Brand/Brand'
import { ContentContainer } from '../../styles/Containers.sc'
import Menu from '../Menu/Menu'

const Header = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    if (window.scrollY === 0) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    })
  })

  return (
    <Container isTop={isTop}>
      <ContentContainer>
        <Wrapper>
          <Brand />
          <MemoComponent />
        </Wrapper>
      </ContentContainer>
    </Container>
  )
}

const MemoComponent = React.memo(() => (
  <Menu />
))

export default Header