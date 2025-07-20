import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./component/About";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const App = () => {
  const urlPath = useLocation();
  const path = urlPath.pathname === "/";

  return (
    <>
      {path && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};
