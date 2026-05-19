'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FaCalendarAlt, FaUserCheck, FaTicketAlt } from 'react-icons/fa';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const features = [
  {
    title: 'Seamless Scheduling',
    headline: 'Book Your Next Learning Adventure',
    description: 'Eliminate manual booking friction entirely. Select custom dates and view real-time openings instantly.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    icon: <FaCalendarAlt className="text-2xl text-blue-500" />
  },
  {
    title: 'Verified Tutors',
    headline: 'Learn from Expert Educators',
    description: 'Connect safely with qualified instructors across mathematics, software engineering, and language sciences.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    icon: <FaUserCheck className="text-2xl text-teal-500" />
  },
  {
    title: 'Digital Tokens',
    headline: 'Secured Session Queue Management',
    description: 'Our system automatically generates digital validation tokens for every successful slot reservation to prevent conflicts.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    icon: <FaTicketAlt className="text-2xl text-indigo-500" />
  }
];

export default function Banner() {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-slate-900 text-white relative min-h-[500px] flex flex-col justify-between">
      
      
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect={'fade'} 
        fadeEffect={{ crossFade: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
        className="w-full flex-grow relative"
      >
        {features.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full p-8 md:p-16 flex items-center">
            
           
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />

          
            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[380px]">
              
           
              <div className="md:col-span-7 space-y-4">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {slide.title}
                </span>
                <h1 className="text-3xl md:text-5xl font-black leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-slate-300 text-sm md:text-base font-light max-w-xl">
                  {slide.description}
                </p>
                <div className="pt-2">
                  <Link 
                    href="/tutors" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg active:scale-95 transition"
                  >
                    Find Available Tutors
                  </Link>
                </div>
              </div>

          
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-2xl p-6 w-full max-w-xs shadow-2xl text-center space-y-4 transform hover:scale-105 transition duration-300">
                  <div className="mx-auto w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                    {slide.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">{slide.title}</h3>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-full animate-pulse" />
                  </div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">System Verified • Live Connection</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
      <div className="w-full bg-slate-950 border-t border-slate-800/60 z-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 py-3">
            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideTo(index)} 
                className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition ${
                  activeIndex === index 
                    ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-md' 
                    : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}