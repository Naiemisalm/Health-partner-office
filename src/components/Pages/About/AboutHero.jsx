import { FaUserDoctor } from "react-icons/fa6";
import { FiHeart, FiShield } from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Your Health,
            <span className="text-sky-500"> Our Priority</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We provide trusted healthcare services with modern technology and
            experienced medical professionals to make your healthcare journey
            easier.
          </p>

          <button className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>


        {/* Right Icon Design */}
        <div className="relative flex justify-center">

          <div className="w-[420px] h-[420px] bg-white rounded-full shadow-xl flex items-center justify-center">

            <div className="w-72 h-72 bg-sky-100 rounded-full flex items-center justify-center">

              <FaUserDoctor className="text-sky-500 text-[150px]" />

            </div>

          </div>


          {/* Floating Card 1 */}
          <div className="absolute top-10 right-10 bg-white shadow-lg rounded-2xl p-5 flex items-center gap-3">

            <FiHeart className="text-red-500 text-3xl" />

            <div>
              <h3 className="font-bold text-gray-800">
                Patient Care
              </h3>
              <p className="text-gray-500 text-sm">
                Always with you
              </p>
            </div>

          </div>


          {/* Floating Card 2 */}
          <div className="absolute bottom-10 left-10 bg-white shadow-lg rounded-2xl p-5 flex items-center gap-3">

            <FiShield className="text-sky-500 text-3xl" />

            <div>
              <h3 className="font-bold text-gray-800">
                Trusted
              </h3>
              <p className="text-gray-500 text-sm">
                Secure Healthcare
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;