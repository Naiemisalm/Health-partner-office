import { useState } from "react";
import {
  FiActivity,
  FiHeart,
  FiDroplet,
  FiMonitor,
  FiScissors,
  FiPlusSquare,
  FiEye,
  FiSmile,
  FiShield,
} from "react-icons/fi";

import BookingModal from "./BookingModal";

const services = [
  {
    id: 1,
    icon: <FiDroplet size={35} />,
    title: "Blood Tests",
    description: "Complete blood analysis",
  },
  {
    id: 2,
    icon: <FiMonitor size={35} />,
    title: "X-Ray & MRI",
    description: "Advanced imaging",
  },
  {
    id: 3,
    icon: <FiHeart size={35} />,
    title: "ECG / EKG",
    description: "Heart monitoring",
  },
  {
    id: 4,
    icon: <FiActivity size={35} />,
    title: "Ultrasound",
    description: "Diagnostic imaging",
  },
  {
    id: 5,
    icon: <FiScissors size={35} />,
    title: "DNA Testing",
    description: "Genetic analysis",
  },
  {
    id: 6,
    icon: <FiPlusSquare size={35} />,
    title: "Health Check",
    description: "Full body screening",
  },
  {
    id: 7,
    icon: <FiEye size={35} />,
    title: "Eye Care",
    description: "Vision examination",
  },
  {
    id: 8,
    icon: <FiSmile size={35} />,
    title: "Dental Care",
    description: "Professional dental service",
  },
  {
    id: 9,
    icon: <FiShield size={35} />,
    title: "Skin Care",
    description: "Dermatology treatment",
  },
];

const HealthcareServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      {/* Heading */}
      <div className="flex justify-between items-center flex-wrap gap-5 mb-12">

        <div>
          <h2 className="text-4xl font-bold text-slate-800">
            Our Healthcare Services
          </h2>

          <h2 className="text-gray-600 mt-3">
Your health, our commitment. 
          </h2>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-teal-700 text-teal-700 px-6 py-3 rounded-md hover:bg-teal-700 hover:text-white transition"
        >
          {showAll ? "Show Less" : "More Categories"}
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {displayedServices.map((service) => (

          <div
            key={service.id}
            className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-teal-700 mx-auto">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6">
              {service.title}
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              {service.description}
            </p>

            <button
              onClick={() => setSelectedService(service)}
              className="mt-6 bg-teal-700 text-white px-5 py-2 rounded-md hover:bg-teal-800 transition"
            >
              Book Now
            </button>

          </div>

        ))}
      </div>

      {/* Modal */}

      <BookingModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default HealthcareServices;