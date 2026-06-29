const Department = () => {
  const departments = [
    "Cardiology",
    "Neurology",
    "Dental Care",
    "Orthopedics",
    "Eye Care",
    "Emergency",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Our Departments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg border hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-sky-500">
              {dept}
            </h2>
            <p className="text-gray-500 mt-2">
              We provide high quality treatment in {dept}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;