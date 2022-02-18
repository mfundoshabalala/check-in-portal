// Global styles
import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
// components
import BaseLayout from "layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		</>
	);
}

export default MyApp;
