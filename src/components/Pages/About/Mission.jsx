import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

const Mission = () => {
  return (
    <section className="py-16 bg-sky-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Mission & Vision
          </h2>

          <div className="w-16 h-1 bg-sky-500 mx-auto mt-4"></div>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            We are dedicated to providing trusted, accessible, and
            technology-driven healthcare solutions for everyone.
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">


          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">

              <FiTarget className="text-sky-500 text-3xl" />

            </div>


            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>


            <p className="text-gray-600 leading-7">
              Our mission is to make quality healthcare simple and
              accessible by connecting people with trusted medical
              services and professionals.
            </p>

          </div>



          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">

              <FiEye className="text-sky-500 text-3xl" />

            </div>


            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>


            <p className="text-gray-600 leading-7">
              We imagine a future where everyone can receive fast,
              reliable, and personalized healthcare whenever they need.
            </p>

          </div>



          {/* Care */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">

              <FiHeart className="text-sky-500 text-3xl" />

            </div>


            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Patient Care
            </h3>


            <p className="text-gray-600 leading-7">
              We focus on patient comfort, safety, and better health
              outcomes through compassionate care.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Mission;