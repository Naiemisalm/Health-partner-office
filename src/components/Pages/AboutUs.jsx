import {
  FiClock,
  FiActivity,
  FiHeart,
  FiShield,
  FiClipboard,
} from "react-icons/fi";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="relative rounded-3xl overflow-hidden bg-[#eef9fd] h-[500px]">
          <img
            src="/images/diagnostics.jpg"
            alt="Diagnostics"
            className="w-full h-full object-cover"
          />

          {/* Phone Mockup */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded-[35px] shadow-2xl w-[230px] h-[420px] flex flex-col justify-center items-center">
            <h3 className="text-gray-500 text-2xl font-medium">
              Measuring
            </h3>

            <h2 className="text-5xl font-bold text-gray-700 mt-2">
              76%
            </h2>

            <div className="relative mt-10">
              <div className="w-36 h-36 rounded-full border-[10px] border-red-500 border-t-transparent rotate-45"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <FiHeart className="text-white text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            With State Of The Art Tech
          </h2>

          <div className="w-16 h-1 bg-black mt-4 mb-8"></div>

          <p className="text-gray-600 text-lg leading-8">
            We invest deeply in technology advancement to be able to serve
            patients and health-conscious consumers across their diverse
            needs. Several patented technology components in the platform.
          </p>

          <button className="mt-6 text-sky-500 font-semibold hover:underline">
            Read More
          </button>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {/* Card 1 */}
            <div className="bg-sky-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">
                At home Diagnostics in
              </h3>

              <div className="flex items-center gap-3">
                <FiClock className="text-sky-500 text-3xl" />
                <span className="text-3xl font-bold text-sky-500">
                  60 mins
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-sky-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">
                Free Health Trackers
              </h3>

              <div className="flex items-center gap-5 text-sky-500 text-3xl">
                <FiActivity />
                <FiClipboard />
                <FiShield />
                <FiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



import AboutHero from "../components/AboutHero";
import Team from "../components/Team";
import Services from "../components/Services";
import ContactInfo from "../components/ContactInfo";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Services />
      <Team />
      <ContactInfo />
    </div>
  );
};

export default About;