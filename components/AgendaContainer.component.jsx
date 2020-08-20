import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Divider } from '@chakra-ui/core';
import dayjs from 'dayjs';

import EventsList from './EventsList.component';

const AgendaContainer = ({ events }) => {
	return (
		<Box padding={['2em 1em', '2em', '2em', '2em 3em']}>
			<Tabs variant="unstyled" size="lg">
				<TabList>
					<Tab _selected={{ color: '#38AAD0', borderBottom: '2px' }} _hover={{ color: '#38AAD0' }}>
						Nov 4th
					</Tab>
					<Tab _selected={{ color: '#38AAD0', borderBottom: '2px' }} _hover={{ color: '#38AAD0' }}>
						Nov 5th
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Heading padding="0 1em" as="h2" fontSize={['1.4rem', '1.8rem']} fontWeight="600" marginTop="1em">
							Wednesday, November 4th, 7:30AM - 10:00PM
						</Heading>
						<EventsList
							events={events.filter((event) =>
								dayjs(event.fields.startTime).isSame('2020-11-04', 'date')
							)}
						/>
					</TabPanel>
					<TabPanel>
						<Heading padding="0 1em" as="h2" fontWeight="600" fontSize={['1.4rem', '1.8rem']} marginTop="1em">
							Thursday, November 5th, 7:30AM - 5:00PM
						</Heading>
						<EventsList
							events={events.filter((event) =>
								dayjs(event.fields.startTime).isSame('2020-11-05', 'date')
							)}
						/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default AgendaContainer;
