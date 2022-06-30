// Global styles
import "../styles/globals.css";
// package import
import Head from "next/head";
// types import
import type { AppProps } from "next/app";
import BasicLayout from "layouts/BasicLayout";

function MyApp({ Component, pageProps }: AppProps) {
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
			<BasicLayout>
				<Component {...pageProps} />
			</BasicLayout>
		</>
	);
}

export default MyApp;
