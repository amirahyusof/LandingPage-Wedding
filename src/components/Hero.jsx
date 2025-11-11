
import React, { useState, useEffect } from 'react';
import '../App.css';
import heroImage from "../assets/hero.jpg";
import { 
  Camera, Heart, Star, 
  Award, Users, Image as ImageIcon,
  Calendar
} from 'lucide-react'

function Hero() {
  const [mounted, setMounted] = useState(false)
  

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/20 fill-white/20"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto px-4 py-20 text-center relative z-10 transform transition-all duration-1000 ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mt-4 animate-bounce-slow">
          <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          <span className="text-white font-semibold">Award-Winning Wedding Photography</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Capturing Timeless
          <span className="block mt-2 bg-linear-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
            Memories
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Preserving cherished moments with artful photography, ensuring timeless memories of your special day
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-4 py-2 bg-white text-[#E6A4B4] rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute p-2 inset-0 bg-linear-to-r bg-[#F5EEE6] text-[#E6A4B4] uppercase tracking-wide rounded-lg font-semibold hover:bg-[#F3D7CA] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
              Book With Us
            </span>
          </button>

          <button
            onClick={() => scrollToSection('collection')}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <ImageIcon className="w-5 h-5" />
            View Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Award, value: '10+', label: 'Years Experience' },
            { icon: Users, value: '500+', label: 'Happy Couples' },
            { icon: Camera, value: '1000+', label: 'Captured Moments' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
