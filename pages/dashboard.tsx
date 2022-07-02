import React from "react";
// components import
import Sidebar from "components/Sidebar";
import DashboardLayout from "layouts/DashboardLayout";
import Navbar from "components/Navbar";

const Dashboard = () => {
	return (
		<DashboardLayout>
			<Sidebar />
			<section className='content'>
				<Navbar />
				Content Section
			</section>
		</DashboardLayout>
	);
};

export default Dashboard;
