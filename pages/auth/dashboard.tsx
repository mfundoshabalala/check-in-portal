// import enforceAuthenticated from "utils/enforceAuthenticated";

// import { supabase } from "utils/supabaseClient";

const Dashboard = () => {
	return <div>Dashboard</div>;
};

export default Dashboard;

// export const getServerSideProps = enforceAuthenticated();
// export async function getServerSideProps({ req }) {
// 	const { user } = await supabase.auth.api.getUserByCookie(req);

// 	if (!user) {
// 		return { props: {}, redirect: { destination: "/auth/login" } };
// 	}

// 	return { props: { user } };
// }
