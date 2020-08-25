import { Box, Heading, Text } from '@chakra-ui/core';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';

import FaqText from '../components/FaqText.component';

const Faq = ({ faqs }) => {
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

      <Box maxW="1200px" margin="0 auto" marginTop="2em" padding="0 2em">
        {faqs.map(faq => <FaqText faq={faq} key={faq.id} />)}
      </Box>
    </Box>
  )
}

export const getStaticProps = () => {
  const faqs = [
    {
      id: 1,
      question: 'How do I get to the venue from LAX?',
      answer: 'Take the San Diego Freeway (I-405) North and exit at Wilshire Boulevard East. Turn right onto Wilshire Boulevard and proceed a half mile to Westwood Boulevard. Turn left and the UCLA Luskin Conference Center, a premiere Los Angeles meeting venue and hotel, is located one mile ahead at end of the turnaround.'
    },
    {
      id: 2,
      question: 'Can I get certificate of attendance?',
      answer: 'Yes. Certificates of attendance can be provided upon request.'
    },
    {
      id: 3,
      question: 'Can online registrants participate in all sessions from around the world?',
      answer: 'Yes. All of the region/country specific sessions are coordinated to the local time zones at each location.'
    },
    {
      id: 4,
      question: 'Documentation for visas',
      answer: 'Documentation for visa requirements can be provided after you have been registered for the meeting. Please contact us.'
    },
    {
      id: 5,
      question: 'Is there CME credit for attending?',
      answer: 'Unfortunately, no, there is not.'
    },
    {
      id: 6, 
      question: 'Will the videos be available after the conference?',
      answer: 'Yes, those who registered will be able to download the entire conference.'
    }
  ];

  return {
    props: {
      faqs
    }
  }
}

export default Faq;