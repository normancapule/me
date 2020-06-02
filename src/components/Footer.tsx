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
`

const ActionRow = tw.div`
  flex
  flex-row
  justify-between
  mt-4
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
      <p>Contact me</p>
      <ActionRow>
        <a href={`mailto:${site.siteMetadata.links.email}`}>
          <Mail tw='mx-4' />
        </a>
        <a
          href={site.siteMetadata.links.github}
          target='_blank'
          rel='noreferrer'
        >
          <Github tw='mx-4' />
        </a>
        <a
          href={site.siteMetadata.links.linkedin}
          target='_blank'
          rel='noreferrer'
        >
          <Linkedin tw='mx-4' />
        </a>
        <a
          href={site.siteMetadata.links.twitter}
          target='_blank'
          rel='noreferrer'
        >
          <Twitter tw='mx-4' />
        </a>
      </ActionRow>
    </FooterContainer>
  )
}

export default Footer
