import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
	{
		id: "1",
		name: "Main",
		content: [
			{
				id: "1",
				name: "Dashboard",
				href: "/bashboard",
				icon: "home",
			},
		],
	},
	{
		id: "2",
		name: "Lists",
		content: [
			{
				id: "2",
				name: "Users",
				href: "/bashboard/users",
				icon: "user-graduate",
			},
			{
				id: "3",
				name: "Cohorts",
				href: "/bashboard/cohorts",
				icon: "circle-nodes",
			},
			{
				id: "4",
				name: "Logs",
				href: "/bashboard/logs",
				icon: "file-text",
			},
		],
	},
	{
		id: "3",
		name: "Useful",
		content: [
			{
				id: "5",
				name: "Statistics",
				href: "/bashboard/reports",
				icon: "chart-pie",
			},
		],
	},
	{
		id: "4",
		name: "User",
		content: [
			{
				id: "6",
				name: "Settings",
				href: "/bashboard/settings",
				icon: "cog",
			},
			{
				id: "7",
				name: "Profile",
				href: "/bashboard/profile",
				icon: "address-card",
			},
			{
				id: "8",
				name: "Logout",
				href: "/bashboard/logout",
				icon: "arrow-right-from-bracket",
			},
		],
	},
];

const Sidebar: React.FunctionComponent = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<span className='w-full h-full outline-none logo'>
					<Image src='/images/citi-logo.svg' alt='...' height={75} width={150} />
				</span>
			</div>
			<hr />
			<nav>
				<ul>
					{navItems.map((item) => {
						return (
							<li key={item.id}>
								<h3>{item.name}</h3>
								<ul className='sublist'>
									{item.content.map((subItem) => (
										<li key={subItem.id} className='sublist-item'>
											<Link href={subItem.href}>
												<a>
													<i className={`fa fa-${subItem.icon} w-6 text-center`}></i>
													<span>{subItem.name}</span>
												</a>
											</Link>
										</li>
									))}
								</ul>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className='flex items-center justify-center h-16 mt-auto border bottom'>
				<div className='colorOption' />
				<div className='colorOption' />
				<div className='colorOption' />
			</div>
		</div>
	);
};

export default Sidebar;
