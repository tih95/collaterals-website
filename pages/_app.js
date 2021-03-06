import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Header from '../components/Header.component';
import { customTheme } from '../styles/theme';
import Footer from '../components/Footer.component';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<meta name="description" content="Web site created using create-next-app" />
			</Head>

			<ThemeProvider theme={customTheme}>
				<CSSReset />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyApp;
