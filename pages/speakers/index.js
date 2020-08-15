import { Flex, Box } from '@chakra-ui/core';
import Head from 'next/head';

const Speakers = () => {
  return (
    <Box>
      <Head>
        <title>Speakers | Collaterals 2020</title>
      </Head>
      
      <Box paddingTop="10rem">
hello
      </Box>
    </Box>
  )
}

export const getStaticProps = async (ctx) => {
  try {
    const resp = await client.getEntries({
      content_type: 'speaker'
    })
    return {
      props: {
        speakers: resp.items
      }
    }
  }
  catch(e) {
    console.log(e);
  }
}

export default Speakers;