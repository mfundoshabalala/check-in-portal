import Link from "next/link";

const Footer = ({ AuthFooterLinks }) => {
	return (
		<footer>
			<div className='flex justify-center gap-6 py-8 text-sm'>
				{AuthFooterLinks.map(({ href, title }) => (
					<Link href={href} key={href}>
						<a className='hover:underline hover:text-blue-500'>{title}</a>
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
