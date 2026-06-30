import { Link, useNavigate } from "react-router-dom";

export default function TalkBanner() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center space-y-6">

          <p className="text-sky-600 font-semibold">
            Employee Healthcare Solution
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Ready for tailor-made <br />
            <span className="text-sky-600">
              Healthcare Support?
            </span>
          </h1>

          <p className="text-gray-500">
            Connect with top doctors, book appointments instantly and manage
            your healthcare in one place.
          </p>

          <div className="flex gap-4">

            <Link to="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Talk to us →
              </button>
            </Link>

            <button
              onClick={() => navigate("/contact")}
              className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Contact
            </button>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE (LIKE YOUR PICTURE STYLE) */}
        <div className="relative bg-sky-50 flex items-center justify-center">

          {/* background circle */}
          <div className="absolute w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-50"></div>

          {/* doctor image */}
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f29a?auto=format&fit=crop&w=800&q=80"
            className="relative w-[320px] md:w-[380px] object-cover"
            alt="doctor"
          />

        </div>

      </div>

    </section>
  );
}