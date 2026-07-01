import { FiSettings, FiUsers, FiHeart, FiBarChart2 } from "react-icons/fi";

const AboutWork = () => {

  const steps = [
    {
      number: "1",
      title: "Setup your healthcare profile",
      desc: "Configure your healthcare needs, preferences, and access medical services easily.",
      icon: <FiSettings />,
    },
    {
      number: "2",
      title: "Patients get connected",
      desc: "Users can explore doctors, services, and available healthcare solutions.",
      icon: <FiUsers />,
    },
    {
      number: "3",
      title: "Access healthcare services",
      desc: "Consult doctors, book appointments and get quality healthcare support.",
      icon: <FiHeart />,
    },
    {
      number: "4",
      title: "Track health insights",
      desc: "Monitor healthcare activities and get better health management support.",
      icon: <FiBarChart2 />,
    },
  ];


  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          How HealthPartner works for you?
        </h2>


        <div className="bg-white rounded-3xl shadow-sm border p-10">


          <div className="space-y-10">


            {steps.map((step, index) => (

              <div
                key={index}
                className="flex items-center justify-between gap-8"
              >


                {/* Left Content */}
                <div className="flex items-start gap-5">

                  <div className="relative">

                    <div className="w-12 h-12 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>


                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 h-16 w-[2px] bg-sky-200"></div>
                    )}

                  </div>


                  <div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>


                    <p className="text-gray-600 mt-2">
                      {step.desc}
                    </p>

                  </div>


                </div>



                {/* Right Icon */}
                <div className="hidden md:flex w-36 h-28 bg-sky-50 rounded-2xl items-center justify-center">

                  <div className="text-sky-500 text-6xl">
                    {step.icon}
                  </div>

                </div>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};


export default AboutWork;