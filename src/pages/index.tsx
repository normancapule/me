import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Human from '../images/icons/human.svg'
import Ruby from '../images/icons/ruby.svg'
import ReactIcon from '../images/icons/react-icon.svg'
import JS from '../images/icons/js.svg'
import HtmlIcon from '../images/icons/html-icon.svg'
import Psql from '../images/icons/psql.svg'
import Heroku from '../images/icons/heroku.svg'
import Docker from '../images/icons/docker.svg'

const Title = tw.div`
  text-lg
  flex
  items-center
  font-secondary
`

const Section = tw.p`
  mt-16
`

const Highlight = tw.span`
  text-accent
`

const Tech = tw.div`
  mt-1
  flex
`

const TechColumn = tw.div`
  flex-initial
  text-base
  mt-4
  mr-12
`

const TechRow = tw.div`
  flex
  flex-row
  items-center
  mb-4
  last:mb-0
`

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title='Home' />
    <Title>
      <p>
        Hello there! I&apos;m <Highlight>Normz</Highlight>
      </p>
      <Human tw='ml-4' />
    </Title>
    <Section>
      I&apos;m a web developer based in Manila with over 8 years of experience.
      <br />
      I&apos;ve worn many hats in different projects: principal engineer, tech
      lead, backend developer, frontend developer and sometimes devops engineer.
    </Section>
    <Section>
      <p>Here are a few technologies I&apos;ve been working with recently:</p>
      <Tech>
        <TechColumn>
          <TechRow>
            <Ruby tw='h-6 w-6 mr-2' />
            <Highlight>Ruby on Rails</Highlight>
          </TechRow>
          <TechRow>
            <ReactIcon tw='h-6 w-6 mr-2' />
            <Highlight>React</Highlight>
          </TechRow>
          <TechRow>
            <JS tw='h-6 w-6 mr-2' />
            <Highlight>Javascript (ES6+)</Highlight>
          </TechRow>
          <TechRow>
            <HtmlIcon tw='h-6 w-6 mr-2' />
            <Highlight>HTML & CSS</Highlight>
          </TechRow>
        </TechColumn>
        <TechColumn>
          <TechRow>
            <Psql tw='h-6 w-6 mr-2' />
            <Highlight>PostgreSQL</Highlight>
          </TechRow>
          <TechRow>
            <Docker tw='h-6 w-6 mr-2' />
            <Highlight>Docker</Highlight>
          </TechRow>
          <TechRow>
            <Heroku tw='h-6 w-6 mr-2' />
            <Highlight>Heroku</Highlight>
          </TechRow>
        </TechColumn>
      </Tech>
    </Section>
  </Layout>
)

export default IndexPage
