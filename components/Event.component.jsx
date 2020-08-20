import { Box, Divider, Flex, Text } from '@chakra-ui/core';
import dayjs from 'dayjs';

import EventModerator from './EventModerator.component';

const Event = ({ fields }) => {
  const { title, startTime, moderators } = fields;

  return (
    <Box>
      <Flex>
        <Flex flex="1" paddingTop="1em" justifyContent="center">
          <Text fontWeight="500" fontSize={['0.9rem', '1rem']}>
            {dayjs(startTime).format('H:mm A')}
          </Text>
        </Flex>

        <Divider orientation="vertical" borderWidth="1px" borderColor="gray.500" />

        <Box flex="5" padding="1em">
          <Text fontWeight="700" fontSize={['1.4rem', '1.6rem']}>{title}</Text>
          <Box>
            <Text fontWeight="500" fontSize="1.1em" marginBottom="0.5em" textDecoration="underline">Session Moderators</Text>
            {moderators.map(moderator => {
              return <EventModerator key={moderator.sys.id} moderator={moderator} />
            })}
          </Box>
          
        </Box>
      </Flex>
      <Divider borderColor="gray.500" />
    </Box>
  )
}

export default Event;