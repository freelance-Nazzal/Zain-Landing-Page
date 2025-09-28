import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Promotions from "./components/Promotions";
import CoverageMap from "./components/CoverageMap";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Promotions />
      <CoverageMap />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
