import { Box, Heading, Text } from '@chakra-ui/core';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';
import MailChimpSignup from '../components/MailChimpSignup.component';

const Register = () => {
	const uri = process.env.MAILCHIMP_REGISTER_URI;
	return (
		<Box backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,50,57,1) 50%, rgba(21,140,164,1) 100%)">
			<Head>
				<title>Register | Collaterals 2020</title>
			</Head>

			<Box textAlign="center" maxW="1200px" margin="0 auto" paddingTop="10em" paddingBottom="6em">
				<Fade triggerOnce>
					<Heading
						padding="0 1.2em"
						as="h1"
						color="white"
						fontSize={[ '2.25rem', '3rem', '4rem', '5rem' ]}
						fontWeight="600"
					>
						Register for Collaterals 2020
					</Heading>
					<Heading marginTop="1em" as="h2" fontWeight="400" fontSize="1.4rem" color="white">
						November 4th - 5th, 2020
					</Heading>
				</Fade>

				<Text marginTop="3em" color="white">*Due to COVID-19, registration will be completely free for 2020</Text>
				<Box padding="0 1em" width={[ '100%', '80%', '70%', '60%' ]} margin="5em auto 3em auto">
					<MailChimpSignup
						successMessage="You're in! You will get an email with the view link as we get closer. Thank you for registering!"
						uri={uri}
						buttonText="Register"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Register;
