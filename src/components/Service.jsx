import React from "react";

function Service() {
  const packages = [
    {
      title: "Silver",
      price: "RM500",
      details: [
        "Coverage: Up to 6 hours",
        "One photographer",
        "250 edited high resolution photos",
        "No engagement shoot",
        "No albums",
        "Private online gallery for 6 months",
      ],
    },
    {
      title: "Gold",
      price: "RM1500",
      details: [
        "Coverage: Up to 8 hours",
        "One photographer + assistant",
        "400 edited high resolution photos",
        "1-hour engagement shoot",
        "Custom-designed 20-page album",
        "Private online gallery for 12 months",
        "10% discount on additional services",
      ],
    },
    {
      title: "Diamond",
      price: "RM2500",
      details: [
        "Coverage: Full day",
        "2 photographers + assistant",
        "600 edited high resolution photos",
        "2-hour engagement shoot",
        "2 custom-designed 20-page albums",
        "Private online gallery for 18 months",
        "Complimentary pre-wedding consultation",
      ],
    },
  ];

  return (
    <section id="service" className="w-full bg-[#F3D7CA] py-20 px-4 text-center">
      <h2 className="text-3xl font-bold uppercase text-[#E6A4B4]">
        Packages
      </h2>
      <p className="text-lg mt-3 mb-10 text-gray-700">
        We always adapt our services to you
      </p>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="flex flex-col justify-between bg-[#F5EEE6] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6"
          >
            <h3 className="text-2xl font-extrabold text-[#E6A4B4] py-6">
              {pkg.title}
            </h3>
            <ul className="text-gray-700 text-left list-none mx-auto space-y-2 px-4">
              {pkg.details.map((detail) => (
                <li key={detail} className="border-b border-[#F3D7CA]/60 py-2">
                  {detail}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-[#E6A4B4] text-white font-semibold text-lg py-3 px-8 rounded-md hover:bg-[#e3bcc3] transition-all mx-auto">
              {pkg.price}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
