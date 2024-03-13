import { FaBeer } from "react-icons/fa";
import { Route, Routes, route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./app.css";
import OurStore from "./pages/OurStore";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<OurStore />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default App;
