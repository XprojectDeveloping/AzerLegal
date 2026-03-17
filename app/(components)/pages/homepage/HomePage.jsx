import MaxWidth from "../../shared_components/MaxWidth";
import HomeContact from "./sections/HomeContact";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Slider from "./sections/Slider";

const HomePage = ({
  dataLang,
  dataSlider,
  dataProcess,
  dataServices,
  contactData,
  code,
}) => {
  return (
    <main>
      <Slider SliderText={dataSlider} />
      <Process ProcessTitle={dataProcess} />
      <HomeContact Form={dataLang} FormContactData={contactData} code={code} />
      <Services dataServices={dataServices} />
    </main>
  );
};

export default HomePage;
