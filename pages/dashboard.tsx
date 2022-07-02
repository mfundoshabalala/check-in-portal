import React from "react";
// components import
import Sidebar from "components/Sidebar";
import DashboardLayout from "layouts/DashboardLayout";

const Dashboard = () => {
	return (
		<DashboardLayout>
			<Sidebar />
			<section className=''>Content Section</section>
		</DashboardLayout>
	);
};

export default Dashboard;
