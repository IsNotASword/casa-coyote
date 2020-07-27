import React from 'react'
import { Divider, Flex, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Article from '../components/article'
import Section from '../components/section'
import { H1, H4 } from '../components/globals'
import FeatureList from '../components/featureList'
import EmbedVideo from '../components/embedVideo'

import Carousel from '../components/carousel'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Article>
        <Section textAlign="center">
          <H4 marginBottom={2}>WELCOME TO CASA COYOTE</H4>
          <H1>Eco-Hotel in Tulum, México</H1>
          <Text fontWeight="light" maxWidth="600px" marginX="auto" marginTop={4} fontSize="lg">
            Stay at Casa Coyote, an amazing experience that will free your mind & touch your soul.
            Very cozy rooms, 100% ECO PRIVATE SUITES, private terrace, fresh and quiet areas,
            located at the beach side (3 min walk).
          </Text>
          <Divider maxWidth="600px" marginX="auto" marginY={8} />
          <FeatureList />
        </Section>

        <Section>
          <EmbedVideo
            height={{ base: '300px', sm: '350px', md: '450px', lg: '550px', xl: '650px' }}
            url="https://youtu.be/FwB5P5XMymQ"
          />
        </Section>

        <Section>
          <Flex height="500px">
            <Box flexShrink={0} flexBasis="50%" padding={10}>
              <H4 marginBottom={2}>WELCOME TO CASA COYOTE</H4>
              <H1>Eco-Hotel in Tulum, México</H1>
              <Text fontWeight="light" marginTop={4} fontSize="lg">
                Stay at Casa Coyote, an amazing experience that will free your mind & touch your
                soul. Very cozy rooms, 100% ECO PRIVATE SUITES, private terrace, fresh and quiet
                areas, located at the beach side (3 min walk).
              </Text>
            </Box>
            <Carousel />
          </Flex>
        </Section>
      </Article>
    </Layout>
  )
}

export default IndexPage
