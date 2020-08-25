import { Flex, Box, Divider, Heading, Button, Text } from '@chakra-ui/core';

const RegistrationCard = ({ title, price, description }) => {
	return (
		<Flex
      border="1px solid #EDF2F7"
			flexDir="column"
			padding="1.5em"
			borderRadius="10px"
			flexBasis="33%"
			margin="0 1.5%"
		>
			<Heading as="h3" fontSize="1.6rem" marginBottom="0.8em">
				{title}
			</Heading>

			<Text color="gray.400" marginBottom="0.6em">
				{description}
			</Text>

			<Divider />

			<Text textAlign="center" fontSize="1.8rem" fontWeight="600" marginBottom="0.4em" marginTop="0.4em">
				{price}
			</Text>

			<Button
        color="white"
				backgroundColor="#38AAD0"
				_hover={{ backgroundColor: '#5AB9D8' }}
				_active={{ backgroundColor: '#2B93B6' }}
			>
				Register Now
			</Button>
		</Flex>
	);
};

export default RegistrationCard;
