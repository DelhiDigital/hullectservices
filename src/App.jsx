import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Partners from "./pages/Partners/Partners"
import Media from "./pages/Media/Media"
import Contact from "./pages/Contact/Contact"
import WhatsappButton from "./components/WhatsappButton/WhatsAppButton"
import ScrollToTop from "./components/ScrollToTop"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      {/* Main content should be wrapped in a main tag for better semantics */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/media1" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsappButton />
      {/* Footer should be at the bottom of the page */}
      <Footer />
    </div>
  )
}

export default App
