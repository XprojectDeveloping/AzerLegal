import Banner from "./sections/Banner";
import OurGoal from "./sections/OurGoal";
import OurValues from "./sections/OurValues";

const About = ({ dataLang, dataBanner, dataOurGoal, dataOurValues }) => {
  return (
    <main>
      <Banner data={dataBanner} lang={dataLang} />
      <OurGoal data={dataOurGoal} />
      <OurValues data={dataOurValues} />
    </main>
  );
};

export default About;
