const Appointment = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Make an Appointment
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Book Your Visit Easily
          </h2>

          <p className="text-gray-500 leading-7">
            Schedule your appointment with our expert doctors.
            Fill out the form and our team will contact you shortly.
          </p>

          <div className="space-y-3 text-gray-600">
            <p><span className="font-semibold">Emergency:</span> +880 999 888 777</p>
            <p><span className="font-semibold">Support:</span> +880 123 456 789</p>
            <p><span className="font-semibold">Email:</span> appointment@docmed.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <form className="space-y-4">

            <input type="text" placeholder="Your Name"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400" />

            <input type="email" placeholder="Your Email"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400" />

            <input type="tel" placeholder="Phone Number"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400" />

            <select className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Dental Care</option>
              <option>Orthopedics</option>
            </select>

            <input type="date"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400" />

            <textarea rows="4" placeholder="Additional Message"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400"></textarea>

            <button type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md font-medium transition">
              Book Appointment
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;