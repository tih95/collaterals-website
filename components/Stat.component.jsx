import { Flex, Box, Text } from '@chakra-ui/core';

const Stat = ({ number, label, icon }) => {
	return (
		<Flex alignItems="center" marginBottom={['1em', '0']}>
      {icon}
			<Box marginLeft="1em">
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
