
import React, { useState, useMemo } from 'react';
import { X, ArrowRight, ArrowLeft, Calculator, MessageSquare,  Utensils, Info, Zap } from 'lucide-react';
import { menuItems } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuoteData {
  pupName: string;
  breed: string;
  ageStage: 'puppy' | 'adult' | 'senior';
  activityLevel: 'low' | 'moderate' | 'high';
  weight: number;
  mealType: string;
  mealsPerDay: number;
  frequency: 'weekly' | 'bi-weekly' | 'monthly';
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteData>({
    pupName: '',
    breed: '',
    ageStage: 'adult',
    activityLevel: 'moderate',
    weight: 10,
    mealType: menuItems[0].id,
    mealsPerDay: 2,
    frequency: 'monthly',
  });

 const quote = useMemo(() => {
    let multiplier = 0.025;
    if (formData.ageStage === 'puppy') multiplier = 0.045;
    else if (formData.ageStage === 'senior') multiplier = 0.020;

    if (formData.activityLevel === 'high') multiplier += 0.005;
    if (formData.activityLevel === 'low') multiplier -= 0.003;

    const gramsPerDay = formData.weight * 1000 * multiplier; 
    const gramsPerMeal = gramsPerDay / formData.mealsPerDay;
    const packsPerMeal = (gramsPerMeal / 300).toFixed(1);
    const days = formData.frequency === 'weekly' ? 7 : formData.frequency === 'bi-weekly' ? 14 : 30;
    const totalPacksRequired = Math.ceil((gramsPerDay * days) / 300);
    const selectedDish = menuItems.find(m => m.id === formData.mealType);
    const basePricePer300gPack = selectedDish?.price || 149;
    const totalCost = totalPacksRequired * basePricePer300gPack;
    
    return {
      daily: Math.round(totalCost / days),
      total: totalCost,
      gramsPerMeal: Math.round(gramsPerMeal),
      packsPerMeal: packsPerMeal,
      totalPacks: totalPacksRequired,
      days: days,
      multiplier: multiplier * 100
    };
  }, [formData]); // Recalculates only when formData changes



  

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const formatWhatsAppMessage = () => {
    const text = `Hi Fresh Bowl! I'd like a subscription for ${formData.pupName}.\n\n` +
      `🐾 Profile: ${formData.breed}, ${formData.ageStage.toUpperCase()}, ${formData.weight}kg\n` +
      `🥘 Meal: ${menuItems.find(m => m.id === formData.mealType)?.title}\n` +
      `📦 Order: ${quote?.totalPacks} x 300g Packs\n` +
      `💰 Total: ₹${quote?.total}`;
    return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative animate-scale-in">
        <div className="bg-sage p-10 text-white relative">
          <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-black/10 rounded-full transition-colors"><X className="w-6 h-6" /></button>
          <div className="flex items-center gap-5">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20"><Calculator className="w-8 h-8" /></div>
            <div>
              <h2 className="text-3xl font-display font-bold">Nutrition Plan</h2>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-1">Step {step} of 3</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Pup's Name</label>
                  <input type="text" placeholder="Buddy" className="w-full bg-gray-50 rounded-2xl p-4 outline-none font-medium" value={formData.pupName} onChange={e => setFormData({...formData, pupName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Breed</label>
                  <input type="text" placeholder="Beagle" className="w-full bg-gray-50 rounded-2xl p-4 outline-none font-medium" value={formData.breed} onChange={e => setFormData({...formData, breed: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Life Stage</label>
                  <div className="flex gap-2">
                    {['puppy', 'adult', 'senior'].map(s => (
                      <button key={s} onClick={() => setFormData({...formData, ageStage: s as never})} className={`flex-grow py-3 rounded-xl text-[10px] font-bold capitalize border transition-all ${formData.ageStage === s ? 'bg-sage text-white' : 'bg-white text-gray-500'}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Energy</label>
                  <div className="flex gap-2">
                    {['low', 'moderate', 'high'].map(l => (
                      <button key={l} onClick={() => setFormData({...formData, activityLevel: l as never})} className={`flex-grow py-3 rounded-xl text-[10px] font-bold capitalize border transition-all ${formData.activityLevel === l ? 'bg-sage text-white' : 'bg-white text-gray-500'}`}>{l}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Weight (kg)</label>
                <input type="number" className="w-full bg-gray-50 rounded-2xl p-5 outline-none font-display font-bold text-2xl" value={formData.weight} onChange={e => setFormData({...formData, weight: Number(e.target.value)})} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {menuItems.map(item => (
                  <button key={item.id} onClick={() => setFormData({...formData, mealType: item.id})} className={`p-4 rounded-2xl text-xs font-bold border-2 transition-all flex flex-col items-center gap-2 ${formData.mealType === item.id ? 'border-sage bg-sage/5 text-sage-dark' : 'border-gray-50'}`}>
                    <img src={item.iconUrl} className="w-8 h-8 opacity-80" alt="" />
                    {item.title.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cycle</label>
                  <select className="w-full bg-gray-50 rounded-2xl p-5 outline-none font-bold" value={formData.frequency} onChange={e => setFormData({...formData, frequency: e.target.value as never})}>
                    <option value="weekly">Every Week</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Meals / Day</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map(num => (
                      <button key={num} onClick={() => setFormData({...formData, mealsPerDay: num})} className={`py-5 rounded-2xl font-bold transition-all ${formData.mealsPerDay === num ? 'bg-sage text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}>{num}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && quote && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-1.5 rounded-full mb-4">
                   <Zap className="w-3 h-3 text-sage" />
                   <span className="text-[10px] font-bold text-sage-dark uppercase tracking-widest">Nutrition Optimized</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-800">Perfect Portions.</h3>
                <p className="text-gray-500 text-sm mt-1">Calculated for {formData.pupName}'s metabolism and activity.</p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
                 <div className="p-8 space-y-8">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                       <div className="w-24 h-24 bg-sage/5 rounded-full flex items-center justify-center border border-sage/10 flex-shrink-0">
                          <Utensils className="w-8 h-8 text-sage" />
                       </div>
                       <div className="text-center md:text-left">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Daily Serving</span>
                          <div className="flex items-baseline gap-2 mt-1">
                             <h4 className="text-4xl font-display font-bold text-gray-900">{quote.gramsPerMeal}g</h4>
                             <span className="text-gray-500 font-bold text-sm">per meal</span>
                          </div>
                          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Approx. {quote.packsPerMeal} of our 300g packs</p>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                       <div className="bg-white p-5 rounded-[2rem] border border-gray-50">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Stock Up</span>
                          <span className="text-xl font-display font-bold text-gray-800">{quote.totalPacks} Packs</span>
                       </div>
                       <div className="bg-white p-5 rounded-[2rem] border border-gray-50">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Avg Daily</span>
                          <span className="text-xl font-display font-bold text-gray-800">₹{quote.daily}</span>
                       </div>
                    </div>
                 </div>
                 <div className="bg-gray-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Subscription Total</span>
                       <div className="text-4xl font-display font-bold text-white mt-1">₹{quote.total}</div>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest">For {quote.days} Days</div>
                 </div>
              </div>

               <div className="flex items-start gap-4 p-5 bg-amber-50/50 rounded-3xl border border-amber-100/50">
                 <Info className="w-5 h-5 text-amber-600 mt-1" />
                 <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                   We suggest whole packs to ensure nutritional consistency. {formData.pupName} requires approx {quote.multiplier.toFixed(1)}% of their body weight daily.
                 </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-10 border-t border-gray-50 flex gap-4">
          {step > 1 && <button onClick={prevStep} className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2"><ArrowLeft className="w-5 h-5" /> Back</button>}
          {step < 3 ? (
            <button onClick={nextStep} disabled={step === 1 && !formData.pupName} className="flex-grow bg-sage text-white py-5 rounded-[2rem] font-bold hover:bg-sage-dark transition-all shadow-xl shadow-sage/20 flex items-center justify-center gap-2 disabled:opacity-50">Next Step <ArrowRight className="w-5 h-5" /></button>
          ) : (
            <a href={formatWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="flex-grow bg-[#25D366] text-white py-5 rounded-[2.5rem] font-bold hover:bg-[#1faa53] transition-all shadow-2xl flex items-center justify-center gap-3 text-lg"><MessageSquare className="w-6 h-6" /> Start Subscription</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
