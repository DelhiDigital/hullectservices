import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Partners from "./pages/Partners/Partners"
import Media from "./pages/Media/Media"
import Contact from "./pages/Contact/Contact"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about1" element={<About />} />
          <Route path="/services1" element={<Services />} />
          <Route path="/partners1" element={<Partners />} />
          <Route path="/media1" element={<Media />} />
          <Route path="/contact1" element={<Contact />} />
        </Routes>
      </main>
      <WhatsappButton />
      {/* Footer should be at the bottom of the page */}
      <Footer />
    </div>
  )
}

export default App
