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
      popular: true,
      gradient:"from-gray-400 to-gray-500"
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
      popular: true,
      gradient: 'from-yellow-400 to-amber-500'
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
      popular: false,
      gradient: 'from-blue-400 to-cyan-500'
    },
  ];

  return (
    <section id="service" className="w-full bg-[#F3D7CA] py-20 px-4 font-bold text-center mb-4">
      <h2 className="text-4xl md:text-5xl text-[#E6A4B4]">
        Packages
      </h2>
      <p className="text-lg mt-3 mb-10 text-gray-600">
        We always adapt our services to you
      </p>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative bg-linear-to-bto-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
              pkg.popular ? 'ring-4 ring-rose-500 transform scale-105' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
            )}

            <div className={`w-16 h-16 bg-linear-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
              <Star className="w-8 h-8 text-white fill-white" />
            </div>

            <h3 className="text-3xl font-bold text-center mb-4">{pkg.name}</h3>
            <div className="text-4xl font-bold text-center text-rose-500 mb-8">{pkg.price}</div>

            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-linear-to-r from-rose-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
              Choose Package
            </button>
          </div>


          // <div
          //   key={pkg.title}
          //   className="flex flex-col justify-between bg-[#F5EEE6] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6"
          // >
          //   <h3 className="text-2xl font-extrabold text-[#E6A4B4] py-6">
          //     {pkg.title}
          //   </h3>
          //   <ul className="text-gray-700 text-left list-none mx-auto space-y-2 px-4">
          //     {pkg.details.map((detail) => (
          //       <li key={detail} className="border-b border-[#F3D7CA]/60 py-2">
          //         {detail}
          //       </li>
          //     ))}
          //   </ul>
          //   <button className="mt-8 bg-[#E6A4B4] text-white font-semibold text-lg py-3 px-8 rounded-md hover:bg-[#e3bcc3] transition-all mx-auto">
          //     {pkg.price}
          //   </button>
          // </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
