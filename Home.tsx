import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  PawPrint, 
  MessageSquare, 
  Instagram,
  HelpCircle as QuestionIcon,
  Star,
  Zap,
  Activity,
  ShieldCheck,
  Info,
  Video,
  Loader2,
  ChevronLeft, 
  ChevronRight,
  LayoutGrid
} from 'lucide-react';
import { menuItems } from '../data'
import QuoteModal from '../components/QuoteModal';
import ChatBot from '../components/ChatBot';
import ReactPlayer from 'react-player';

const KITCHEN_VIDEOS = [
  {
    id: "dLMAg1b5ttY", 
    title: "Chicken & Veggies Prep",
    desc: "Using fresh ingredients and meat ."
  },
  {
    id: "dQw4w9WgXcQ", // Replace with your actual IDs
    title: "Morning Batch Cook",
    desc: "Our signature slow-cooking process."
  },
  {
    id: "y6120QOlsfU", // Replace with your actual IDs
    title: "Packaging Station",
    desc: "Sealing freshness for delivery."
  }
];


const Home: React.FC = () => {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Helper to change videos
  const nextVideo = () => {
    setIsVideoLoading(true);
    setCurrentVideoIndex((prev) => (prev + 1) % KITCHEN_VIDEOS.length);
  };

  const prevVideo = () => {
    setIsVideoLoading(true);
    setCurrentVideoIndex((prev) => (prev - 1 + KITCHEN_VIDEOS.length) % KITCHEN_VIDEOS.length);
  };

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Explicitly trigger play on mount
useEffect(() => {
  const attemptPlay = async () => {
    if (videoRef.current) {
      try {
        // Force sync with state
        videoRef.current.muted = true; 
        await videoRef.current.play();
      } catch (err) {
        console.warn("Autoplay blocked. Waiting for user interaction.",err);
      }
    }
  };

  attemptPlay();
}, []);


  const trialPackWhatsAppMessage = encodeURIComponent(
    "Hi Fresh Bowl! I'd like to order the Starter Trial Pack (3 flavors x 300g). How do I proceed?"
  );
  const waLink = `https://wa.me/91XXXXXXXXXX?text=${trialPackWhatsAppMessage}`;

  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center text-left text-white px-6 bg-sage overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }}>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage-light rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10 pt-6 pb-12">
          <div className="animate-fade-in-up">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/6851/6851304.png" className="w-4 h-4 object-contain" alt="Fresh" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">100% Fresh</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/9422/9422009.png" className="w-4 h-4 object-contain" alt="No Preservatives" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">Preservative-Free</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/1546/1546171.png" className="w-4 h-4 object-contain" alt="Allergy Safe" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">Allergy Safe</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-6">
              Pure Fuel.<br/><span className="text-sage-light">Tail-Wagging</span><br/>Dog Food.
            </h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-xl md:text-2xl font-display font-medium text-white max-w-xl leading-tight">
                Real Ingredients For Real Pets. <br/>
                <span className="text-sage-light font-bold">Homemade in Hyderabad.</span>
              </p>
              <div className="space-y-1">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Home-cooked meals for your best friend
                </p>
                <p className="text-lg text-white/90 font-bold tracking-wide">
                  🍳 Made Fresh Daily 🐶
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <a href="#menu" onClick={scrollToMenu} className="inline-flex items-center bg-white text-sage-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-cream transition duration-300 shadow-2xl hover:-translate-y-1">
                  View Our Menu <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </div>
          </div>
          
          <div className="relative hidden md:block group md:translate-x-8 lg:translate-x-16">
             <div className="bg-white/10 backdrop-blur-md rounded-[5rem] p-4 border border-white/20 transform rotate-2 transition-transform group-hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop" className="rounded-[4.5rem] shadow-2xl w-full h-[750px] object-cover" alt="Happy Pup" />
             </div>
          </div>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-20 px-6 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center relative">
            <div className="inline-flex items-center gap-2 bg-sage/5 px-4 py-2 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-sage" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sage-dark">Curated Homemade Recipes</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-xl font-display font-bold text-sage-dark uppercase tracking-widest">100% Fresh Selection</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-4">
                Our Kitchen Menu
                <img src="https://cdn-icons-png.flaticon.com/512/15149/15149112.png" className="w-12 h-12 hidden sm:block opacity-80" alt="dog food bowl" />
              </h3>
            </div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              Human-grade nutrition designed for longevity and energy. No chemicals, No preservatives.
            </p>
          </div>

          {/* Boutique Promotional Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
             {/* Trial Pack Card */}
             <div className="bg-white border border-gray-100 rounded-[3rem] p-8 flex items-center gap-8 shadow-sm hover:shadow-xl hover:border-amber-100 transition-all duration-500 group">
                <div className="bg-amber-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                   <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                   <h4 className="text-2xl font-display font-bold text-gray-800">The Starter Trial Pack</h4>
                   <p className="text-gray-500 text-sm mt-1 mb-4">3 flavors (300g each) to find their favorite.</p>
                   <div className="flex flex-wrap gap-4">
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#25D366] font-bold text-xs hover:translate-x-1 transition-all">
                        <MessageSquare className="w-4 h-4" /> Order on WhatsApp
                      </a>
                      <div className="w-[1px] h-4 bg-gray-200 self-center hidden sm:block"></div>
                      <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-500 font-bold text-xs hover:translate-x-1 transition-all">
                        <Instagram className="w-4 h-4" /> Order on Instagram
                      </a>
                   </div>
                </div>
             </div>

             {/* Custom Bases Card */}
             <div className="bg-gray-50 rounded-[3rem] p-8 flex items-center gap-8 border border-transparent hover:border-sage/20 transition-all duration-500 group">
                <div className="bg-white w-20 h-20 rounded-[2rem] flex items-center justify-center text-sage flex-shrink-0 group-hover:-rotate-6 transition-transform shadow-sm">
                   <Zap className="w-8 h-8 fill-current" />
                </div>
                <div>
                   <h4 className="text-2xl font-display font-bold text-gray-800">Customized For You</h4>
                   <p className="text-gray-500 text-sm mt-1 mb-4">Switch to Millets, Quinoa or Veggie Mash.</p>
                   <Link to="/custom-bases" className="inline-flex items-center gap-2 text-sage-dark font-bold text-sm hover:gap-4 transition-all">
                      Explore Custom Bases <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>

          {/* Boutique Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            {menuItems.map((item) => (
              <div key={item.id} className="group bg-white p-6 md:p-8 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl hover:border-sage/20 transition-all duration-500 flex flex-col">
                <div className="relative w-28 h-28 mx-auto rounded-full bg-gray-50 overflow-hidden mb-5 transition-all duration-700 group-hover:scale-110">
                   <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl opacity-40 ${item.color?.replace('bg-', 'bg-') || 'bg-sage'}`}></div>
                   <div className="absolute inset-0 flex items-center justify-center p-5">
                     <img src={item.iconUrl} className="w-full h-full object-contain drop-shadow-lg" alt={item.title} />
                   </div>
                </div>

                <div className="flex-grow text-center">
                   <div className="flex flex-col items-center mb-4">
                      <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-sage-dark transition-colors leading-tight min-h-[2.5rem] flex items-center justify-center px-2">
                        {item.title}
                      </h3>
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-display font-bold text-sage mt-1">₹{item.price}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1">per 300g pack</span>
                      </div>
                   </div>
                   
                   <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden px-2">
                     {item.description.split(',').slice(0, 3).join(',')}...
                   </p>

                   <div className="relative mb-6 pt-4">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-2 text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap z-10">
                         Values per 100g
                      </div>
                      <div className="grid grid-cols-3 gap-2 bg-gray-50/70 p-4 rounded-[2rem] border border-gray-100">
                         <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Protein</span>
                            <span className="text-sm font-display font-bold text-gray-800">{item.protein}</span>
                         </div>
                         <div className="flex flex-col items-center border-x border-gray-200">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fat</span>
                            <span className="text-sm font-display font-bold text-gray-800">{item.fat}</span>
                         </div>
                         <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fiber</span>
                            <span className="text-sm font-display font-bold text-gray-800">{item.fiber}</span>
                         </div>
                      </div>
                   </div>

                   <Link to={`/dish/${item.id}`} className="inline-flex items-center gap-2 font-bold text-sage-dark text-sm hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Nutritional Disclaimer */}
          <div className="max-w-4xl mx-auto mb-10 p-6 rounded-3xl bg-gray-50/50 border border-gray-100 flex items-start gap-4">
            <Info className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <p className="text-[11px] text-gray-500 italic leading-relaxed">
              Nutritional values are estimates based on standard cooking methods. Every batch is made fresh, and specific values may vary slightly. We can adjust ratios based on your dog's specific caloric needs or allergies.
            </p>
          </div>

          {/* Portioning Dashboard */}
          <div className="bg-white border border-gray-100 rounded-[3.5rem] p-8 md:p-12 shadow-sm mb-6 relative overflow-hidden group/portion">
             <PawPrint className="absolute -bottom-10 -right-10 text-sage/5 w-64 h-64 -rotate-12 transition-transform duration-700 group-hover/portion:rotate-0" />
             <PawPrint className="absolute -top-10 -left-10 text-sage/5 w-48 h-48 rotate-45 transition-transform duration-1000 group-hover/portion:rotate-12" />
             
             <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-4 text-left">
                   <div className="bg-sage/10 w-12 h-12 rounded-2xl flex items-center justify-center text-sage mb-4">
                      <Activity className="w-6 h-6" />
                   </div>
                   <h4 className="text-3xl font-display font-bold text-gray-900 mb-2">Portioning Guide</h4>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      Simplified daily math for your pup.
                   </p>
                   
                   <button 
                     onClick={() => setIsQuoteOpen(true)}
                     className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-sage transition-all shadow-lg"
                   >
                      Calculate My Pack
                   </button>
                </div>
                
                <div className="lg:col-span-8">
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { size: "Small", weight: "5-10kg", portion: "300g", icon: "🐶", desc: "1 Pack / Day" },
                        { size: "Medium", weight: "11-20kg", portion: "600g", icon: "🐕", desc: "2 Packs / Day" },
                        { size: "Large", weight: "25kg+", portion: "1kg+", icon: "🦮", desc: "Custom Plan" }
                      ].map((item, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
                           <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.size} ({item.weight})</span>
                           <span className="text-2xl font-display font-bold text-gray-800">{item.portion}</span>
                           <span className="text-[10px] text-sage font-bold uppercase tracking-wider mt-2">{item.desc}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Cooking Transparency (9:16 Vertical Video) */}
      <section className="py-20 px-6 bg-cream/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 mb-3 bg-sage/10 px-4 py-2 rounded-full">
                <Video className="w-4 h-4 text-sage" />
                <span className="text-xs font-bold uppercase tracking-widest text-sage-dark">Behind the Scenes</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Cooked Fresh In Our Kitchen 🏡 @ Hyderabad
             </h3>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Take a peek into our daily kitchen routine. Total transparency in every single meal. Watch us prep- because they deserve the best.
             </p>
             <div>
                {/* New Gallery Button */}
      <Link to="/gallery" className="inline-flex items-center gap-4 bg-white border border-sage/20 text-sage-dark px-6 py-3 rounded-2xl font-bold hover:bg-sage hover:text-white transition-all shadow-sm">
        <LayoutGrid className="w-4 h-4" /> View Full Gallery
      </Link>
      </div>
          </div>
          
          <div className="relative group max-w-[380px] mx-auto">
             {/* Glow effect behind video */}
             <div className="absolute -inset-10 bg-gradient-to-tr from-sage/30 to-cream/50 rounded-[5rem] blur-3xl opacity-60 transition-opacity"></div>
             {/* Navigation Arrows */}
      <button 
        onClick={prevVideo}
        className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl text-sage hover:scale-110 transition-transform hidden lg:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextVideo}
        className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl text-sage hover:scale-110 transition-transform hidden lg:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

             {/* Vertical Video Container */}
             <div className="relative aspect-[9/16] w-full rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[10px] border-white bg-gray-200">
                {isVideoLoading && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                      <Loader2 className="w-10 h-10 text-sage animate-spin mb-4" />
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading Fresh Batch...</p>
                   </div>
                )}
                
              <ReactPlayer
              key={KITCHEN_VIDEOS[currentVideoIndex].id} // Key forces reload when index changes
    src={`https://youtube.com/shorts/${KITCHEN_VIDEOS[currentVideoIndex].id}?feature=share`}
    playing={true}     // Autoplay
    loop={true}        // Loop
    muted={false}       // Mute (required for autoplay)
    controls={false}   // Hide UI
    width="100%"
    height="100%"
    onReady={() => setIsVideoLoading(false)}
