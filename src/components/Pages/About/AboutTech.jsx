import { useState } from "react";
import { FiClock, FiActivity, FiHeart, FiShield, FiClipboard } from "react-icons/fi";

const AboutTech = () => {
  const [showMore, setShowMore] = useState(false);

  const text = `
    We use modern healthcare technology to provide faster, smarter,
    and more convenient medical services. Our goal is to make quality
    healthcare accessible for everyone. We combine advanced digital
    solutions with expert medical professionals to create a better
    healthcare experience for patients. Our platform helps people get
    trusted healthcare support anytime and anywhere.
  `;

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="bg-sky-50 rounded-3xl h-[450px] flex items-center justify-center">
          <div className="w-72 h-72 bg-white rounded-full shadow-xl flex items-center justify-center">
            <FiActivity className="text-sky-500 text-[120px]" />
          </div>
        </div>


        {/* Right */}
        <div>

          <h2 className="text-4xl font-bold text-gray-900">
            Advanced Technology For Better Healthcare
          </h2>


          <div className="w-16 h-1 bg-sky-500 mt-4 mb-6"></div>


          <p className="text-gray-600 text-lg leading-8">

            {showMore ? text : text.slice(0, 150) + "..."}

            <span
              onClick={() => setShowMore(!showMore)}
              className="text-sky-500 font-semibold cursor-pointer hover:underline ml-2"
            >
              {showMore ? "Read Less" : "Read More"}
            </span>

          </p>


        </div>

      </div>

    </section>
  );
};

export default AboutTech;