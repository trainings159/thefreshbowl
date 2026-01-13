import React, { useState } from 'react';
// Explicitly importing members from react-router-dom to fix resolution errors
import { useParams, Navigate, Link } from 'react-router-dom';
import { menuItems } from '../data';
import { ArrowLeft, CheckCircle2, Utensils, Activity, Heart, Sprout, MessageCircle, Tag } from 'lucide-react';
import ChatBot from '../components/ChatBot';

const DishDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const dish = menuItems.find((item: { id: string | undefined; }) => item.id === id);

  if (!dish) {
    return <Navigate to="/" replace />;
  }

  // Get background color class mapping for darker hero section
  const getHeroColors = (colorClass?: string) => {
    switch (colorClass) {
      case 'bg-amber-100': return 'from-[#5D4037] to-[#3E2723]'; // Chicken (Brown/Dark)
      case 'bg-red-100': return 'from-[#5D1010] to-[#380808]'; // Lamb (Deep Red)
      case 'bg-blue-100': return 'from-[#0D47A1] to-[#082655]'; // Fish (Deep Blue)
      case 'bg-orange-100': return 'from-[#E65100] to-[#BF360C]'; // Eggs (Deep Orange)
      case 'bg-green-100': return 'from-[#1B5E20] to-[#0D3813]'; // Veg (Deep Green)
      default: return 'from-sage-dark to-[#2c442e]';
    }
  };

  const heroGradient = getHeroColors(dish.color);

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Immersive Hero Section - 'Exploded View' Style */}
      <div className={`relative min-h-[80vh] md:min-h-[700px] flex flex-col bg-gradient-to-br ${heroGradient} overflow-hidden`}>
         
         {/* Navigation Link within Hero */}
         <div className="relative z-20 pt-6 px-6">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors backdrop-blur-md bg-black/10 px-4 py-2 rounded-full">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
            </Link>
         </div>

         {/* Decorative Background Elements */}
         <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
             {/* Subtle Texture */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         </div>

         {/* Main Content Container */}
         <div className="flex-grow flex items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
            <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
                
                {/* Central Dish Image - The Hero */}
                <div className="relative z-20 w-64 h-64 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-white/10 overflow-hidden animate-fade-in-up">
                    <img 
                      src={dish.imageUrl} 
                      alt={dish.title} 
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700" 
                    />
                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Ingredient: Top Left */}
                <div className="absolute top-[5%] left-[5%] md:top-[10%] md:left-[15%] z-20 hidden md:block animate-fade-in delay-100">
                    <div className="relative group cursor-default">
                        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 text-gray-800 transform group-hover:scale-105 transition-transform">
                            <span className="font-display font-bold text-lg">{dish.ingredients[0].name}</span>
                        </div>
                        {/* SVG Connector Line */}
                        <svg className="absolute top-full left-1/2 w-24 h-24 pointer-events-none" style={{ transform: 'translate(-50%, 0)' }}>
                            <path d="M 12 0 Q 12 40 80 80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="80" cy="80" r="3" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Floating Ingredient: Top Right */}
                <div className="absolute top-[10%] right-[5%] md:top-[15%] md:right-[15%] z-20 hidden md:block animate-fade-in delay-200">
                    <div className="relative group cursor-default">
                        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 text-gray-800 transform group-hover:scale-105 transition-transform">
                            <span className="font-display font-bold text-lg">{dish.ingredients[1].name}</span>
                        </div>
                        <svg className="absolute top-full right-1/2 w-24 h-24 pointer-events-none" style={{ transform: 'translate(50%, 0) scaleX(-1)' }}>
                            <path d="M 12 0 Q 12 40 80 80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="80" cy="80" r="3" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Floating Ingredient: Bottom Right */}
                <div className="absolute bottom-[20%] right-[0%] md:bottom-[20%] md:right-[10%] z-20 hidden md:block animate-fade-in delay-300">
                    <div className="relative group cursor-default">
                        <svg className="absolute bottom-full right-1/2 w-20 h-20 pointer-events-none" style={{ transform: 'translate(50%, 0) scaleX(-1) scaleY(-1)' }}>
                            <path d="M 12 0 Q 12 40 60 60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="60" cy="60" r="3" fill="white" />
                        </svg>
                        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 text-gray-800 transform group-hover:scale-105 transition-transform">
                            <span className="font-display font-bold text-lg">{dish.ingredients[2].name}</span>
                        </div>
                    </div>
                </div>
                
                 {/* Floating Ingredient: Bottom Left */}
                 <div className="absolute bottom-[15%] left-[2%] md:bottom-[25%] md:left-[12%] z-20 hidden md:block animate-fade-in delay-500">
                    <div className="relative group cursor-default">
                         <svg className="absolute bottom-full left-1/2 w-20 h-20 pointer-events-none" style={{ transform: 'translate(-50%, 0) scaleY(-1)' }}>
                            <path d="M 12 0 Q 12 40 60 60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="60" cy="60" r="3" fill="white" />
                        </svg>
                        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 text-gray-800 transform group-hover:scale-105 transition-transform">
                            <span className="font-display font-bold text-lg">{dish.ingredients[3].name}</span>
                        </div>
                    </div>
                </div>
            
            </div>
            
             {/* Title for Mobile (Below image) / Desktop (Top centered absolute) */}
             <div className="absolute top-8 left-0 right-0 text-center z-20 pointer-events-none mt-10 md:mt-0">
                  <h1 className="text-4xl md:text-7xl font-display font-bold text-white drop-shadow-lg tracking-tight">
                    {dish.title.split(' ')[0]}
                  </h1>
                  <div className="flex justify-center gap-2 mt-2">
                     <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                        Human Grade
                     </span>
                     <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                        Vet Approved
                     </span>
                  </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 relative z-20">
         <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column: Ingredients */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-10 border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-sage/10 p-3 rounded-full text-sage-dark">
                            <Utensils className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-800">
                            Full Ingredient List
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {dish.ingredients.map((ing, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-sage" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg mb-1">{ing.name}</h4>
                                    <p className="text-sm text-gray-500 leading-snug">{ing.benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Analysis & Guide */}
            <div className="space-y-8">
                {/* Price Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-sage/10 p-3 rounded-full text-sage-dark">
                            <Tag className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-800">
                            Recipe Price
                        </h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-display font-bold text-sage">₹{dish.price}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">per 300g pack</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 italic leading-relaxed">
                        Prices may vary based on custom bases selected during checkout.
                    </p>
                </div>

                {/* Guaranteed Analysis */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-display font-bold text-gray-800 leading-none">
                                Nutritional Profile
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-widest">
                                values per 100g serving
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group">
                           <div className="flex justify-between items-end mb-2">
                              <span className="font-bold text-gray-400 uppercase text-xs tracking-wider">Protein (min)</span>
                              <span className="font-display font-bold text-2xl text-gray-800">{dish.protein}</span>
                           </div>
                           <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-sage h-3 rounded-full w-[80%] group-hover:scale-x-105 origin-left transition-transform duration-500"></div>
                           </div>
                        </div>

                        <div className="group">
                           <div className="flex justify-between items-end mb-2">
                              <span className="font-bold text-gray-400 uppercase text-xs tracking-wider">Fat (min)</span>
                              <span className="font-display font-bold text-2xl text-gray-800">{dish.fat}</span>
                           </div>
                           <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-yellow-400 h-3 rounded-full w-[40%] group-hover:scale-x-105 origin-left transition-transform duration-500"></div>
                           </div>
                        </div>

                        <div className="group">
                           <div className="flex justify-between items-end mb-2">
                              <span className="font-bold text-gray-400 uppercase text-xs tracking-wider">Fiber (max)</span>
                              <span className="font-display font-bold text-2xl text-gray-800">{dish.fiber}</span>
                           </div>
                           <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-green-400 h-3 rounded-full w-[20%] group-hover:scale-x-105 origin-left transition-transform duration-500"></div>
                           </div>
                        </div>
                    </div>
                </div>

                {/* Feeding Guide */}
                <div className="bg-sage-dark text-white rounded-[2.5rem] shadow-xl p-8 relative overflow-hidden">
                    <Heart className="absolute -top-4 -right-4 w-24 h-24 text-white/10" />
                    
                    <h3 className="text-xl font-display font-bold mb-4 relative z-10">Feeding Guide</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6 relative z-10">
                        Feed <strong>2-3%</strong> of your dog's ideal body weight daily. For puppies or highly active dogs, this may increase to 4-5%.
                    </p>

                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 relative z-10">
                        <div className="flex items-start gap-3">
                            <Sprout className="w-5 h-5 flex-shrink-0 mt-0.5 text-sage-light" />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-sage-light mb-1">Pro Tip</p>
                                <p className="text-xs text-white">Transition slowly over 7 days to avoid tummy upsets.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 relative z-10 text-center">
                        <button 
                          onClick={() => setIsChatOpen(true)}
                          className="inline-flex items-center justify-center gap-2 w-full bg-white text-sage-dark py-3 rounded-xl font-bold hover:bg-cream transition-colors shadow-sm"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Ask a Nutritionist
                        </button>
                    </div>
                </div>
            </div>

         </div>
      </div>

      {/* Persistent ChatBot */}
      <ChatBot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        initialContext={dish.title}
      />
      
      {/* Floating Chat Trigger (When closed) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-sage text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-slow"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default DishDetail;