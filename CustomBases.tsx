import React from 'react';
// Explicitly importing Link from react-router-dom
import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout, Tag, MessageSquare, Instagram } from 'lucide-react';
import type { BaseOption } from '../types';

const baseOptions: BaseOption[] = [
  {
    id: 'millet',
    title: 'Foxtail Millets',
    tag: '100% Grain-Free Seed',
    description: 'Extremely high in fiber and minerals. Foxtail millets help prevent constipation and support a healthy gut.',
    bestFor: 'DIGESTION & HEART HEALTH',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/17432/17432623.png',
    pricing: '+₹20 per 500g'
  },
  {
    id: 'brown-rice',
    title: 'Premium Brown Rice',
    tag: 'Whole Grain Power',
    description: 'Unlike white rice, brown rice retains its bran layer, providing essential B-vitamins and magnesium.',
    bestFor: 'EVERYDAY VITALITY',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3828/3828113.png',
    pricing: 'Free (Included)'
  },
  {
    id: 'quinoa',
    title: 'Superseed Quinoa',
    tag: 'Complete Protein',
    description: "Technically a seed, it's a complete protein containing all amino acids. Perfect for muscle repair.",
    bestFor: 'ACTIVE & ATHLETIC PUPS',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/11854/11854449.png',
    pricing: '+₹50 per 500g'
  },
  {
    id: 'veggies',
    title: 'Vegetable Mash',
    tag: 'Starch-Free Base',
    description: 'No grains or seeds. We replace the rice portion with double helpings of Sweet Potato and Pumpkin.',
    bestFor: 'SENSITIVE ALLERGIES',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1152/1152434.png',
    pricing: '+₹30 per 500g'
  }
];

const CustomBases: React.FC = () => {
  return (
    <>
      {/* Hero Header */}
      <header className="relative bg-sage pt-32 pb-24 px-6 overflow-hidden text-center text-white">
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors backdrop-blur-md bg-black/10 px-4 py-2 rounded-full">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
          </Link>
        </div>

        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-sage-light rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-white rounded-full blur-2xl opacity-10 animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-6">
             <Sprout className="w-4 h-4 text-white" />
             <span className="text-xs font-bold uppercase tracking-widest">Customization</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-sm">
            A Better Foundation <br/><span className="text-sage-light">For Health</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            White rice is great for sensitive stomachs, but we know many pet
            parents want more nutrition. Whether you prefer gluten-free millets or
            high-fiber brown rice, we customize every meal to your preference.
          </p>
        </div>
      </header>

      {/* Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {baseOptions.map((base) => (
            <div
              key={base.id}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-24 flex items-center justify-center mb-6">
                 <img
                    src={base.iconUrl}
                    className="w-20 object-contain drop-shadow-md"
                    alt={base.title}
                  />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">{base.title}</h3>
              <p className="text-[10px] font-bold text-sage uppercase tracking-widest mb-4 bg-sage/10 py-1 px-2 rounded-lg inline-block self-center">
                {base.tag}
              </p>

              {/* Pricing Section */}
              <div className="mb-6 flex items-center justify-center gap-2">
                 <div className="bg-amber-50 text-amber-600 p-1.5 rounded-lg">
                    <Tag className="w-3.5 h-3.5" />
                 </div>
                 <span className="text-xs font-bold text-gray-700 tracking-tight">{base.pricing}</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {base.description}
              </p>
              
              <div className="mt-auto border-t border-gray-100 pt-4">
                 <span className="text-[10px] text-gray-400 font-bold block mb-1">BEST FOR</span>
                 <span className="text-xs font-bold text-gray-600 tracking-wide">{base.bestFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Summary List */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-gray-800 mb-8 text-center">Custom Base Pricing</h3>
          <div className="grid sm:grid-cols-2 gap-6">
             <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <span className="font-bold text-gray-700">Premium Brown Rice</span>
                <span className="text-sage font-bold">Free (Included)</span>
             </div>
             <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <span className="font-bold text-gray-700">Foxtail Millets</span>
                <span className="text-gray-900 font-bold">+₹20 per 500g</span>
             </div>
             <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <span className="font-bold text-gray-700">Superseed Quinoa</span>
                <span className="text-gray-900 font-bold">+₹50 per 500g</span>
             </div>
             <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <span className="font-bold text-gray-700">Grain-Free (Extra Veggies)</span>
                <span className="text-gray-900 font-bold">+₹30 per 500g</span>
             </div>
          </div>
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-8">
             *Prices apply as add-ons to the base meal cost
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 border border-sage/20 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">How to switch your base?</h3>
          <p className="max-w-xl mx-auto mb-8 text-gray-600 text-lg">
            It's simple! Reach out to us and let us know which base your dog prefers: <br/>
            <strong className="text-sage-dark">Foxtail Millet, Brown Rice, Quinoa, or Extra Veggies.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#1faa53] transition-all hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" /> Request on WhatsApp
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" /> Request on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomBases;