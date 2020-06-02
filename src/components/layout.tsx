import React, { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'
import Footer from './Footer'
import Navigation from './Navigation'

const MainContainer = tw.div`
  bg-dark
  flex
  justify-center
`

const LayoutContainer = styled.div`
  ${tw`
    text-base
    grid
    grid-rows-layout
    gap-4
    sm:py-4
    sm:px-8
    text-primary
    max-w-screen-xl
    min-h-screen
    w-full
  `}
`

const ContentContainer = tw.div`
  max-w-screen-lg
`

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <MainContainer>
      <LayoutContainer>
        <Navigation />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </LayoutContainer>
    </MainContainer>
  )
}

export default Layout
