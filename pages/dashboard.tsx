import React from "react";
// components import
import Sidebar from "components/Sidebar";
import DashboardLayout from "layouts/DashboardLayout";
import Navbar from "components/Navbar";
import Widget from "components/Widget";

const Dashboard = () => {
	return (
		<DashboardLayout>
			<Sidebar />
			<section className='content'>
				<Navbar />
				<div className='flex justify-around w-full gap-5 p-5'>
					<Widget />
					<Widget />
					<Widget />
					<Widget />
				</div>
			</section>
		</DashboardLayout>
	);
};

export default Dashboard;
