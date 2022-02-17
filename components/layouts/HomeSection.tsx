const HomeSection = () => {
	return (
		<section
			id='home'
			className='px-10 h-[500px] snap-start scroll-my-12 flex justify-center items-center'
		>
			<div className='flex-1 text-lg text-slate-300 font-extralight flex flex-col text-justify max-w-prose'>
				<p className=''>Hi, I&apos;m</p>
				<h1 className='text-6xl font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700'>
					Mfundo Shabalala.
				</h1>
				<h2 className='text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600'>
					I build things for the web.
				</h2>
				<p className='leading-tight mt-2'>
					I&apos;m a fullstack software developer with a passion for building things that make
					people&apos;s lives easier. I&apos;m currently working at
					<a
						className='ml-1 hover:underline'
						href='https://www.citi.org.za'
						target='_blank'
						rel='noopener noreferrer'
					>
						Capaciti
					</a>
					, a non-profit organization based in Cape Town.
				</p>
			</div>
			<div
				className='h-full lg:flex-1 bg-right bg-no-repeat bg-contain'
				// style={{ backgroundImage: `url(/images/svg/programmer-animate-2.svg)` }}
			></div>
		</section>
	);
};

export default HomeSection;
