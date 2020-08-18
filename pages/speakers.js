import { Box, Text, Heading, Grid } from '@chakra-ui/core';
import { useState } from 'react';
import Head from 'next/head';

import SpeakerCard from '../components/SpeakerCard.component';
import { client } from '../contentful/contentful';

const Speakers = ({ speakers }) => {
	const [ speakersData, setSpeakersData ] = useState(speakers);

	return (
		<Box>
			<Head>
				<title>Speakers | Collaterals 2020</title>
			</Head>

			<Box backgroundColor="#1F3239">
				<Box padding={[ '100px 2em 50px 2em' ]} maxW="1400px" margin="0 auto">
					<Heading color="white" fontSize="2.5rem" fontWeight="500">
						Speakers
					</Heading>
				</Box>
			</Box>

			<Grid
				margin="0 auto"
				maxWidth="1200px"
				padding="1em"
				gridTemplateColumns="repeat(auto-fit, minmax(175px, 1fr))"
				gridGap="1em"
				alignContent="center"
			>
				{speakersData.map((speaker) => {
					return <SpeakerCard key={speaker.sys.id} fields={speaker.fields} />;
				})}
			</Grid>
		</Box>
	);
};

export const getStaticProps = async () => {
	try {
		const resp = await client.getEntries({
			content_type: 'moderator'
		});

		return {
			props: {
				speakers: resp.items
			}
		};
	} catch (e) {
		console.log(e);
	}
};

export default Speakers;
