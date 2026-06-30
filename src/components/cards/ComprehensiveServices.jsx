import {
  FiActivity,
  FiUsers,
  FiShield,
  FiClipboard,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    icon: <FiActivity size={34} />,
    title: "24/7 Availability",
    description:
      "Book appointments anytime, anywhere with our round-the-clock clock service",
  },
  {
    id: 2,
    icon: <FiUsers size={34} />,
    title: "Verified Doctors",
    description:
      "All our doctors are thoroughly verified and certified professionals",
  },
  {
    id: 3,
    icon: <FiShield size={34} />,
    title: "Secure & Private",
    description:
      "Your medical information is protected with bank-level security",
  },
  {
    id: 4,
    icon: <FiClipboard size={34} />,
    title: "Easy Booking",
    description:
      "Simple and intuitive booking process in just a few clicks",
  },
];

const ComprehensiveServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      {/* Heading */}
      <div className="max-w-2xl mb-14">
        <h2 className="text-4xl font-bold text-slate-800">
          Your Trusted Healthcare Partner
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Health Partner is your trusted healthcare companion, offering online doctor consultations, easy appointment booking, preventive care, and continuous health support. We make quality healthcare simple, secure, and accessible for you and your family—anytime, anywhere.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-slate-800">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-500 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveServices;