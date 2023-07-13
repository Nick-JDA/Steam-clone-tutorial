import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <div className=" bg-[#1b2838]">
      {/* Navbar */}
      <Navbar />
      <div className=" lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        {/* Categories */}
        <Categories />
        {/* Recommended */}
        <Recommended />
        {/* SpecialOffers */}
        <SpecialOffers />
      </div>

      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
