import { FiUsers, FiCreditCard, FiBriefcase } from "react-icons/fi";

const HealthWellness = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Health & Wellness App For The Entire Ecosystem –
            <br />
            Employers & Insurers
          </h2>

          <div className="w-16 h-1 bg-black mt-6 mb-8"></div>

          <p className="text-gray-600 text-lg leading-8">
            Health Partner is a complete healthcare platform that provides
            digital health services for employees, patients and insurance
            partners. Access consultation, diagnostics, wellness and healthcare
            services in one place.
          </p>

          <button className="mt-6 text-sky-500 font-semibold hover:underline">
            Read More
          </button>


          {/* Bottom Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">

            <div className="bg-sky-50 rounded-xl p-5 flex items-center gap-3">
              <FiUsers className="text-sky-500 text-3xl" />

              <span className="text-sky-600 font-semibold">
                500+ Corporates
              </span>
            </div>


            <div className="bg-sky-50 rounded-xl p-5 flex items-center gap-3">
              <FiCreditCard className="text-sky-500 text-3xl" />

              <span className="text-sky-600 font-semibold">
                Cashless Claims
              </span>
            </div>


            <div className="bg-sky-50 rounded-xl p-5 flex items-center gap-3">
              <FiBriefcase className="text-sky-500 text-3xl" />

              <span className="text-sky-600 font-semibold">
                Health Wallet
              </span>
            </div>

          </div>
        </div>


        {/* Right Side */}
        <div className="relative bg-[#eaf7fb] rounded-3xl h-[520px] overflow-hidden flex items-center justify-center">


          {/* Circle */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-white"></div>


          {/* Services */}
          <div className="absolute left-10 top-10 grid grid-cols-2 gap-5">

            {[
              "Online Consultation",
              "Medicine Delivery",
              "Lab Test & Health Check",
              "X-Ray & Scan",
              "Care Programs",
              "Health Tracker",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow p-3 w-28 text-center"
              >

                <div className="h-14 w-14 bg-sky-100 rounded-lg mx-auto mb-2"></div>

                <p className="text-xs font-semibold text-gray-700">
                  {item}
                </p>

              </div>

            ))}

          </div>



          {/* Phone */}
          <div className="absolute right-10">

            <div className="w-52 h-[420px] bg-white rounded-[40px] border-[8px] border-gray-900 shadow-2xl relative">


              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 w-24 h-6 rounded-b-2xl"></div>


              <div className="h-full flex flex-col justify-center items-center">


                <div className="w-20 h-20 bg-sky-500 rounded-2xl flex items-center justify-center">

                  <span className="text-white text-4xl">
                    ♥
                  </span>

                </div>


                <h3 className="text-2xl font-bold text-sky-600 mt-6">
                  Health
                </h3>

                <p className="text-xl font-semibold text-gray-700">
                  Partner
                </p>


              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};


export default HealthWellness;