import Footer from "@/app/(components)/layout/Footer";
import Header from "@/app/(components)/layout/Header";
import { fetchData, fetchTranslations } from "@/app/(components)/lib/fetchData";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/lib/toSlug";
import About from "@/app/(components)/pages/about/About";

const getData = async (code) => {
  const header = await fetchData(code, "menu");
  const main = await fetchData(code, "haqqimizda_page");
  const settings = await fetchData(code, "settings");
  const translations = await fetchTranslations(code);
  return { header, main, settings, translations };
};

export async function generateMetadata({ params }) {
  try {
    const { code } = await params;
    const { settings, main, translations } = await getData(code, "settings");
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = `${process.env.NEXT_PUBLIC_PICTURE}`;
    const logoUrl = `${pictureBaseUrl}/${settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeyword = generateKeywordsFromWords(main?.about?.text);
    const dcs = stripHTML(main?.about?.text);

    return {
      title: `${settings?.title} - ${translations?.about_page}`,
      description: `${dcs}`,
      keywords: generatedKeyword,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${translations?.about_page}`,
        description: `${dcs}`,
        keywords: generatedKeyword,
        url: `${baseUrl}/${code}/haqqimizda`,
        siteName: `${baseUrl}/${code}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 100,
            height: 60,
            type: "image/png",
            alt: settings?.title,
          },
        ],
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
export default async function page({ params }) {
  const { code } = await params;
  const { header, main, settings, translations } = await getData(code);
  return (
    <>
      <Header dataHeaderNav={header} code={code} />
      <About />
      <Footer />
    </>
  );
}
