import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Puneet Chauhan",
    speciality: "Dental Care",
    experience: "9 Years",
    fee: 500,
    location: "Paschim Vihar, New Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Gagan Anand",
    speciality: "General Physician",
    experience: "12 Years",
    fee: 800,
    location: "New Delhi",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Dr. Minoo",
    speciality: "Skin Care",
    experience: "16 Years",
    fee: 1000,
    location: "Rajouri Garden",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "Dr. N.A. Khan",
    speciality: "Sexology",
    experience: "22 Years",
    fee: 500,
    location: "South Extension",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "Dr. Neha Kumari",
    speciality: "ENT",
    experience: "11 Years",
    fee: 500,
    location: "Faridabad",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Dr. Akta Bajaj",
    speciality: "Gynecology",
    experience: "24 Years",
    fee: 700,
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TopDoctors() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-800">
            Top-Rated Doctors
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Discover trusted doctors near you. Book appointments easily and
            get quality healthcare from experienced specialists.
          </p>
        </div>

        <Link to="/doctors">
          <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-lg hover:bg-teal-600 hover:text-white duration-300">
            More Doctors
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 p-5"
          >
            <div className="flex items-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-teal-100"
              />

              <div>
                <h3 className="text-xl font-bold">{doctor.name}</h3>

                <p className="text-teal-600">{doctor.speciality}</p>

                <div className="text-yellow-500">
                  ★★★★★
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-gray-600">
              <p>📍 {doctor.location}</p>

              <p>🩺 Experience : {doctor.experience}</p>

              <p className="font-bold text-black">
                Consult Fee : ₹{doctor.fee}
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                to={`/appointment/${doctor.id}`}
                className="flex-1"
              >
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700">
                  Book Now
                </button>
              </Link>

              <Link
                to={`/doctor/${doctor.id}`}
                className="flex-1"
              >
                <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}