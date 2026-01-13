import React, { useState } from 'react';
import { ShoppingBasket, CalendarDays, MessageSquare, Truck, Heart, RefreshCw, ArrowLeft, PawPrint, ShieldCheck, Instagram, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../components/QuoteModal';

const steps = [
  { step: 1, title: "Select Your Plan", desc: "Choose based on your dog's size, breed and dietary needs.", icon: <ShoppingBasket className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" },
  { step: 2, title: "Frequency & Quantity", desc: "Choose weekly, bi-weekly, or monthly deliveries.", icon: <CalendarDays className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
  { step: 3, title: "Set Up Subscription", desc: "Send your shipping address via WhatsApp or Instagram.", icon: <MessageSquare className="w-6 h-6" />, color: "bg-green-100 text-green-600" },
  { step: 4, title: "Receive Deliveries", desc: "We pack meals fresh and deliver directly to you in Hyderabad.", icon: <Truck className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
  { step: 5, title: "Enjoy Convenience", desc: "No more running out of food or frequent store trips.", icon: <Heart className="w-6 h-6" />, color: "bg-red-100 text-red-600" },
  { step: 6, title: "Manage Subscription", desc: "Pause, adjust, or cancel anytime with one simple message.", icon: <RefreshCw className="w-6 h-6" />, color: "bg-sage/20 text-sage-dark" }
];

const HowItWorks: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-sage pt-32 pb-24 px-6 overflow-hidden text-center text-white">
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors backdrop-blur-md bg-black/10 px-4 py-2 rounded-full">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
          </Link>
        </div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-sage-light rounded-full blur-3xl opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-6">
             <PawPrint className="w-4 h-4 text-white" />
             <span className="text-xs font-bold uppercase tracking-widest">Our Simple Process</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-sm">
            From Bowl <br/><span className="text-sage-light">To Tail-Wag.</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Getting fresh, human-grade food delivered should be the easiest part of your day. We've simplified the journey so you can focus on the cuddles.
          </p>
        </div>
      </header>

      {/* Steps Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div key={item.step} className="group relative flex flex-col h-full">
              <div className="bg-white p-10 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col items-center lg:items-start w-full relative h-full hover:-translate-y-3">
                 <div className="absolute -top-4 -right-4 bg-sage-dark text-white w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                    {item.step}
                 </div>
                 <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-inner`}>
                    {item.icon}
                 </div>
                 <h4 className="text-2xl font-display font-bold mb-4 text-gray-900 group-hover:text-sage-dark transition-colors">
                    {item.title}
                 </h4>
                 <p className="text-gray-500 leading-relaxed text-sm">
                    {item.desc}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* Health Concerns / Vet Records Section */}
        <div className="mt-24 max-w-4xl mx-auto">
           <div className="bg-cream/40 border-2 border-sage/20 rounded-[3.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 text-sage/10 w-48 h-48 -rotate-12 transition-transform group-hover:rotate-0">
                 <ShieldCheck className="w-full h-full" />
              </div>
              <div className="bg-white w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-sage flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                 <FileText className="w-10 h-10" />
              </div>
              <div className="text-center md:text-left relative z-10">
                 <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">Specialized Care for Unique Pups</h3>
                 <p className="text-gray-600 leading-relaxed mb-4">
                    If your dog has specific health concerns or allergies, we are here to listen. While ordering, you can share these concerns with us and even <strong className="text-sage-dark">upload your vet's records</strong>.
                 </p>
                 <p className="text-gray-600 leading-relaxed">
                    Our team will review the details to devise a <strong className="text-sage-dark">100% custom meal plan</strong> that caters specifically to your pup's needs.
                 </p>
              </div>
           </div>
        </div>

        {/* Action Bar */}
        <div className="mt-12 text-center">
           <div className="inline-block bg-sage/5 p-4 rounded-[3.5rem] shadow-sm">
              <div className="bg-white border border-sage/10 rounded-[3rem] px-8 md:px-12 py-10 flex flex-col items-center gap-8 shadow-sm">
                 <div className="text-center">
                    <h5 className="font-display font-bold text-3xl text-gray-800 mb-2">Ready to order?</h5>
                    <p className="text-gray-500 max-w-md mx-auto">Every plan is tailored to your pup's unique health profile and energy needs.</p>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <a 
                      href="https://wa.me/91XXXXXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1faa53] text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
                    >
                       <MessageSquare className="w-6 h-6" />
                       Order on WhatsApp
                    </a>
                    <a 
                      href="https://instagram.com/yourhandle" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-tr from-purple-600 to-pink-500 hover:opacity-90 text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1"
                    >
                       <Instagram className="w-6 h-6" />
                       Order on Instagram
                    </a>
                 </div>

                 <button 
                    onClick={() => setIsQuoteOpen(true)} 
                    className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] hover:text-sage transition-colors underline underline-offset-8 mt-4"
                 >
                    or calculate a plan first
                 </button>
              </div>
           </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default HowItWorks;