import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./component/About";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

export const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};
