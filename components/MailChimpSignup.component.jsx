import { Box, Input, FormLabel, Heading, Button, Text } from '@chakra-ui/core';
import { useState } from 'react';
import jsonp from 'jsonp';
import queryString from 'query-string';

const mailchimp_uri = process.env.MAILCHIMP_URI;

const MailChimpSignup = () => {
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { EMAIL: email };

		jsonp(
			`${mailchimp_uri}&${queryString.stringify(
				formData
			)}`,
			{ param: 'c' },
			(err, data) => {
				if (err) {
					setMessage('Could not sign up. Please try again later');
				}
				else {
					setMessage('Success! Thanks for subscribing.');
				}
			}
		);
	};

	return (
		<Box>
			<Heading color="white" as="h1" fontWeight="500" fontSize="2.4rem" marginBottom="1em">
				Sign up to get alerts and updates on Collaterals!
			</Heading>
			<form onSubmit={handleSubmit}>
				<FormLabel color="white" fontSize="1.2rem" htmlFor="email">
					Email
				</FormLabel>
				<Input
					marginBottom="1.6em"
					placeholder="janedoe@example.com"
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					id="email"
					value={email}
				/>
				{message ? (
					<Text color="white" fontSize="1.2rem" fontWeight="500">
						{message}
					</Text>
				) : (
					<Button variantColor="cyan" type="submit">
						Subscribe
					</Button>
				)}
				<div
					style={{ position: 'absolute', left: '-5000px' }}
					aria-hidden="true"
					aria-label="Please leave the following three fields empty"
				>
					<label htmlFor="b_email">Email: </label>
					<input
						type="email"
						name="b_email"
						tabIndex="-1"
						value=""
						placeholder="youremail@gmail.com"
						id="b_email"
					/>	</div>
			</form>
		</Box>
	);
};

export default MailChimpSignup;
