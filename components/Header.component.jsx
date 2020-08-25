/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
	Flex,
	Text,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button
} from '@chakra-ui/core';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
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
			padding={[ '1em', '1.4em 2em', '1.6em 2.4em' ]}
			position="fixed"
			width="100%"
			transition="0.3s all"
			color={scrolled ? 'black' : 'white'}
			backgroundColor={scrolled ? '#F2F3EE' : ''}
			as="header"
			zIndex="3"
		>
			<Link href="/">
				<a>
					<Text fontSize="1.3em" fontWeight="700">
						Collaterals 2020
					</Text>
				</a>
			</Link>

			<RiMenuLine
				css={css`@media screen and (min-width: 550px) {display: none;}`}
				onClick={() => setIsDrawerOpen(true)}
				size="24px"
			/>

			<Flex
				css={css`
					display: none;

					@media screen and (min-width: 550px) {
						display: flex;
					}
				`}
				alignItems="center"
			>
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
					<Link href="/faq">
						<a>FAQ</a>
					</Link>
				</Text>
				<Button
					color="white"
					backgroundColor="#38AAD0"
					_hover={{ backgroundColor: '#5AB9D8' }}
					_active={{ backgroundColor: '#2B93B6' }}
					marginLeft="2em"
				>
					<a href="http://www.collateralperfusion.org" target="_blank">
						Register
					</a>
				</Button>
			</Flex>

			<Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setIsDrawerOpen(false)}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<Text>Collaterals 2020</Text>
					</DrawerHeader>
					<DrawerBody>
						<Flex flexDir="column" alignItems="flex-start">
							<Link href="/speakers">
								<Text fontSize="18px" marginBottom="1em">
									Speakers
								</Text>
							</Link>
							<Link href="/agenda">
								<Text fontSize="18px" marginBottom="1em">
									Agenda
								</Text>
							</Link>
							<Link href="/faq">
								<Text fontSize="18px" marginBottom="1em">
									FAQ
								</Text>
							</Link>
							<a href="//collateralperfusion.org" target="_blank">
								<Button
								width="auto"
									color="white"
									fontSize="18px"
									backgroundColor="#38AAD0"
									_hover={{ backgroundColor: '#5AB9D8' }}
									_active={{ backgroundColor: '#2B93B6' }}
								>
									Register
								</Button>
							</a>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default Header;
