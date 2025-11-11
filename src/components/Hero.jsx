
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center text-white h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Capturing Timeless Memories of Your Special Day
        </h1>
        <p className="text-lg md:text-xl mt-6 drop-shadow-sm">
          Preserving cherished moments with artful photography — capturing the
          essence of your love story for eternity.
        </p>
        <button className="mt-8 bg-[#F5EEE6] text-[#E6A4B4] uppercase tracking-wide px-6 py-3 rounded-lg font-semibold hover:bg-[#F3D7CA] hover:text-white transition-all">
          Book with us
        </button>
      </div>
    </section>
  );
}

export default Hero;
