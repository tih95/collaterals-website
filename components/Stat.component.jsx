import { Flex, Box, Text } from '@chakra-ui/core';

const Stat = ({ number, label, icon }) => {
	return (
		<Flex alignItems="center">
      {icon}
			<Box marginLeft="1em">
				<Text fontWeight="500" fontSize="1rem">
					{label}
				</Text>
				<Text fontWeight="700" fontSize="2.2rem">
					{number}
				</Text>
			</Box>
		</Flex>
	);
};

export default Stat;
