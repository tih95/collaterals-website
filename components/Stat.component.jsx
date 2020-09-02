import { Flex, Box, Text } from '@chakra-ui/core';

const Stat = ({ number, label }) => {
	return (
		<Flex
			width={[ '50%', '25%', '25%', '16.67%' ]}
			maxW="300px"
			flex="1 1 auto"
			justifyContent="center"
			padding="1em"
		>
			<Box>
				<Text fontWeight="500" fontSize="1.3rem">
					{label}
				</Text>
				<Text fontWeight="700" fontSize="2.5rem">
					{number}
				</Text>
			</Box>
		</Flex>
	);
};

export default Stat;
