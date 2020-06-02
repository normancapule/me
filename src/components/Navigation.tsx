import React from 'react'
import tw from 'twin.macro'

const NavigationContainer = tw.div`
  text-right
`

const Link = tw.a`
  hover:underline
  pr-6
  text-lg
  last:pr-0
`

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Link href='/'>Home</Link>
      {/* <Link href='/'>Blog</Link> */}
    </NavigationContainer>
  )
}

export default Navigation
