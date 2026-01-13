
import React, { useState } from 'react';
// Explicitly importing Link from react-router-dom
import { Link } from 'react-router-dom';
import { type FaqCategory } from '../types';
import { MessageCircle, Plus, Minus, HelpCircle, PawPrint, ArrowLeft } from 'lucide-react';

const faqData: FaqCategory[] = [
  {
    
    title: 'Feeding & Transitioning',
    items: [
      {
        question: 'How do I switch my dog from kibble?',
        answer: 'A 7-day slow transition is best. Start with 25% Fresh Bowl and 75% current food. Increase the fresh portion by 25% every 2 days until you are feeding 100% fresh.'
      },
      {
        question: 'Should I serve the food hot or cold?',
        answer: 'Room temperature is best. You can warm it slightly in a pan or with warm water to release aromas, but avoid high microwave heat to keep nutrients alive.'
      },
      {
        question: 'How much should I feed my dog?',
        answer: 'Usually 2-3% of their ideal body weight daily. For puppies, it is higher (4-5%). We will calculate the exact portion for you on WhatsApp based on your dog\'s age, weight, and activity levels.'
      },
      {
        question: 'My dog is a very picky eater. What if he does not like it?',
        answer: 'Fresh food is naturally much more aromatic and tasty than dry biscuits. Most picky eaters dive right in! If your dog is extra cautious, we suggest starting with our Chicken & Veggies—it’s the most popular "starter" meal.'
      },{
        question: 'Will my dogs "poop" change?',
        answer: 'Yes! You will likely notice smaller, firmer, and less smelly stools. This is a great sign—it means your dog is actually absorbing the nutrients in the food rather than passing "fillers" out as waste.'
      }
    ]
  },
  {
    title: 'Ingredients & Quality',
    items: [
      {
        question: 'Are your ingredients "Human-Grade"?',
        answer: 'Absolutely. We source our meats and veggies from the same markets as you. We do not use "by-products", "feed-grade" meat, or slaughterhouse waste.'
      },
      {
        question: 'Is the food cooked or raw?',
        answer: 'We lightly cook our meals. This makes them safer by eliminating pathogens like Salmonella and E. coli, while making the nutrients much easier for most dogs to digest compared to raw diets.'
      },
      {
        question: 'Can I customize for allergies?',
        answer: 'Yes, customization is our specialty. We can remove specific ingredients (like chicken or eggs) or swap the carbohydrate base to Foxtail Millets or Quinoa for sensitive pups.'
      },
      {
        question: 'Do I need to add any multivitamins to these meals?',
        answer: 'Our meals are naturally rich in nutrients. However, for long-term feeding, we include natural boosters like Ground Eggshells (Calcium) and Turmeric. If your dog has a specific deficiency, we can further customize the mix with your vets recommendation.'
      }
    ]
  },
  {
    title: 'Storage & Logistics',
    items: [
      {
        question: 'How long does it last in Hyderabad heat?',
        answer: 'We deliver in temperature-controlled insulated bags. Once received, because our food is 100% natural, it lasts 3 days in the fridge and up to 2 weeks in the freezer.'
      },
      {
        question: 'Can I pause my subscription during vacation?',
        answer: 'Yes! Just give us a 24-hour notice via WhatsApp and we will pause your delivery immediately. We can resume whenever you are back.'
      }
    ]
  }
];

const FAQ: React.FC = () => {
  // Store open state as "categoryIndex-itemIndex"
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-cream min-h-screen">
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
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-sage-light rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
        <PawPrint className="absolute top-20 left-[10%] text-white/10 w-16 h-16 -rotate-12 animate-pulse" />
        <PawPrint className="absolute bottom-10 right-[10%] text-white/10 w-24 h-24 rotate-12" />

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full mb-6">
             <HelpCircle className="w-4 h-4 text-white" />
             <span className="text-xs font-bold uppercase tracking-widest">Support Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-sm">
            Questions? <br/><span className="text-sage-light">We've Got Answers.</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transitioning to fresh food is the best decision for your dog, but we know you have questions. Here is everything you need to know.
          </p>
        </div>
      </header>

      {/* FAQ Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto -mt-12 relative z-20">
        {faqData.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h3 className="flex items-center gap-3 text-2xl font-display font-bold text-gray-800 mb-6 ml-2">
               <span className="bg-sage/10 text-sage p-2 rounded-lg">
                  {catIdx === 0 ? '🥘' : catIdx === 1 ? '🥕' : '🚚'}
               </span>
               {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.items.map((item, itemIdx) => {
                const isOpen = openIndex === `${catIdx}-${itemIdx}`;
                return (
                  <div 
                    key={itemIdx} 
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-sage shadow-lg scale-[1.01]' : 'border-gray-100 shadow-sm hover:border-sage/50'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(`${catIdx}-${itemIdx}`)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`font-bold text-lg ${isOpen ? 'text-sage-dark' : 'text-gray-700'}`}>
                        {item.question}
                      </span>
                      <span className={`ml-4 flex-shrink-0 p-2 rounded-full transition-colors ${isOpen ? 'bg-sage text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Bottom Box */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 text-center shadow-xl relative overflow-hidden group">
            
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <MessageCircle className="w-8 h-8" />
                </div>
                
                <h4 className="text-3xl font-display font-bold text-gray-800 mb-4">
                  Still have a query?
                </h4>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto">
                  Every dog is unique. Whether it's a specific allergy, a picky eater, or delivery logistics, we are here to chat personally.
                </p>
                
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1faa53] hover:scale-105 transition-all shadow-lg shadow-green-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
