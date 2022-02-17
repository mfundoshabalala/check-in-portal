import Link from "next/link";

interface NavItemProps {
	name: string;
	title: string;
	externalUrl?: boolean;
}

const NavItem: React.FC<NavItemProps> = (props) => {
	return (
		<li className='cursor-pointer'>
			<Link href={`/#${props.name}`}>
				<a className='px-2 py-2 block'>{props.title}</a>
			</Link>
		</li>
	);
};

export default NavItem;
