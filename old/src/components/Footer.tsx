import React from 'react'
import tw from 'twin.macro'
import Mail from '../images/icons/mail.svg'
import Github from '../images/icons/github.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Twitter from '../images/icons/twitter.svg'
import { useStaticQuery, graphql } from 'gatsby'

const FooterContainer = tw.div`
  border-solid
  border-t
  border-borders-footer
  items-center
  flex
  flex-col
  p-6
  mt-16
`

const ActionRow = tw.div`
  flex
  flex-row
  justify-between
  mt-4
`

const Link = tw.a`
  sm:mx-8
  mx-4
  first:ml-0
  last:mr-0
  flex
  justify-center
`

const Footer = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            links {
              email
              github
              linkedin
              twitter
            }
          }
        }
      }
    `
  )

  return (
    <FooterContainer>
      <p>Let&apos;s connect</p>
      <ActionRow>
        <Link
          href={`mailto:${site.siteMetadata.links.email}`}
          target='_blank'
          rel='noreferrer'
        >
          <Mail tw='h-8 w-8' />
        </Link>
        <Link
          href={site.siteMetadata.links.github}
          target='_blank'
          rel='noreferrer'
        >
          <Github tw='h-8 w-8' />
        </Link>
        <Link
          href={site.siteMetadata.links.linkedin}
          target='_blank'
          rel='noreferrer'
        >
          <Linkedin tw='h-8 w-8' />
        </Link>
        <Link
          href={site.siteMetadata.links.twitter}
          target='_blank'
          rel='noreferrer'
        >
          <Twitter tw='h-8 w-8' />
        </Link>
      </ActionRow>
    </FooterContainer>
  )
}

export default Footer
