import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
