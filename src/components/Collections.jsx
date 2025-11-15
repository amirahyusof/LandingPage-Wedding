import React from "react";
import Collection from "../assets/collection.jpg";
import Collection01 from "../assets/collection (1).jpg";
import Collection02 from "../assets/collection (2).jpg";
import Collection03 from "../assets/collection (3).jpg";
import Collection04 from "../assets/collection (4).jpg";
import Collection05 from "../assets/collection (5).jpg";
import Collection06 from "../assets/collection (6).jpg";

function Collections() {
  return (
    <section id="collection" className="w-full bg-[#E6A4B4] py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase text-center mb-10">
        Collections
      </h2>

      <div className="max-w-[1240px] mx-auto px-4 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={Collection}
            alt="Wedding memory"
            className="rounded-2xl object-cover shadow-md hover:opacity-90 transition"
          />
          <img
            src={Collection01}
            alt="Wedding portrait"
            className="h-[180px] sm:h-[280px] md:h-80 lg:h-[360px] w-full rounded-2xl object-cover shadow-md hover:opacity-90 transition"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          {[Collection02, Collection03, Collection04].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Wedding ${i}`}
              className="h-40 sm:h-[260px] md:h-80 w-full rounded-2xl object-cover shadow-md hover:opacity-90 transition"
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-4">
          {[Collection05, Collection06].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Collection ${i}`}
              className="rounded-2xl object-cover shadow-md hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
