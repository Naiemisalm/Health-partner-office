import { FaAmbulance, FaUserMd, FaHeartbeat, FaNotesMedical } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaAmbulance />,
      title: "Emergency Care",
      desc: "24/7 emergency medical support for critical patients.",
    },
    {
      icon: <FaUserMd />,
      title: "Expert Doctors",
      desc: "Highly qualified and experienced medical professionals.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      desc: "Advanced heart treatment and monitoring services.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Medical Checkup",
      desc: "Regular health checkups for better prevention.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-500 mt-3">
            High quality healthcare services for you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-[#f7fbff] rounded-lg text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-sky-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;