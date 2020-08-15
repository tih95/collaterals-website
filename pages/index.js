import Head from 'next/head';
import Link from 'next/link';
import { RiFlagLine, RiUser3Line, RiMicLine } from 'react-icons/ri';
import { Box, Heading, Text, Flex, Button, ButtonGroup, Image } from '@chakra-ui/core';
import { Fade } from 'react-awesome-reveal';

import Stat from '../components/Stat.component';
import OrganizerCard from '../components/OrganizerCard.component';

export default function Home() {
	return (
		<Box>
			<Head>
				<title>The 7th International Symposium on Collaterals to the Brain</title>
			</Head>

			<Box
				background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/heroBackground.jpg')`}
				backgroundPosition="center"
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				paddingTop={[ '7rem', '6rem', '8rem', '10rem' ]}
				paddingBottom={[ '4rem', '6rem', '7rem', '7rem' ]}
				width="100%"
			>
				<Flex padding="2rem 3rem" flexDir="column" maxWidth="1100px" margin="0 auto">
					<Fade triggerOnce cascade>
						<Heading color="white" as="h1" fontSize={[ '2.5rem', '2.5rem', '3rem', '3.5rem' ]}>
							The 7th International Symposium On Collaterals To The Brain
						</Heading>
						<Text color="white" fontSize="1.6em" fontWeight="500" marginTop="1em">
							Precision Stroke Medicine – From AI to Designer Devices for Better Outcomes
						</Text>
						<Text color="white" marginTop="1em" fontSize="1.4em" fontWeight="300">
							November 3rd - 5th, 2020 | Los Angeles, CA, USA
						</Text>
						<ButtonGroup marginTop="2em">
							<a target="_blank" href="http://collateralperfusion.org">
								<Button
									color="white"
									backgroundColor="#38AAD0"
									_hover={{ backgroundColor: '#5AB9D8' }}
									_active={{ backgroundColor: '#2B93B6' }}
								>
									Register
								</Button>
							</a>
							<Link href="/agenda">
								<Button
									marginLeft="0.8em"
									color="white"
									backgroundColor="#829FA8"
									_hover={{ backgroundColor: '#9FB5BC' }}
									_active={{ backgroundColor: '#6F909B' }}
								>
									Agenda
								</Button>
							</Link>
						</ButtonGroup>
					</Fade>
				</Flex>
			</Box>

			<Fade direction="up" triggerOnce>
				<Flex
					flexDir={[ 'column', 'row' ]}
					margin="0 auto"
					padding={[ '2em', '4em 2em' ]}
					maxWidth="1100px"
					justifyContent="space-around"
					alignItems="center"
				>
					<Stat icon={<RiFlagLine size="36px" />} label="Countries" number="50+" />
					<Stat icon={<RiUser3Line size="36px" />} label="Speakers" number="75+" />
					<Stat icon={<RiMicLine size="36px" />} label="Sessions" number="25+" />
				</Flex>
			</Fade>

			<Box position="relative" color="white" backgroundColor="#1F3239" padding="6em 2em">
				<Flex
					maxWidth="1100px"
					margin="0 auto"
					flexDir={[ 'column', 'column', 'row' ]}
					justifyContent="space-around"
					alignItems="center"
				>
					<Flex lineHeight={2} width={[ '100%', '100%', '50%' ]} flexDir="column">
						<Fade direction="up" triggerOnce>
							<Heading as="h2" fontWeight="600" marginBottom="1em">
								What is Collaterals?
							</Heading>
							<Text marginBottom="2em" fontSize="18px">
								The 7th International Symposium on Collaterals to the Brain is a unique 2 and a half day
								conference structured around 40-minute sessions devoted to key issues about collateral
								circulation and hemodynamics in acute ischemic stroke around the globe
							</Text>
							<Text fontSize="18px">
								The entire Collaterals Conference will be held in person in Los Angeles, CA as well as
								online hosted by Zoom. You can participate online from anywhere in the world (by day) or
								in person. Register today!
							</Text>
						</Fade>
					</Flex>
					<Image
						maxW="350px"
						maxH="350px"
						minW="100px"
						htmlHeight="auto"
						htmlWidth={[ '100%', '100%', '45%' ]}
						rounded="full"
						marginTop={[ '4em', '' ]}
						src="/assets/brain.jpg"
						alt="brain angiogram"
					/>
				</Flex>
			</Box>

			<Box position="relative" color="black" backgroundColor="#f2f3ee" padding="6em 2em">
				<Flex
					maxWidth="1100px"
					margin="0 auto"
					flexDir={[ 'column', 'column', 'row' ]}
					justifyContent="space-around"
					alignItems="center"
				>
					<Image
						maxWidth={['100%', '100%', '500px']}
						htmlHeight="auto"
						htmlWidth={[ '100%', '100%', '45%', '45%' ]}
						marginBottom={[ '4em', '2em', '0', '0' ]}
						src="/assets/collaterals-conf.jpg"
						alt="collaterals conference"
					/>
					<Flex marginLeft={['0', '0', '3em', '3em']} lineHeight={2} width={[ '100%', '100%', '50%', '50%' ]} flexDir="column">
						<Fade direction="up" triggerOnce>
							<Heading as="h2" fontWeight="600" marginBottom="1em">
								Why attend Collalaterals?
							</Heading>
							<Text marginBottom="2em" fontSize="18px">
								Get a global perspective on today's research on collateral flow and hemodynamics in the
								brain. Listen to presentations from the world's leading experts in stroke and
								hemodynamics.
							</Text>
							<Text fontSize="18px">
								There will be many topics that will be discussed from designer devices, new therapies,
								and AI to ultimately achieve better outcomes.
							</Text>
						</Fade>
					</Flex>
				</Flex>
			</Box>

			<Box padding="4em 2em" backgroundColor="#f2f3ee">
				<Heading as="h2" textAlign="center" marginBottom="1em">
					Conference Organizers
				</Heading>
				<Flex flexDir={[ 'column', 'row' ]} maxW="800px" margin="0 auto" justifyContent="space-around">
					<OrganizerCard
						name="David Liebeskind, M.D."
						location="UCLA"
						imgSrc="/assets/David-Liebeskind.jpg"
					/>
					<OrganizerCard
						name="Ashfaq Shuaib, M.D."
						location="University Of Alberta"
						imgSrc="/assets/Ashfaq_Shuaib.jpg"
					/>
				</Flex>
			</Box>
		</Box>
	);
}
