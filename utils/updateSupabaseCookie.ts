import { AuthChangeEvent, Session } from "@supabase/supabase-js";

const updateSupabaseCookie = async (event: AuthChangeEvent, session: Session | null) => {
	try {
		await fetch("/api/auth", {
			method: "POST",
			headers: new Headers({ "Content-Type": "application/json" }),
			credentials: "same-origin",
			body: JSON.stringify({ event, session }),
		}).then((res) => {
			if (res.status !== 200) {
				console.error(`Error updating Supabase cookie: ${res.status}`);
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export default updateSupabaseCookie;
