import { Box, Input, Flex, Button, Text } from '@chakra-ui/core';
import { useState } from 'react';
import jsonp from 'jsonp';
import queryString from 'query-string';
import { Fade } from 'react-awesome-reveal';

const MailChimpSignup = ({ uri, successMessage, buttonText }) => {
	
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { EMAIL: email };

		jsonp(`${uri}&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
			console.log('submitting');
			if (err) {
				console.log('error');
				setMessage('Please try again later');
			}
			else {
				console.log('success');
				setMessage(successMessage);
			}
		});
	};

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<Flex flexDir={[ 'column', 'row' ]} alignItems="center" justifyContent="center" margin="3em auto">
					{!message ? (
						<React.Fragment>
							<Input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="johndoe@example.com"
							/>
							<Button
								color="white"
								backgroundColor="#829FA8"
								_hover={{ backgroundColor: '#9FB5BC' }}
								_active={{ backgroundColor: '#6F909B' }}
								type="submit"
								width={[ '100%', 'auto' ]}
								margin={[ '1em 0 0 0', '0 0 0 1em' ]}
							>
								{buttonText}
							</Button>
						</React.Fragment>
					) : (
						<Fade triggerOnce direction="left">
							<Text color="white" fontSize="1.2rem" fontWeight="500">
								{message}
							</Text>
						</Fade>
					)}
				</Flex>
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
						readOnly
					/>
				</div>
			</form>
		</Box>
	);
};

export default MailChimpSignup;
