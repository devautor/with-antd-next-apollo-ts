/**
 * _document is only used for the first page render, for the first document sent to the browser, which means it's not reactive and only works for SSR.
 * Required to change the initial server side rendered document markup
 */
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
