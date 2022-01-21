import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Medium Clone created using Next.JS and Sanity"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicons/favicon.ico" />
          <link rel="mask-icon" href="/favicons/icon.png" color="#000000" />
          <link rel="manifest" href="/favicons/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
