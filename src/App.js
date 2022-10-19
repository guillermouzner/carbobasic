import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/Services/Service";
import NotFound from "./components/NotFound";
import Projects from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Pages from "./components/Pages/Pages";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <DataProvider>
            <div className="App">
                {/* <Layout /> */}
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:niceUrl" element={<Pages />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
