import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SocialSidebar from "./components/SocialSidebar/SocialSidebar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import CompanyProfile from "./pages/About/CompanyProfile"
import OurTeam from "./pages/About/OurTeam"
 import SecurityServices from "./pages/Services/SecurityServices"
import Staffing from "./pages/Services/Staffing"
import SearchRecruitment from "./pages/Services/SearchRecruitment"
import SkillingLearning from "./pages/Services/SkillingLearning"
import ManagedServices from "./pages/Services/managed-services"
import Apprenticeship from "./pages/Services/Apprenticeship"
import Compliance from "./pages/Services/compliance"
// import Security from "./pages/Services/Security"
import Partners from "./pages/Partners/Partners"
import Media from "./pages/Media/Media"
import Contact from "./pages/Contact/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Careers from "./pages/Careers/Careers"
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import "./index.css"
import { Car } from "lucide-react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      {/* <div style={{ position: "sticky", top: 0, zIndex: 1000, paddingBottom: "30px"}}> */}
        <Header />
      
      <ScrollToTop />
      <SocialSidebar />
      {/* Main content should be wrapped in a main tag for better semantics */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/company-profile" element={<CompanyProfile />} />
          <Route path="/about/our-team" element={<OurTeam />} />
           <Route path="/services/SecurityServices" element={<SecurityServices />} />
          <Route path="/services/staffing" element={<Staffing />} />
          <Route path="/services/search-recruitment" element={<SearchRecruitment />} />
          <Route path="/services/skilling-learning" element={<SkillingLearning />} /> 
           <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/apprenticeship" element={<Apprenticeship />} />
          <Route path="/services/compliance" element={<Compliance />} />
        {/* <Route path="/services/security" element={<Security />} />  */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
         
          {/* Add more routes as needed */}
        </Routes>
      </main>
      
      {/* Footer should be at the bottom of the page */}
      <Footer />
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
