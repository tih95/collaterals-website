import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Header from '../components/Header.component';
import { customTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<ThemeProvider theme={customTheme}>
				<CSSReset />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyApp;
