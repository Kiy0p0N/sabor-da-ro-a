import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/sobre" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
