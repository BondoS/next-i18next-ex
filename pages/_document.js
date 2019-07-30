// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// https://github.com/zeit/next.js/#custom-document

// ./pages/_document.js
import { lngFromReq } from "next-i18next/dist/commonjs/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "../i18n";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let lng = (await ctx.req) === null ? i18n.language : lngFromReq(ctx.req);
    lng = lng.split("-")[1]
      ? lng.split("-")[0] + "-" + lng.split("-")[1].toUpperCase()
      : lng;
    const additionalProps = await {
      isRTL: /ar/.test(lng),
      lng
    };
    return { ...initialProps, ...additionalProps };
  }
  render() {
    const { isRTL, lng } = this.props;
    return (
      <Html lang={lng} dir={isRTL ? "rtl" : "ltr"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
