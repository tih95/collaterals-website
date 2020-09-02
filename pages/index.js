import Head from 'next/head';
import Link from 'next/link';
import { RiFlagLine, RiUser3Line, RiMicLine, RiMailLine } from 'react-icons/ri';
import { Box, Heading, Text, Flex, Button, ButtonGroup, Image, Grid } from '@chakra-ui/core';
import { Fade } from 'react-awesome-reveal';

import Stat from '../components/Stat.component';
import OrganizerCard from '../components/OrganizerCard.component';
import MailChimpSignup from '../components/MailChimpSignup.component';

const endorsements = [
	'endorsements/snis-logo.png',
	'endorsements/svin-logo.png',
	'endorsements/wso-logo.png',
	'endorsements/kss-logo.gif'
];
const sponsors = [ 'sponsors/medtronic-logo.png', 'sponsors/stryker-logo.png' ];
const uri = process.env.MAILCHIMP_SUB_URI;

export default function Home() {
	return (
		<Box>
			<Head>
				<title>The 7th International Symposium on Collaterals to the Brain</title>
			</Head>

			<Box
				background={`linear-gradient(rgba(31, 50, 57, 0.5), rgba(31, 50, 57, 0.5)), url('/assets/heroBackground.jpg')`}
				backgroundPosition="center"
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				paddingTop={[ '7rem', '6rem', '8rem', '10rem' ]}
				paddingBottom={[ '4rem', '6rem', '7rem', '7rem' ]}
				width="100%"
			>
				<Flex padding="2rem 3rem" flexDir="column" maxWidth="1100px" margin="0 auto">
					<Fade triggerOnce duration="1000">
						<Heading color="white" as="h1" fontSize={[ '2.5rem', '2.5rem', '3rem', '3.5rem' ]}>
							The 7th International Symposium On Collaterals To The Brain
						</Heading>
						<Text color="white" fontSize="1.6em" fontWeight="500" marginTop="1em">
							Virtually Normal: Collaterals for Stroke in a Global Pandemic
						</Text>
						<Text color="white" marginTop="1em" fontSize="1.4em" fontWeight="300">
							November 3rd - 5th, 2020 | Los Angeles, CA, USA
						</Text>
						<ButtonGroup marginTop="2em">
							<Link href="/register">
								<a>
									<Button
										color="white"
										backgroundColor="#38AAD0"
										_hover={{ backgroundColor: '#5AB9D8' }}
										_active={{ backgroundColor: '#2B93B6' }}
									>
										Register
									</Button>
								</a>
							</Link>
							<Link href="/agenda">
								<a>
									<Button
										marginLeft="0.8em"
										color="white"
										backgroundColor="#829FA8"
										_hover={{ backgroundColor: '#9FB5BC' }}
										_active={{ backgroundColor: '#6F909B' }}
									>
										Agenda
									</Button>
								</a>
							</Link>
						</ButtonGroup>
					</Fade>
				</Flex>
			</Box>

			<Flex
				flexWrap="wrap"
				margin="0 auto"
				maxWidth="1100px"
				justifyContent="space-between"
				alignItems="center"
				padding={["2em 1em", "3em 1em"]}
			>
					<Stat label="Countries" number="50+" />
					<Stat label="Speakers" number="75+" />
					<Stat label="Sessions" number="25+" />
					<Stat label="Days" number="2" />
			</Flex>

			<Box position="relative" color="white" backgroundColor="#1F3239" padding="4em 2em">
				<Flex
					maxWidth="1100px"
					margin="0 auto"
					flexDir={[ 'column', 'column', 'row' ]}
					justifyContent="space-around"
					alignItems="center"
				>
					<Flex marginRight={[ '0', '0', '3em', '3em' ]} lineHeight={2} width={[ '100%', '100%', '50%' ]} flexDir="column">
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
								In the past, we have held Collaterals both in person and online virtually. Due to
								COVID-19, Collaterals will be held <strong>100% online</strong> (Zoom). You can
								participate online from anywhere in the world. Register today!
							</Text>
						</Fade>
					</Flex>
					<Fade direction="up" triggerOnce>
						<Image
							maxWidth={[ '100%', '100%', '400px' ]}
							htmlHeight="auto"
							htmlWidth={[ '100%', '100%', '45%', '45%' ]}
							marginTop={[ '4em', '2em', '0', '0' ]}
							src="/assets/collaterals-conf2.jpg"
							alt="collaterals conference 2"
						/>
					</Fade>
				</Flex>
			</Box>

			<Box position="relative" color="white" backgroundColor="#1F3239" padding="4em 2em">
				<Flex
					maxWidth="1100px"
					margin="0 auto"
					flexDir={[ 'column', 'column', 'row' ]}
					justifyContent="space-around"
					alignItems="center"
				>
					<Fade triggerOnce direction="up">
						<Image
							maxWidth={[ '100%', '100%', '450px' ]}
							htmlHeight="auto"
							htmlWidth={[ '100%', '100%', '45%', '45%' ]}
							marginBottom={[ '4em', '2em', '0', '0' ]}
							src="/assets/collaterals-conf.jpg"
							alt="collaterals conference"
						/>
					</Fade>

					<Flex
						marginLeft={[ '0', '0', '3em', '3em' ]}
						lineHeight={2}
						width={[ '100%', '100%', '50%', '50%' ]}
						flexDir="column"
					>
						<Fade direction="up" triggerOnce>
							<Heading as="h2" fontWeight="600" marginBottom="1em">
								Why attend Collaterals?
							</Heading>
							<Text marginBottom="2em" fontSize="18px">
								Get a global perspective on today's research on collateral flow and hemodynamics in the
								brain. Listen to presentations from the world's leading experts in stroke and
								hemodynamics.
							</Text>
							<Text fontSize="18px">
								There will be many topics that will be discussed from designer devices, new therapies,
								and how the current circumstances today has affected stroke care around the world.
							</Text>
						</Fade>
					</Flex>
				</Flex>
			</Box>

			<Box padding="4em 2em">
				<Heading color="#555" as="h2" textAlign="center" marginBottom="1em">
					Conference Organizers
				</Heading>
				<Flex flexDir={[ 'column', 'row' ]} maxW="800px" margin="0 auto" justifyContent="space-around">
					<Fade cascade triggerOnce duration="400" direction="up">
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
					</Fade>
				</Flex>
			</Box>

			<Box marginTop="4em">
				<Flex maxW="1000px" margin="0 auto" flexDir="column">
					<Heading color="#555" textAlign="center" as="h2" marginBottom="1em">
						Collaterals Sponsors
					</Heading>

					<Flex flexWrap="wrap" alignItems="center" justifyContent="center" padding="1em">
						{sponsors.map((sponsor) => (
							<Box
								key={sponsor}
								padding="0.6em"
								width={[ '50%', '25%', '25%', '16.67%' ]}
								maxW="300px"
								flex="1 1 auto"
							>
								<Image key={sponsor} src={`/assets/${sponsor}`} />
							</Box>
						))}
					</Flex>
				</Flex>
			</Box>

			<Box>
				<Flex flexDir="column" padding="4em 0" maxW="1000px" margin="0 auto">
					<Heading color="#555" marginBottom="1em" textAlign="center" as="h2">
						Collaterals Endorsements
					</Heading>
					<Flex justifyContent="center" alignItems="center" flexWrap="wrap" padding="1em">
						{endorsements.map((endorsement) => (
							<Box
								key={endorsement}
								padding="0.6em"
								width={[ '50%', '25%', '25%', '16.67%' ]}
								maxW="300px"
								flex="1 1 auto"
							>
								<Image src={`/assets/${endorsement}`} />
							</Box>
						))}
					</Flex>
				</Flex>
			</Box>

			<Box background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,50,57,1) 50%, rgba(21,140,164,1) 100%)">
				<Box maxW="1100px" margin="0 auto" padding="4em 2em">
					<Heading color="white" as="h1" fontWeight="500" fontSize="2.4rem" marginBottom="1em">
						Get the latest on Collaterals.
					</Heading>
					<Box width="100%" margin="1em auto 3em auto">
						<MailChimpSignup
							buttonText="Sign Up"
							successMessage="Success! Thanks for subscribing!"
							uri={uri}
						/>
					</Box>
					<Box marginTop="3em">
						<Heading color="white" as="h1" fontWeight="500" fontSize="2.4rem" marginBottom="1em">
							Have any questions? Get in touch with us.
						</Heading>
						<Flex color="white" alignItems="center">
							<Box as={RiMailLine} fontSize="1.6rem" />
							<Text textDecor="underline" marginLeft="1em" fontSize="1.3rem">
								<a href="mailto:info@collateralperfusion.com">info@collateralperfusion.org</a>
							</Text>
						</Flex>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
