import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Pricing from "./components/Pricing";
import Network from "./components/Network";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Network />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
