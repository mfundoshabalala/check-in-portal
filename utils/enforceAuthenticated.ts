import { GetServerSideProps } from "next";
import { supabase } from "./supabaseClient";

const enforceAuthenticated: (inner?: GetServerSideProps) => GetServerSideProps = (inner) => {
	return async (context) => {
		const { req } = context;
		const { user } = await supabase.auth.api.getUserByCookie(req);

		if (!user) {
			return { props: {}, redirect: { destination: "/auth/login" } };
		}

		if (inner) {
			return inner(context);
		}

		return { props: {} };
	};
};

export default enforceAuthenticated;
