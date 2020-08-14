import { Flex, Text, Image } from '@chakra-ui/core';

const OrganizerCard = ({ name, location, imgSrc }) => {
  return (
    <Flex alignItems="center" flexDir="column" marginBottom={['1em', '']}>
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