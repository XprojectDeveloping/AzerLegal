import MaxWidth from "../../shared_components/MaxWidth";
import Process from "./sections/Process";
import Slider from "./sections/Slider";

const HomePage = ({ dataSlider, dataProcess }) => {
  return (
    <main>
      <MaxWidth>
        <Slider SliderText={dataSlider} SliderImg={dataSlider} />
        <Process
          ProcessTitle={dataProcess}
          ProcessText={dataProcess}
          ProcessCardImg={dataProcess}
          ProcessCardText={dataProcess}
          ProcessCardTitle={dataProcess}
        />
      </MaxWidth>
    </main>
  );
};

export default HomePage;
