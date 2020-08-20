import { Box, Flex, Text, Button } from '@chakra-ui/core';
import { RiTwitterLine, RiMailLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<Box backgroundColor="black" color="white">
			<Flex textAlign="center" padding="2em" flexDir="column" alignItems="center">
				<Box width="75%" paddingBottom="2em" marginBottom="2em" borderBottom="1px solid white">
					<Text fontSize="2rem" fontWeight="600" marginBottom="0.5em">
						Collaterals Symposium
					</Text>
					<Button
						color="white"
						backgroundColor="#38AAD0"
						_hover={{ backgroundColor: '#5AB9D8' }}
						_active={{ backgroundColor: '#2B93B6' }}
					>
						<a href="http://collateralperfusion.org" target="_blank">
							Register
						</a>
					</Button>
				</Box>

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
