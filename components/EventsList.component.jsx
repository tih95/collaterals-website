import { Box } from '@chakra-ui/core';

import Event from './Event.component';

const EventsList = ({ events }) => {
  console.log('event', events);
  return (
    <Box marginTop="1.5em" marginBottom="3em">
      {events.map(event => {
        return <Event key={event.sys.id} fields={event.fields} />
      })}
    </Box>
  )
}

export default EventsList;