config={{
    youtube: {
      // Put properties here directly, not inside playerVars
      rel: 0,
      disablekb: 1,
      // modestbranding is deprecated and removed from types
    }
  }}
  />
  {/* Mobile Nav Overlay (Visible on small screens) */}
        <div className="absolute top-1/2 inset-x-4 flex justify-between lg:hidden z-20 pointer-events-none">
          <button onClick={prevVideo} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white pointer-events-auto"><ChevronLeft /></button>
          <button onClick={nextVideo} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white pointer-events-auto"><ChevronRight /></button>
        </div>

        {/* Dynamic Caption Overlay */}
        <div className="absolute bottom-8 left-6 right-6 z-10">
          <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white font-display font-bold text-sm">
                {KITCHEN_VIDEOS[currentVideoIndex].title}
              </span>
            </div>
            <p className="text-white/80 text-[10px]">
              {KITCHEN_VIDEOS[currentVideoIndex].desc}
            </p>
          </div>
        </div>
    

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {KITCHEN_VIDEOS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all ${currentVideoIndex === i ? 'w-8 bg-sage' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
                

                {/* Floating "Live" Badge */}
                <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
                   <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg border border-red-500/50 w-fit">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      Kitchen Cam
                   </div>
                  
                </div>
                
               
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-16 px-6 bg-cream/30">
        <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3 bg-sage/10 px-4 py-2 rounded-full">
                <QuestionIcon className="w-4 h-4 text-sage" />
                <span className="text-xs font-bold uppercase tracking-widest text-sage-dark">FAQs</span>
             </div>
          <h3 className="text-3xl font-display font-bold text-gray-800 mb-10">Common Questions</h3>
          <div className="grid gap-4 text-left">
             {[
               { q: "How do I transition my dog?", a: "Mix 25% fresh food with 75% old food, gradually increasing fresh portion over 7 days." },
               { q: "How long does food stay fresh?", a: "3 days in the fridge and up to 2 weeks in the freezer. No preservatives used." },
               { q: "Can you customize for allergies?", a: "Yes! We can swap proteins or bases to suit specific needs." }
             ].map((faq, i) => (
               <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 hover:shadow-md transition-all">
                 <div className="bg-sage/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sage">
                    <CheckCircle className="w-4 h-4" />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-lg">{faq.q}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                 </div>
               </div>
             ))}
          </div>
          <div className="mt-10">
            <Link to="/faq" className="inline-flex items-center bg-transparent text-sage-dark px-8 py-3 rounded-full font-bold text-sm border-2 border-sage hover:bg-sage hover:text-white transition duration-300">
              Show More FAQs <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-dark py-16 px-6 text-center text-white relative overflow-hidden">
        <PawPrint className="absolute top-10 left-10 text-white/10 w-32 h-32 -rotate-12" />
        <div className="relative z-10 max-w-2xl mx-auto">
           <h3 className="text-3xl font-display font-bold mb-4">Specific Allergy or Diet Concerns?</h3>
           <p className="mb-8 text-white/90 text-lg leading-relaxed">
             Our AI Nutritionist can help you find the perfect recipe based on your dog's specific health needs.
           </p>
           <button 
            onClick={() => setIsChatOpen(true)} 
            className="inline-flex items-center gap-3 bg-white text-sage-dark px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform text-lg"
           >
             <MessageSquare className="w-6 h-6" /> Chat with AI Nutritionist
           </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-sage text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-slow flex items-center gap-2 border-2 border-white/20"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden sm:inline font-bold text-sm pr-2">Ask AI</span>
        </button>
      )}
    </>
  );
};

export default Home;