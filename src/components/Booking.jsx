import React from "react";
import bookImage from "../assets/bookImg.jpg";

function Booking() {
  return (
    <section className="w-full bg-white py-16 px-4" id="contact">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Text + Form */}
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-[#E6A4B4] mb-2">
            Create a Beautiful Memento of Your Dream Wedding
          </h2>
          <p className="text-gray-700 mb-6">
            Turning real happiness into timeless pictures — let us help you
            capture your love story beautifully.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Bride Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E6A4B4] outline-none"
            />
            <input
              type="text"
              placeholder="Groom Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E6A4B4] outline-none"
            />
            <input
              type="date"
              placeholder="Wedding Date"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E6A4B4] outline-none"
            />
            <input
              type="text"
              placeholder="Wedding Place"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E6A4B4] outline-none"
            />

            <button
              type="submit"
              className="w-[150px] bg-[#E6A4B4] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#e3bcc3] transition-all mx-auto"
            >
              Book
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={bookImage}
            alt="Wedding couple booking"
            className="rounded-2xl shadow-lg w-[90%] md:w-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;
