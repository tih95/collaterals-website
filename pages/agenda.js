import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/core';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { client } from '../contentful/contentful';
import AgendaContainer from '../components/AgendaContainer.component';
import EventsList from '../components/EventsList.component';

const Agenda = ({ sessions }) => {
  
	return (
		<Box>
			<Head>
				<title>Agenda | Collaterals 2020</title>
			</Head>
      <Box
				width="100%"
				minHeight="350px"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center center"
				backgroundImage={`linear-gradient(rgba(31, 50, 57, 0.5), rgba(31, 50, 57, 0.5)), url('/assets/agenda-banner.jpg')`}
			>
				<Box padding={[ '150px 2em 50px 2em' ]} maxW="1200px" margin="0 auto">
					<Fade triggerOnce direction="up">
						<Heading color="white" fontSize={[ '2.25rem', '2.75rem', '3rem', '4rem' ]} fontWeight="500">
							Agenda
						</Heading>
						<Text fontWeight="300" color="white" fontSize="1.3rem">
							Collaterals 2020
						</Text>
					</Fade>
				</Box>
			</Box>

      <AgendaContainer events={sessions} />
		</Box>
	);
};

export const getStaticProps = async () => {
	try {
		const resp = await client.getEntries({
      content_type: 'event',
      order: 'fields.startTime'
		});

		return {
			props: {
				sessions: resp.items
			}
		};
	} catch (e) {
		console.log(e);
	}
};

export default Agenda;
