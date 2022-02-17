// Global styles
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

// site layout
import MainSiteLayout from "components/layouts/MainSiteLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<MainSiteLayout>
				<Component {...pageProps} />
			</MainSiteLayout>
		</>
	);
}

export default MyApp;
