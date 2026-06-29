const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Get in Touch
          </h2>

          <p className="text-gray-500 leading-7">
            If you have any questions about our services, feel free to contact us.
            We are always ready to help you with medical support and guidance.
          </p>

          <div className="space-y-3 text-gray-600">
            <p><span className="font-semibold">Address:</span> 123 Medical Street, City</p>
            <p><span className="font-semibold">Phone:</span> +880 123 456 789</p>
            <p><span className="font-semibold">Email:</span> info@docmed.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <form className="space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;