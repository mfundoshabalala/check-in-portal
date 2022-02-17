import NavItem from "./shared/NavItem";

const Header = () => {
	return (
		<header className='flex flex-row px-8 items-center h-20 shadow shadow-teal-700'>
			<div className='flex items-center text-5xl font-black'>
				<a className='tracking-tighter'>M</a>
			</div>
			<nav className='flex-1 flex justify-end gap-8 items-end'>
				<ul className='flex justify-end gap-4  list-inside font-extralight'>
					<NavItem name='about' title='About Me' />
					<NavItem name='projects' title='My Work' />
					<NavItem name='contact' title='Contact Me' />
					<NavItem externalUrl name='blog' title='Blog' />
				</ul>
				<a
					href='https://www.google.com'
					target='_blank'
					type='button'
					className='border-2 active:shadow-sm shadow shadow-teal-800 border-teal-700 px-6 py-2 rounded cursor-pointer'
					rel='noreferrer'
				>
					Resume
				</a>
			</nav>
		</header>
	);
};

export default Header;
