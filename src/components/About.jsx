
import aboutImage01 from "../assets/about.jpg";
import aboutImage02 from "../assets/photo.jpg";

function About() {
  return (
    <section id="about" className="w-full bg-[#F3D7CA] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#E6A4B4] mb-10">
        Crafting Timeless Memories: Your Story Behind the Lens
      </h2>

      {/* Images */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 mb-12">
        <img
          src={aboutImage01}
          alt="Wedding moment"
          className="w-full max-w-[400px] mx-auto rounded-3xl shadow-lg"
        />
        <img
          src={aboutImage02}
          alt="Photography detail"
          className="w-full max-w-[450px] mx-auto rounded-3xl shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 text-left">
        {[
          {
            title: "Unlocking the Essence of Your Love Story",
            text: `Embark on a journey where every glance, every touch, and every smile narrates a story of love eternal. Our photography style blends artistry and authenticity, capturing the raw emotions that define your special day.`,
          },
          {
            title: "From Heart to Lens",
            text: `Behind every photograph lies a cherished memory waiting to be unveiled. Our passion lies in freezing these fleeting moments, immortalizing your love story with every click of the shutter.`,
          },
          {
            title: "Meet the Artist",
            text: `With a decade of experience in wedding photography, we bring creativity and technical mastery to every shoot. Our storytelling through imagery reflects timeless elegance and emotional depth.`,
          },
        ].map((item) => (
          <div key={item.title} className="bg-white/60 rounded-xl p-6 shadow-sm">
            <h3 className="text-[#FF407D] font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
