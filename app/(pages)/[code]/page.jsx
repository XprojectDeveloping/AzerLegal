import Header from "@/app/(components)/layout/Header";
import Footer from "@/app/(components)/layout/Footer";
import HomePage from "@/app/(components)/pages/homepage/HomePage";
import { fetchData, fetchTranslations } from "@/app/(components)/lib/fetchData";
import { generateKeywordsFromWords } from "@/app/(components)/lib/toSlug";

const getData = async (code) => {
  const header = await fetchData(code, "menu");
  const main = await fetchData(code, "main_page");
  const settings = await fetchData(code, "settings");
  const translations = await fetchTranslations(code);
  return { header, main, settings, translations };
};
export async function generateMetadata({ params }) {
  try {
    const { code } = await params;
    const { settings } = await getData(code, "settings");
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = `${process.env.NEXT_PUBLIC_PICTURE}`;
    const logoUrl = `${pictureBaseUrl}/${settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeyword = generateKeywordsFromWords(settings?.description);

    return {
      title: `${settings?.title}`,
      description: `${settings.description}`,
      keywords: generatedKeyword,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title}`,
        description: `${settings.description}`,
        keywords: generatedKeyword,
        url: `${baseUrl}/${code}`,
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
      <HomePage
        dataSlider={main?.slider}
        dataProcess={main?.process}
        dataServices={main?.services}
        dataLang={translations}
        dataContact={main?.services2}
        dataNewsBlog={main?.blogs}
        dataPartners={main?.partners}
        code={code}
      />
      <Footer data={settings} dataLang={translations} />
    </>
  );
}
