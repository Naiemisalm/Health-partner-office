import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto px-6 min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-800">
            Health Care
            <br />
            <span className="font-light">For Whole Family</span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 max-w-lg">
            In healthcare sector, service excellence is the facility of the
            hospital as healthcare service provider to consistently provide
            patient satisfaction.
          </p>

          <Link
            to="/appointment"
            className="inline-block bg-sky-500 hover:bg-sky-600 duration-300 text-white px-8 py-4 rounded-md font-medium"
          >
            Check Our Services
          </Link>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">

          <img
            src="https://preview.colorlib.com/theme/docmed/img/banner/banner2.png"
            alt="Doctor"
            className="w-full max-w-xl"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;