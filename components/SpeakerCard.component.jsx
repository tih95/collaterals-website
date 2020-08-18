/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Flex, Image, Text, Box } from '@chakra-ui/core';

const SpeakerCard = ({ fields }) => {
	const { name, country, profile } = fields;
	return (
		<Flex flexDir="column" justifyContent="center" alignItems="center">
			<Box maxHeight="250px" overflow="hidden">
				<Image
					css={css`
						transition: 1.5s all;

            
						&:hover {
							transform: scale(1.1);
						}
          `}
          width="100%"
					src={profile ? `${profile.fields.file.url}` : '../../assets/placeholder.png'}
					alt={`${name} profile`}
				/>
			</Box>

			<Box _hover={{ color: 'red' }} _focus={{ color: 'red' }}>
				<Text fontSize="1.2em" fontWeight="500" _hover={{ backgroundColor: 'green' }}>
					{name}
				</Text>
			</Box>

			<Text>{country}</Text>
		</Flex>
	);
};

export default SpeakerCard;
