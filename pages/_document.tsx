import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render(): JSX.Element {
		return (
			<Html lang='en' className='scroll-smooth'>
				<Head>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
						integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
						crossOrigin='anonymous'
						referrerPolicy='no-referrer'
					/>
				</Head>
				<body className='antialiased leading-normal text-slate-800 background-gradient'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
