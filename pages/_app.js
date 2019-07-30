import React from "react";
import App, { Container } from "next/app";
import { appWithTranslation } from "../i18n";
import { lngFromReq } from "next-i18next/dist/commonjs/utils";
import { i18n } from "../i18n";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps, otherLangs, lng;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      lng = await lngFromReq(ctx.req);
      otherLangs = await i18n.options.allLanguages.filter(item => item != lng);
    }

    return { pageProps, otherLangs };
  }
  render() {
    const { Component, pageProps, otherLangs } = this.props;
    return (
      <Container>
        <Component {...pageProps} otherLangs={otherLangs} />
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
