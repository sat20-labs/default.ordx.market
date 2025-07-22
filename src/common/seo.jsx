import Head from "next/head";
import { useLanguage } from "../components/context/LanguageContext";

const SEO = () => {
  const { locale } = useLanguage();
  return (
    <>
      <Head>
        <title>{locale.index.title}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={locale.index.desc} />
        <meta name="keywords" content={locale.index.keywords} />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
