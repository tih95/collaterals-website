import Head from 'next/head';
import Link from 'next/link';
import { RiFlagLine, RiUser3Line, RiMicLine } from 'react-icons/ri';
import { Box, Heading, Text, Flex, Button, ButtonGroup, Divider, Image } from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';

import Stat from '../components/Stat.component';

export default function Home() {
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 550px)' });

	return (
		<Box>
			<Head>
				<title>The 7th International Symposium on Collaterals to the Brain</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box
				background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/heroBackground.jpg')`}
				backgroundPosition="center"
				backgroundSize="cover"
				backgroundAttachment="fixed"
				backgroundRepeat="no-repeat"
				paddingTop={[ '6rem', '8rem', '10rem' ]}
				paddingBottom={[ '6rem', '7rem', '8rem' ]}
				width="100%"
			>
				<Flex padding="2rem 3rem" flexDir="column" maxWidth="1100px" margin="0 auto">
					<Heading color="white" as="h1" fontSize={[ '2rem', '3rem', '3.5rem' ]}>
						The 7th International Symposium On Collaterals To The Brain
					</Heading>
					<Text color="white" fontSize="1.6em" fontWeight="500" marginTop="1em">
						Precision Stroke Medicine – From AI to Designer Devices for Better Outcomes
					</Text>
					<Text color="white" marginTop="1em" fontSize="1.4em" fontWeight="300">
						November 3rd - 5th, 2020 | Los Angeles, CA, USA
					</Text>
					<ButtonGroup marginTop="2em">
						<Button color="white" backgroundColor="#38AAD0">
							Register
						</Button>
						<Button color="white" backgroundColor="#829FA8">
							Agenda
						</Button>
					</ButtonGroup>
				</Flex>
			</Box>

			<Flex
				flexDir={isMobileOrTablet ? 'column' : 'row'}
				margin="0 auto"
				padding="4em 2em"
				maxWidth="1100px"
				justifyContent="space-around"
				alignItems={isMobileOrTablet ? 'center' : ''}
			>
				<Stat icon={<RiFlagLine size="36px" />} label="Countries" number="50+" />
				<Divider borderColor="gray.300" orientation={isMobileOrTablet ? 'horizontal' : 'vertical'} />
				<Stat icon={<RiUser3Line size="36px" />} label="Speakers" number="75+" />
				<Divider borderColor="gray.300" orientation={isMobileOrTablet ? 'horizontal' : 'vertical'} />
				<Stat icon={<RiMicLine size="36px" />} label="Sessions" number="25" />
			</Flex>

			<Box position="relative" color="white" backgroundColor="#1F3239" padding="4em 2em">
				<Box maxWidth="1100px" margin="0 auto">
					<Flex>
						<Flex flex="0 1 1" width="60%" flexDir="column">
							<Heading as="h2" fontWeight="600" marginBottom="1em">
								What is Collaterals?
							</Heading>
							<Text marginBottom="2em">
								The 7th International Symposium on Collaterals to the Brain is a unique 2 and a half day
								conference structured around 40-minute sessions devoted to key issues about collateral
								circulation and hemodynamics in acute ischemic stroke around the globe
							</Text>
							<Text>
								The entire Collaterals Conference will be held in person in Los Angeles, CA as well as
								online hosted by Zoom. You can participate online from anywhere in the world (by day) or
								in person. Register today!
							</Text>
						</Flex>
						<Flex justifyContent="center" flex="0 1 1" width="40%">
							<Image
								size="300px"
								objectFit="cover"
								rounded="full"
								src="/assets/brain.jpg"
								alt="brain angiogram"
							/>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
