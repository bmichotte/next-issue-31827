import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class NextDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render(): JSX.Element {
        return <Html className="antialiased">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}
export default NextDocument
