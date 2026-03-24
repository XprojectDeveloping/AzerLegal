import MaxWidth from "../../shared_components/MaxWidth";
import BloqNews from "./sections/BlogNews";
import HomeContact from "./sections/HomeContact";
import Partners from "./sections/Partners";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Slider from "./sections/Slider";

const HomePage = ({
  dataLang,
  dataSlider,
  dataProcess,
  dataServices,
  dataContact,
  dataNewsBlog,
  dataPartners,
  code,
}) => {
  return (
    <main>
      <Slider data={dataSlider} />
      <Process data={dataProcess} />
      <Services data={dataServices} lang={dataLang} code={code} />
      <HomeContact data={dataContact} lang={dataLang} code={code} />
      <BloqNews data={dataNewsBlog} lang={dataLang} />
      <Partners data={dataPartners} lang={dataLang} />
    </main>
  );
};

export default HomePage;
