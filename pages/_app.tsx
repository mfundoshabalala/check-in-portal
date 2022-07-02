// Global styles
import "../styles/globals.scss";
// package import
import Head from "next/head";
// types import
import type { ReactElement } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='This is a platform for students to track their attendance.'
				/>
				<meta name='keywords' content='capaciti, attendance, tracker' />
				<meta name='author' content='Capaciti' />
				<link rel='icon' href='/favicon.ico' />
				<title>Capaciti: Candidate Attendance Tracker</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
