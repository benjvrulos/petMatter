import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Nosotros />
      <Productos />
      <Footer />
    </>
  );
}

export default App;
