import Head from "next/head";

interface MetaTagProps {
  pageTitle: string;
  pageDescription: string;
  socialTitle: string;
  socialDescription: string;
  socialImage: string;
}

function MetaTags(props: MetaTagProps) {
  const {
    pageTitle,
    pageDescription,
    socialTitle,
    socialDescription,
    socialImage,
  } = props;

  return (
    <Head data-react-helmet="true">
      <title>{pageTitle}</title>
      <meta
        id="meta-description"
        name="description"
        content={pageDescription}
      />

      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content="https://politicaparatodos.pt/" />
      <meta property="og:type" content="website" />

      <meta id="twitter-title" property="twitter:title" content={socialTitle} />
      <meta
        id="twitter-description"
        property="twitter:description"
        content={socialDescription}
      />
      <meta id="twitter-image" property="twitter:image" content={socialImage} />
      <meta
        id="twitter-url"
        property="twitter:url"
        content="https://politicaparatodos.pt/"
      />
      <meta
        id="twitter-card"
        property="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
}

export default MetaTags;
