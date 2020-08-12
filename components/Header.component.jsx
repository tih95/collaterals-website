import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
	Flex,
	Text,
	Drawer,
	Button,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton
} from '@chakra-ui/core';
import { useMediaQuery } from 'react-responsive';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
	const showDrawer = useMediaQuery({ query: '(max-width: 550px)' });
	const [ scrolled, setScroll ] = useState(false);
	const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

	useEffect(() => {
		const changeColorOnScroll = (e) => {
			let scrolled = window.scrollY;

			if (scrolled > 10) {
				setScroll(true);
			}
			else {
				setScroll(false);
			}
		};
		document.addEventListener('scroll', changeColorOnScroll);

		return () => {
			document.removeEventListener('scroll', changeColorOnScroll);
		};
	});

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			padding="1.6em 2.4em"
			position="fixed"
			width="100%"
			transition="0.3s all"
			color={scrolled ? 'black' : 'white'}
			backgroundColor={scrolled ? '#F2F3EE' : ''}
			as="header"
		>
			<Link href="/">
				<a>
					<Text fontSize="1.3em" fontWeight="700">
						Collaterals 2020
					</Text>
				</a>
			</Link>

			{showDrawer ? (
				<RiMenuLine onClick={() => setIsDrawerOpen(true)} size="24px" />
			) : (
				<Flex alignItems="center">
					<Text fontWeight="500">
						<Link href="/speakers">
							<a>Speakers</a>
						</Link>
					</Text>
					<Text fontWeight="500" marginLeft="2em">
						<Link href="/agenda">
							<a>Agenda</a>
						</Link>
					</Text>
					<Text fontWeight="500" marginLeft="2em">
						<a href="http://www.collateralperfusion.org" target="_blank">
							Register
						</a>
					</Text>
				</Flex>
			)}

			<Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setIsDrawerOpen(false)}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={() => setIsDrawerOpen(false)}>
							Cancel
						</Button>
						<Button color="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default Header;
