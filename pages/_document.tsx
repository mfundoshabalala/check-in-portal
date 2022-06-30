import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render(): JSX.Element {
		return (
			<Html lang='en' className='scroll-smooth'>
				<Head />
				<body className='antialiased leading-normal text-slate-800 background-gradient'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
