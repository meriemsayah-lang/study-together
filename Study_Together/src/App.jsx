import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ToolsPage from "./pages/ToolsPage";
import SubjectDetails from "./pages/SubjectDetails";
function App() {
  return (
    <>
    <ScrollToTop/>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Subjects" element={<Subjects />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Subjects/:id" element={<SubjectDetails />} />
        <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Tools" element={<ToolsPage/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;