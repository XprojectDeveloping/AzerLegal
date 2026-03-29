import Footer from "@/app/(components)/layout/Footer";
import Header from "@/app/(components)/layout/Header";
import { fetchData, fetchTranslations } from "@/app/(components)/lib/fetchData";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/lib/toSlug";
import Services from "@/app/(components)/pages/services/Services";
const getData = async (code, page) => {
  const header = await fetchData(code, "menu");
  const main = await fetchData(code, `xidmetler_page?page=${page}`);
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
    const logoUrl = `${main?.service?.image}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeyword = generateKeywordsFromWords(settings?.description);
    const desc = stripHTML(settings?.description);
    return {
      title: `${settings?.title} - ${translations?.xidmetler_page}`,
      description: `${desc}`,
      keywords: generatedKeyword,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${translations?.xidmetler_page}`,
        description: `${desc}`,
        keywords: generatedKeyword,
        url: `${baseUrl}/${code}/xidmetler`,
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
            alt: main?.service?.title,
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
export default async function page({ params, searchParams }) {
  const { code } = await params;
  const { page } = (await searchParams) || "1";
  const { header, main, settings, translations } = await getData(code, page);
  return (
    <>
      <Header dataHeaderNav={header} code={code} />
      <Services
        data={main?.services}
        code={code}
        lang={translations}
        pagination={main?.pagination}
      />
      <Footer data={settings} dataLang={translations} />
    </>
  );
}
