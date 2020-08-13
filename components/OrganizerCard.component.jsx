import { Flex, Text, Image } from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';

const OrganizerCard = ({ name, location, imgSrc }) => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <Flex alignItems="center" flexDir="column" marginBottom={isMobileOrTablet ? '1em' : ''}>
      <Image 
        rounded="full"
        src={imgSrc}
        size="200px"
        alt={`${name} profile`}
        boxShadow="12px 12px 43px #bfbfbf, 
        -12px -12px 43px #ffffff"
        marginBottom="1em"
      />
      <Text fontSize="1.2rem" fontWeight="600">{name}</Text>
      <Text fontSize="1.1rem">{location}</Text>
    </Flex>
  )
}

export default OrganizerCard;