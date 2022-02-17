import Image from "next/image";
import Link from "next/link";

const BackToTopAnchor = () => {
	return (
		<Link href='#home'>
			<a className='fixed bottom-10 right-10 flex flex-col'>
				<Image src='/images/svg/arrow.svg' alt='Back to top' width={35} height={35} className='' />
				<span>
					<small>Back to top</small>
				</span>
			</a>
		</Link>
	);
};

export default BackToTopAnchor;
