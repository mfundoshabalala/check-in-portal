/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from "next/link";
import Image from "next/image";

const imageURL = "https://www.citi.org.za/wp-content/uploads/citi-logo.svg";

const BrandLogo: BrandLogoComponent = ({ href, src, alt, height, width }) => {
	return (
		<Link href={href} passHref>
			<a className='w-56 h-16 mb-10'>
				<Image src={imageURL || src} alt={alt} width={width! | 224} height={height! | 64} />
			</a>
		</Link>
	);
};

export default BrandLogo;
