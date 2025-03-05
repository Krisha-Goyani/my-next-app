import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Name from "../components/Name";
import About from "../components/About";
import Languages from "../components/Languages";
import PriceTable from "../components/PriceTable";

const HomePage = () => {
   // Access profiles from context

  return (
    <div className="container-1">
      <Header />
      <div className="px-65">
        <HeroImage />
        <div className="flex justify-between">
          <div className="pl-9">
            <Name />
            <About />
            <Languages />
          </div>
          <div className="w-[434px]">
            <PriceTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
