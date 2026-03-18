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
  dataServices2,
  dataContact,
  dataNewsBlog,
  dataNewsBlog2,
  dataPartners,
  dataPartners2,
  code,
}) => {
  return (
    <main>
      <Slider Slider={dataSlider} />
      <Process Process={dataProcess} />
      <Services Services={dataServices} Services2={dataServices2} />
      <HomeContact Form={dataLang} FormContactData={dataContact} code={code} />
      <BloqNews blogNews={dataNewsBlog} blogNews2={dataNewsBlog2} />
      <Partners partner={dataPartners} partner2={dataPartners2} />
    </main>
  );
};

export default HomePage;
