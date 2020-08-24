import { Box, Heading, Text } from '@chakra-ui/core';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
  return (
    <Box>
      <Head>
        <title>FAQ | Collaterals 2020</title>
      </Head>
      
      <Box
				width="100%"
				minHeight="350px"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center center"
				background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,50,57,1) 50%, rgba(21,140,164,1) 100%)"
			>
				<Box padding={[ '150px 2em 50px 2em' ]} maxW="1200px" margin="0 auto">
					<Fade triggerOnce direction="up">
						<Heading color="white" fontSize={[ '2.25rem', '2.75rem', '3rem', '4rem' ]} fontWeight="500">
							Frequently Asked Questions
						</Heading>
						<Text fontWeight="300" color="white" fontSize="1.3rem">
							Collaterals 2020
						</Text>
					</Fade>
				</Box>
			</Box>
    </Box>
  )
}

export default Faq;