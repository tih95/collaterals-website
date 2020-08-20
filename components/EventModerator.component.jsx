import React from 'react';
import { Avatar, Text, Flex, Box } from '@chakra-ui/core';

const EventModerator = ({ moderator }) => {
  const { name, profile, location } = moderator.fields;
  return (
    <Flex>
      <Avatar 
        size="lg"
        src={profile.fields.file.url}
        name={name}
        marginRight="10px"
      />
      <Box>
        <Text fontWeight="500" fontSize="1.2em">{name}</Text>
        <Text fontWeight="300">{location}</Text>
      </Box>
      
    </Flex>
  )
}

export default EventModerator;