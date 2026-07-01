import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { MdMedicalServices } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `font-medium transition ${
      isActive ? "text-sky-500" : "text-gray-700 hover:text-sky-500"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="bg-sky-500 p-3 rounded-lg">
            <MdMedicalServices className="text-white text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Health<span className="font-normal">Partner</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/department" className={navLinkStyle}>
            Department
          </NavLink>

          <div className="relative group">
  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-sky-500 transition">
    Blog
    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
  </button>

  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="w-52 bg-white rounded-md shadow-lg border border-gray-100 py-2">
      <NavLink
        to="/blog"
        className="block px-5 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500"
      >
        Blog
      </NavLink>

      <NavLink
        to="/single-blog"
        className="block px-5 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-500"
      >
        Single Blog
      </NavLink>
    </div>
  </div>
</div>
          <NavLink
  to="/about-us"
  className={navLinkStyle}
>
  About Us
</NavLink>

          <NavLink to="/doctors" className={navLinkStyle}>
            Doctors
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* Button */}
        <NavLink
          to="/appointment"
          className="hidden lg:block border border-sky-500 text-sky-500 px-6 py-3 rounded-md hover:bg-sky-500 hover:text-white duration-300"
        >
          Make an Appointment
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col p-5 space-y-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/department" onClick={() => setMenuOpen(false)}>
              Department
            </NavLink>

          <div>
  <button
    onClick={() => setBlogOpen(!blogOpen)}
    className="flex items-center justify-between w-full"
  >
    <span>Blog</span>
    <FaChevronDown
      className={`text-xs transition-transform ${
        blogOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {blogOpen && (
    <div className="ml-4 mt-2 flex flex-col gap-2">
      <NavLink
        to="/blog"
        onClick={() => {
          setMenuOpen(false);
          setBlogOpen(false);
        }}
      >
        Blog
      </NavLink>

      <NavLink
        to="/single-blog"
        onClick={() => {
          setMenuOpen(false);
          setBlogOpen(false);
        }}
      >
        Single Blog
      </NavLink>
    </div>
  )}
</div>

            <NavLink to="/pages" onClick={() => setMenuOpen(false)}>
              Pages
            </NavLink>

            <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>
              Doctors
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>

            <NavLink
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="bg-sky-500 text-white text-center py-3 rounded-md"
            >
              Make an Appointment
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;