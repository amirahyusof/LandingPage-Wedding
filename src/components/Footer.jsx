
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaEnvelope as Mail,
  FaPhoneAlt as Phone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[#FFF8E3] text-[#E6A4B4] py-12">
      <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center gap-6">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <div key={idx} className="w-12 h-12 bg-[#E6A4B4] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-6 h-6 text-[#E6A4B4]" />
                <span className="text-gray-700">timelessElegance@studio.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-6 h-6 text-[#E6A4B4]" />
                <span className="text-gray-700">+604-1234567</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600">
             © {new Date().getFullYear()} All Rights Reserved — Elegance Studio
          </div>
        </div>
    </footer>
  );
}

export default Footer;
