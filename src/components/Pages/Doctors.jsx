const doctors = [
  {
    id: 1,
    name: "Mirazul Alom",
    specialty: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    specialty: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "David Lee",
    specialty: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 4,
    name: "James Brown",
    specialty: "Dentist",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    specialty: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 6,
    name: "Emily Davis",
    specialty: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 7,
    name: "Michael Scott",
    specialty: "Pediatrician",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: 8,
    name: "Daniel White",
    specialty: "Surgeon",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Expert Doctors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800">
                {doctor.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {doctor.specialty}
              </p>

              <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}