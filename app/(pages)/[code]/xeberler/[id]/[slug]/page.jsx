import Footer from "@/app/(components)/layout/Footer";
import Header from "@/app/(components)/layout/Header";
import { fetchData, fetchTranslations } from "@/app/(components)/lib/fetchData";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/lib/toSlug";
import NewsSingle from "@/app/(components)/pages/news/NewsSingle";

const getData = async (code, id, slug) => {
  const header = await fetchData(code, "menu");
  const main = await fetchData(code, `news_page/${id}/${slug}`);
  const settings = await fetchData(code, "settings");
  const translations = await fetchTranslations(code);
  return { header, main, settings, translations };
};
export async function generateMetadata({ params }) {
  try {
    const { code, id, slug } = await params;
    const { main, settings, translations } = await getData(code, id, slug);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = `${process.env.NEXT_PUBLIC_PICTURE}`;
    const logoUrl = `${main?.data?.cover}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeyword = generateKeywordsFromWords(
      translations?.blog_page_alt_text,
    );
    const desc = stripHTML(translations?.blog_page_alt_text);
    return {
      title: `${settings?.title} - ${slug}`,
      description: `${desc}`,
      keywords: generatedKeyword,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${slug}`,
        description: `${desc}`,
        keywords: generatedKeyword,
        url: `${baseUrl}/${code}/xeberler/${id}/${slug}`,
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
  const { code, id, slug } = await params;
  const { header, main, settings, translations } = await getData(
    code,
    id,
    slug,
  );
  return (
    <>
      <Header dataHeaderNav={header} code={code} />
      <NewsSingle />
      <Footer data={settings} dataLang={translations} />
    </>
  );
}
