import { FaTimes } from "react-icons/fa";

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-[zoom_.3s_ease]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 rounded-full bg-white p-2 shadow hover:bg-red-500 hover:text-white duration-300"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden md:flex items-center justify-center bg-sky-500 p-10">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700"
              alt="Doctor"
              className="h-[500px] rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right Side */}
          <div className="p-10">
            <h2 className="text-4xl font-bold text-sky-500">
              Make an Appointment
            </h2>

            <p className="mt-2 text-gray-500">
              Book your appointment with our specialist doctor.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="rounded-lg border p-3 outline-none focus:border-sky-500"
                />

                <input
                  type="time"
                  className="rounded-lg border p-3 outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="rounded-lg border p-3">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Dental</option>
                </select>

                <select className="rounded-lg border p-3">
                  <option>Select Doctor</option>
                  <option>Dr. John</option>
                  <option>Dr. Sarah</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border p-3 outline-none focus:border-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3 outline-none focus:border-sky-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border p-3 outline-none focus:border-sky-500"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full rounded-lg border p-3 outline-none focus:border-sky-500"
              ></textarea>

              <button
                className="w-full rounded-lg bg-sky-500 py-4 text-lg font-semibold text-white hover:bg-sky-600 duration-300"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoom{
          from{
            transform:scale(.8);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentModal;