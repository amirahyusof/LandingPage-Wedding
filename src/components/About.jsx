import aboutImage01 from "../assets/about.jpg";
import aboutImage02 from "../assets/photo.jpg";
import { Camera, Heart, Sparkles } from 'lucide-react'

function About() {
  return (
    <section id="about" className="w-full bg-[#F3D7CA] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FF407D] mb-4">
          Crafting Timeless Memories
        </h2>
        <p className="text-xl text-center mb-16">Your Story Behind the Lens</p>

        {/* Elegant Image Layout with Overlap */}
        <div className="relative max-w-5xl mx-auto mb-20 h-[400px] md:h-[500px]">
          {/* Large Image - Left */}
          <div className="absolute left-0 top-0 w-[55%] md:w-[60%] h-full z-10">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src={aboutImage01}
                alt="Wedding moment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Smaller Image - Right Overlapping */}
          <div className="absolute right-0 bottom-0 w-[50%] md:w-[45%] h-[70%] z-20">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-all duration-500">
              <img
                src={aboutImage02}
                alt="Photography detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg z-30">
            <p className="text-[#FF407D] font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              10+ Years of Capturing Love
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {[
            {
              icon: Heart,
              title: 'Unlocking the Essence of Your Love Story',
              desc: 'Embark on a journey where every glance, every touch, and every smile narrates a story of love eternal. Our photography style blends artistry and authenticity.',
              color: 'from-rose-500 to-pink-500'
            },
            {
              icon: Camera,
              title: 'From Heart to Lens',
              desc: 'We believe that behind every photograph lies a cherished memory waiting to be unveiled. Our passion lies in freezing these fleeting moments.',
              color: 'from-pink-500 to-rose-500'
            },
            {
              icon: Sparkles,
              title: 'Meet the Artist',
              desc: 'With a decade of experience in wedding photography, we bring a unique blend of creativity and technical expertise to every shoot.',
              color: 'from-rose-400 to-pink-400'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#FF407D] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
