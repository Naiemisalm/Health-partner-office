const BookingModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-3xl rounded-lg overflow-hidden shadow-xl">

        {/* Header */}
        <div className="bg-teal-700 text-white flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-semibold">{service.title}</h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold hover:text-gray-200"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4">

          <input
            type="text"
            placeholder="Enter Your Full Name *"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-teal-600"
          />

          <input
            type="email"
            placeholder="Enter Your Email *"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-teal-600"
          />

          <input
            type="tel"
            placeholder="Enter Your Phone Number *"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-teal-600"
          />

          <textarea
            rows="5"
            placeholder="Comment"
            className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>

          <button
            type="submit"
            className="bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;