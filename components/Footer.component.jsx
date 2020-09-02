import { Box, Flex, Text } from '@chakra-ui/core';
import { RiTwitterLine, RiMailLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<Box backgroundColor="black" color="white">
			<Flex textAlign="center" padding="2em" flexDir="column" alignItems="center">
			

				<Text fontWeight="500" marginBottom="0.5em">
					&copy; Neurovascular Imaging Research Core 2020
				</Text>
				<Flex width="60px" margin="0 auto" justifyContent="space-between">
					<a href="https://twitter.com/dliebesk" target="_blank">
						<RiTwitterLine size="22px" />
					</a>
					<a href="mailto:info@collateralperfusion.com">
						<RiMailLine size="22px" />
					</a>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Footer;
