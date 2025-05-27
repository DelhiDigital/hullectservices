import { FaWhatsapp } from "react-icons/fa"
import "./WhatsAppButton.css"

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "+917042034792"
  const message = "Hello, I'm interested in immigration services."

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Contact us on WhatsApp">
      <FaWhatsapp />
    </button>
  )
}

export default WhatsAppButton
