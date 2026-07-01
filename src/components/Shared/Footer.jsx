import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1e3c] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Health Partner</h2>
          <p className="text-gray-300 leading-7">
            We provide high quality healthcare services with expert doctors
            and modern facilities for your better health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-sky-400">Home</Link></li>
            <li><Link to="/department" className="hover:text-sky-400">Department</Link></li>
            <li><Link to="/blog" className="hover:text-sky-400">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Emergency Care</li>
            <li>Cardiology</li>
            <li>Dental Care</li>
            <li>Neurology</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-sky-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © {new Date().getFullYear()} Docmed. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;