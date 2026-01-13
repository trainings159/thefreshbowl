import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, ChevronLeft, ChevronRight, Camera, ShieldCheck, Heart, Eye } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: 'video.mp4',
    title: 'Daily Prep',
    description: 'Fresh vegetables hand-cut daily.'
  },
  {
    id: 2,
    url: 'video2.mp4',
    title: 'Slow Cooking',
    description: 'Nutrient-locked cooking process.'
  },
  {
    id: 3,
    url: 'video3.mp4',
    title: 'Packaging',
    description: 'Sealed fresh for Hyderabad delivery.'
  }
];

// New Image Gallery Data
const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1604328698692-f76df9f1d397?q=80&w=800', alt: 'Fresh Ingredients' },
  { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800', alt: 'Clean Kitchen' },
  { url: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=800', alt: 'Chicken Prep' },
  { url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800', alt: 'Quality Check' }
];

const Gallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const next = () => setActiveVideo((prev) => (prev + 1) % videos.length);
  const prev = () => setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-sage pt-32 pb-20 px-6 overflow-hidden text-center text-white">
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors backdrop-blur-md bg-black/10 px-4 py-2 rounded-full">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
          </Link>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-6">
             <Video className="w-4 h-4 text-white" />
             <span className="text-xs font-bold uppercase tracking-widest">My Kitchen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            The Fresh <span className="text-sage-light">Standard.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            Explore our process from farm to bowl.  We believe you should see exactly how your dog's food is made. 
          </p>
        </div>
      </header>

      {/* Split Main Content Section */}
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* HALF 1: Video Carousel */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-sage/10 p-2 rounded-lg text-sage">
                <Video className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-800">Kitchen in Motion</h2>
            </div>
            
            <div className="relative group rounded-[3rem] overflow-hidden shadow-xl bg-gray-900 border-8 border-gray-50 aspect-video lg:aspect-square flex items-center justify-center">
              <video 
                key={videos[activeVideo].url}
                className="w-full h-full object-cover"
                src={videos[activeVideo].url}
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Carousel Controls Overlay */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button onClick={prev} className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-sage transition-all border border-white/10">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-sage transition-all border border-white/10">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Video Title Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-sm">{videos[activeVideo].title}</p>
                    <p className="text-white/70 text-xs">{videos[activeVideo].description}</p>
                 </div>
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-center gap-2">
              {videos.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveVideo(i)}
                  className={`h-1.5 rounded-full transition-all ${activeVideo === i ? 'w-8 bg-sage' : 'w-2 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* HALF 2: Image Gallery Space */}
          <div className="space-y-6">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-3">
      <div className="bg-sage/10 p-2 rounded-lg text-sage">
        <Camera className="w-5 h-5" />
      </div>
      <h2 className="text-2xl font-display font-bold text-gray-800">Kitchen Snapshots</h2>
    </div>
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      Scroll to explore
    </span>
  </div>
  

  {/* 
      SCROLLABLE CONTAINER 
      max-h matches the video container height for symmetry.
      Custom scrollbar styling added via [&::-webkit-scrollbar]
  */}
  <div className="max-h-[400px] md:max-h-[550px] overflow-y-auto pr-4 
                  scrollbar-thin scrollbar-thumb-sage/20 scrollbar-track-transparent
                  [&::-webkit-scrollbar]:w-1.5
                  [&::-webkit-scrollbar-thumb]:bg-sage/20
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-transparent">
    
    <div className="grid grid-cols-2 gap-4">
      {/* Increased image list for scrolling demonstration */}
      {[...galleryImages, ...galleryImages].map((img, idx) => (
        <div key={idx} className="relative group aspect-square rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm border border-gray-50">
           <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
           />
           {/* Hover Overlay */}
           <div className="absolute inset-0 bg-sage-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white p-3 rounded-full text-sage transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
           </div>
        </div>
      ))}
    </div>
    </div>
</div>
        </div>
      </section>

      {/* Hygiene Grid (Keeping it below the split section) */}
      <section className="py-20 bg-gray-50/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-white w-20 h-20 rounded-[2rem] shadow-sm flex items-center justify-center mx-auto text-sage">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-800">Sterile Kitchen</h4>
              <p className="text-gray-500 text-sm">Our kitchen is deep-cleaned daily and sanitised before every batch.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white w-20 h-20 rounded-[2rem] shadow-sm flex items-center justify-center mx-auto text-sage">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-800">Small Batches</h4>
              <p className="text-gray-500 text-sm">We cook in small batches to ensure quality and nutritional consistency.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white w-20 h-20 rounded-[2rem] shadow-sm flex items-center justify-center mx-auto text-sage">
                <Camera className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-bold text-gray-800">100% Transparency</h4>
              <p className="text-gray-500 text-sm">What you see is what you get. No hidden additives or fillers.</p>
            </div>
          </div>
        </div>
      </section>

 
      {/* Action Footer */}
      <section className="py-20 px-6 text-center">
         <div className="max-w-3xl mx-auto bg-sage-dark p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <Video className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
            <h2 className="text-4xl font-display font-bold mb-6 relative z-10">See enough? Let's feed them fresh.</h2>
            <p className="text-white/80 mb-10 text-lg relative z-10">Start with our trial pack today and see the difference real food makes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <Link to="/" className="bg-white text-sage-dark px-10 py-5 rounded-full font-bold hover:bg-cream transition-all shadow-xl">Explore Menu</Link>
               <Link to="/how-it-works" className="bg-sage text-white px-10 py-5 rounded-full font-bold hover:bg-sage-light transition-all shadow-xl">How it Works</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Gallery;