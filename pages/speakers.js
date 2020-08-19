import { Box, Text, Heading, Grid } from '@chakra-ui/core';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import SpeakerCard from '../components/SpeakerCard.component';
import { client } from '../contentful/contentful';

const Speakers = ({ speakers }) => {
	const [ speakersData, setSpeakersData ] = useState(speakers);
	const [ sortValue, setSortValue ] = useState('');

	useEffect(
		() => {
			console.log('running effect');
		},
		[ sortValue ]
	);

	return (
		<Box>
			<Head>
				<title>Speakers | Collaterals 2020</title>
			</Head>

			<Box
        width="100%"
        minHeight="350px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center center"
				backgroundImage={`linear-gradient(rgba(31, 50, 57, 0.5), rgba(31, 50, 57, 0.5)), url('/assets/speakers-banner.jpg')`}
			>
				<Box padding={[ '150px 2em 50px 2em' ]} maxW="1200px" margin="0 auto">
					<Heading color="white" fontSize={['1.75rem', '2rem', '3rem', '4rem']} fontWeight="500">
						Speakers
					</Heading>
          <Text fontWeight="300" color="white" fontSize="1.2rem">Collaterals 2020</Text>
				</Box>
			</Box>

			<Grid
				margin="0 auto"
				maxWidth="1200px"
				padding="1em"
				gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
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
