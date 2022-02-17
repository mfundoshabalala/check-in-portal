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
				<body
					// style={{
					// 	backgroundImage: `url(/images/background-image.png) `,
					// }}
					className='bg-slate-900 text-zinc-200 font-firaSans'
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
