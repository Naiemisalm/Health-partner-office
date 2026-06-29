const Blog = () => {
  const blogs = [
    {
      title: "How to Stay Healthy in 2025",
      desc: "Simple tips to maintain a healthy lifestyle with modern habits.",
    },
    {
      title: "Importance of Regular Checkups",
      desc: "Why regular medical checkups can save your life.",
    },
    {
      title: "Best Diet for Heart Health",
      desc: "Foods and habits that improve your heart condition.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Latest Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-sky-500 mb-3">
              {blog.title}
            </h2>

            <p className="text-gray-500">{blog.desc}</p>

            <button className="mt-4 text-sky-500 font-medium hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;