import Image from "next/image";

interface SVGComponentProps {
	title: string;
}

const SVGComponent: React.FC<SVGComponentProps> = ({ title }) => {
	return (
		<a
			target='_blank'
			rel='noreferrer'
			className='relative w-5 h-5'
			href={`https://www.${title}.com`}
		>
			<Image src={`/images/svg/${title}.svg`} alt={`${title}`} layout='fill' />
		</a>
	);
};

export default SVGComponent;
