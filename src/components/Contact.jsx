import contactImage from "../assets/contact.jpg";

function Contact() {
  return (
    <section id="contact" className="w-full bg-[#E6A4B4] text-white py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Image */}
        <img
          src={contactImage}
          alt="Wedding contact"
          className="w-[360px] md:w-[480px] lg:w-[520px] rounded-3xl shadow-lg"
        />

        {/* Text & Button */}
        <div className="text-center lg:text-left space-y-4">
          <h3 className="text-3xl font-bold uppercase">Love Our Work?</h3>
          <p className="text-lg leading-relaxed text-white/90">
            Find out if we're available for your date and get all your questions
            answered. 
          </p>
          <button className="bg-[#F5EEE6] text-[#E6A4B4] font-semibold uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#F3D7CA] hover:text-white transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
