import Footer from "@/app/(components)/layout/Footer";
import Header from "@/app/(components)/layout/Header";
import { fetchData, fetchTranslations } from "@/app/(components)/lib/fetchData";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/lib/toSlug";
import Contact from "@/app/(components)/pages/contact/Contact";

const getData = async (code) => {
  const header = await fetchData(code, "menu");
  const main = await fetchData(code, `contact`);
  const settings = await fetchData(code, "settings");
  const translations = await fetchTranslations(code);
  return { header, main, settings, translations };
};

export async function generateMetadata({ params }) {
  try {
    const { code } = await params;
    const { main, settings, translations } = await getData(code);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = `${process.env.NEXT_PUBLIC_PICTURE}`;
    const logoUrl = `${main?.data?.cover}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeyword = generateKeywordsFromWords(
      main?.settings?.keywords,
    );
    const desc = stripHTML(main?.settings?.description);
    return {
      title: `${settings?.title} - ${translations?.contact_page}`,
      description: `${desc}`,
      keywords: generatedKeyword,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${translations?.contact_page}`,
        description: `${desc}`,
        keywords: generatedKeyword,
        url: `${baseUrl}/${code}/elaqe`,
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
            alt: main?.data?.name,
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
      <Contact data={main?.settings} dataLang={translations} />
      <Footer data={settings} dataLang={translations} />
    </>
  );
}
