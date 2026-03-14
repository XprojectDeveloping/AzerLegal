import MaxWidth from "../../shared_components/MaxWidth";
import Slider from "../about/sections/Slider";

const HomePage = ({ dataSlider }) => {
  return (
    <main>
      <MaxWidth>
        <Slider dataSliderText={dataSlider} dataSliderImg={dataSlider} />
      </MaxWidth>
    </main>
  );
};

export default HomePage;
