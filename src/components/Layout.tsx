import React, { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'
import Footer from './Footer'
// import Navigation from './Navigation'

const MainContainer = tw.div`
  bg-dark
  flex
  justify-center
`

const LayoutContainer = styled.div`
  ${tw`
    text-base
    flex
    flex-col
    gap-4
    py-4
    px-8
    justify-center
    text-primary
    font-primary
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
        {/* <Navigation /> */}
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </LayoutContainer>
    </MainContainer>
  )
}

export default Layout
