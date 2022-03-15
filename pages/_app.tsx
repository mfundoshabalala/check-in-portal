// Global styles
import "../styles/globals.css";
//
import Head from "next/head";
import { useEffect, useState } from "react";
// types import
import type { AppProps } from "next/app";
// components import
import BaseLayout from "layout/BaseLayout";
import { supabase } from "utils/supabaseClient";
import updateSupabaseCookie from "utils/updateSupabaseCookie";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	/*
		To keep the auth cookie up to date, we have to listen to changes in the authentication state of Supabase.
		On every change, we have to call the /api/auth endpoint to update the cookie accordingly.
	*/
	const [authenticatedState, setAuthenticatedState] = useState("not-authenticated");
	const router = useRouter();
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
			updateSupabaseCookie(event, session);

			if(event === "SIGNED_IN") {
				setAuthenticatedState("authenticated");
				Router.push("/auth/dashboard");
			}
			if(event === "SIGNED_OUT") setAuthenticatedState("not-authenticated");

			console.log(authenticatedState);
		});

		// checkUser();

		return () => {
			authListener?.unsubscribe();
		};
	},[authenticatedState, router]);

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
