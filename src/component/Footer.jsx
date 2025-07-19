import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 md:px-16 lg:px-28 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + QR + Contact */}
        <div className="space-y-4">
          <img src="/logo.png" alt="CheQ Logo" className="h-8" />
          <p className="text-sm text-gray-600">Smarter way to pay credit card bills</p>
          <p className="text-xs text-gray-500">SCAN TO DOWNLOAD APP</p>
          <img src="/qr.png" alt="QR Code" className="h-24 w-24" />
          <div className="text-sm text-gray-600 mt-4 leading-relaxed">
            <p className="font-medium">Contact Us</p>
            <p>Corporate Office: Building A, Bhive workspace, AKR Tech Park, Krishna Reddy Industrial Area, Garvebhavipalya, Bangalore - 560068</p>
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
          <h4 className="text-gray-800 font-semibold mb-4">Backed by the Best</h4>
          <div className="grid grid-cols-2 gap-4">
            <img src="/tcap.png" alt="3one4 Capital" className="h-10 object-contain" />
            <img src="/vh.png" alt="Venture Highway" className="h-10 object-contain" />
            <img src="/multiply.png" alt="Multiply Ventures" className="h-10 object-contain" />
            <div className="text-xs text-gray-500">+ Marquee Angel Investors</div>
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
          <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col items-center">
            <img src="/qr.png" alt="QR Right" className="h-24 w-24" />
            <p className="mt-2 text-sm font-medium text-gray-700">SCAN TO DOWNLOAD</p>
            <p className="text-xs text-gray-400">CHEQ NOW</p>
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
