import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import qrCode from "../assets/fotter/qr.avif";
import tcap from "../assets/fotter/3one4.avif";
import vh from "../assets/fotter/vh.avif";
import multiply from "../assets/fotter/mu.avif";
import ma from "../assets/fotter/ma.avif";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 md:px-16 lg:px-28 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + QR + Contact */}
        <div className="space-y-4">
          <img src={qrCode} alt="CheQ Logo" className="h-8" />
          <p className="text-sm text-gray-600">
            Smarter way to pay credit card bills
          </p>
          <p className="text-xs text-gray-500">SCAN TO DOWNLOAD APP</p>
          <img src={qrCode} alt="QR Code" className="h-24 w-24" />
          <div className="text-sm text-gray-600 mt-4 leading-relaxed">
            <p className="font-medium">Contact Us</p>
            <p>
              Corporate Office: Building A, Bhive workspace, AKR Tech Park,
              Krishna Reddy Industrial Area, Garvebhavipalya, Bangalore - 560068
            </p>
            <p className="mt-1 text-teal-600">support@cheq.one</p>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-4">Learn More</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Transaction & User Verification</li>
            <li>Google API Disclosure</li>
            <li>Refund & Cancellations</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Investors */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-4">
            Backed by the Best
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tcap}
              alt="3one4 Capital"
              className="h-10 object-contain"
            />
            <img
              src={vh}
              alt="Venture Highway"
              className="h-10 object-contain"
            />
            <img
              src={multiply}
              alt="Multiply Ventures"
              className="h-10 object-contain"
            />
            <img
              src={ma}
              alt="Multiply Ventures"
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Social & QR Right */}
        <div className="space-y-6">
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Stay In Touch</h4>
            <div className="flex gap-4">
              <FaFacebookF className="text-gray-600 hover:text-blue-600 text-xl cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-pink-500 text-xl cursor-pointer" />
              <FaLinkedinIn className="text-gray-600 hover:text-blue-700 text-xl cursor-pointer" />
              <FaXTwitter className="text-gray-600 hover:text-black text-xl cursor-pointer" />
            </div>
          </div>
          <div className="hidden md:block fixed bottom-8 right-8 z-50">
            <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl p-4 flex items-center space-x-4 transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
              <img
                src={qrCode}
                alt="QR Code"
                className="h-20 w-20 object-contain"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  SCAN TO DOWNLOAD
                </p>
                <p className="text-xs text-gray-500">CHEQ NOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t pt-6">
        All copyrights reserved © CheQ Digital Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
