import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { X, Send, PawPrint, Loader2 } from 'lucide-react';
import { menuItems } from '../data';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose, initialContext }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Initialize AI only when needed to get the latest key
  const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = initialContext 
        ? `Hi there! I'm your Fresh Bowl Nutritionist. 

I see you're interested in our ${initialContext}. 

How can I help you with your dog's diet today?`
        : `Hi! I'm the Fresh Bowl Nutrition Expert. 

Whether you have questions about transitioning from kibble, allergies, or our specific recipes, I'm here to help! 

What's on your mind?`;
      
      setMessages([{ role: 'model', text: welcomeMsg }]);
    }
  }, [isOpen, initialContext, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = getAI();
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are a Senior Canine Nutritionist for "The Fresh Bowl", a homemade dog food company in Hyderabad. 

FORMATTING RULES:
1. NEVER use asterisks (*) or stars for bolding or lists. 
2. NEVER provide answers in a single long paragraph. 
3. ALWAYS break your response into multiple short, readable paragraphs (2-3 sentences maximum per paragraph).
4. Use plain text for emphasis (like ALL CAPS for titles).
5. Use simple dashes (-) for lists.

Our Menu:
${menuItems.map(item => `- ${item.title}: ${item.description}`).join('\n')}

Key Philosophies:
- We use human-grade ingredients and 0% preservatives.
- We support custom bases like Foxtail Millets, Quinoa, and Brown Rice.
- Transition Guide: 7 days (25% increments every 2 days).
- Storage: 3 days in fridge, 2 weeks in freezer.

Tone: Professional, warm, and empathetic. Keep answers informative but avoid long blocks of text. If asked about medical emergencies, always advise seeing a vet immediately.`,
        },
      });

      const result = await chat.sendMessageStream({ message: userMsg });
      
      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { role: 'model', text: fullText };
          return newMsgs;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting to my nutrition database. \n\nCould you try asking that again in a moment?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-[100] flex flex-col w-full h-full md:w-96 md:h-[600px] bg-white md:rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="bg-sage p-6 text-white flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <PawPrint className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg leading-none">Nutrition Expert</h3>
            <span className="text-xs text-white/80">Online & Ready to Help</span>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-black/10 p-2 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-6 space-y-4 bg-cream/30 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
              msg.role === 'user' 
                ? 'bg-sage text-white rounded-tr-none' 
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
            }`}>
              {msg.text || (isLoading && i === messages.length - 1 ? <Loader2 className="w-4 h-4 animate-spin" /> : null)}
            </div>
          </div>
        ))}
        {isLoading && messages[messages.length-1].role === 'user' && (
          <div className="flex justify-start">
             <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-sage" />
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about ingredients, portion sizes..."
            className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 pr-14 text-sm focus:ring-2 focus:ring-sage/50 transition-all outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-3 bg-sage text-white rounded-xl hover:bg-sage-dark disabled:bg-gray-200 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-widest font-bold">
          Powered by Gemini AI
        </p>
      </div>
    </div>
  );
};

export default ChatBot;