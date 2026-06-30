import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aayushi",
    age: 27,
    city: "New Delhi",
    text: "I have been continuously testing my Thyroid levels and now I feel much better with regular consultations.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Naveen Kumar",
    age: 28,
    city: "Delhi",
    text: "I order medicines online and get fast delivery every time. Very helpful healthcare service.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Hardik Mehta",
    age: 30,
    city: "Ahmedabad",
    text: "My BP is now under control thanks to regular doctor consultation and tracking.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Sakina Rahman",
    age: 26,
    city: "Dhaka",
    text: "Booking appointment was super easy and doctors are very professional.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const get = (i) =>
    testimonials[(i + testimonials.length) % testimonials.length];

  return (
    <section className="max-w-6xl mx-auto py-20 px-5 text-center">

      <h2 className="text-4xl font-bold mb-12">
        User Testimonials
      </h2>

      <div className="flex items-center justify-center gap-6 relative">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="bg-teal-500 text-white w-10 h-10 rounded-full hover:scale-110 transition"
        >
          ❮
        </button>

        {/* LEFT CARD */}
        <div className="hidden md:block w-72 bg-white shadow-md rounded-xl p-5 opacity-40 scale-90 transition-all duration-500">
          <img
            src={get(index - 1).image}
            className="w-14 h-14 rounded-full mx-auto"
          />
          <p className="text-sm mt-3 text-gray-600">
            {get(index - 1).text}
          </p>
        </div>

        {/* CENTER CARD */}
        <div className="w-80 md:w-96 bg-white shadow-2xl rounded-2xl p-6 transform transition-all duration-500 scale-105">
          <img
            src={get(index).image}
            className="w-16 h-16 rounded-full mx-auto mb-3"
          />

          <h3 className="font-bold text-lg">
            {get(index).name}
          </h3>

          <p className="text-gray-500 text-sm">
            {get(index).age} yrs old, {get(index).city}
          </p>

          <div className="text-yellow-400 my-2">★★★★★</div>

          <p className="text-gray-600 text-sm">
            {get(index).text}
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="hidden md:block w-72 bg-white shadow-md rounded-xl p-5 opacity-40 scale-90 transition-all duration-500">
          <img
            src={get(index + 1).image}
            className="w-14 h-14 rounded-full mx-auto"
          />
          <p className="text-sm mt-3 text-gray-600">
            {get(index + 1).text}
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="bg-teal-500 text-white w-10 h-10 rounded-full hover:scale-110 transition"
        >
          ❯
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}