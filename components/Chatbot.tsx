
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageCircle } from 'lucide-react';
import { getDixieResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm Hardik's AI strategist. How can I help you scale your brand today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getDixieResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button - Updated to Blue */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 text-white rounded-full shadow-[0_0_30px_rgba(79,91,255,0.4)] flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all z-40 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-[#111827] border border-white/10 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl pointer-events-none">
          Talk Strategy with AI Hardik
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[90vw] md:w-[400px] h-[600px] bg-[#0b0f14] rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10 animate-slide-up">
          {/* Header */}
          <div className="bg-[#111827] p-6 text-white flex justify-between items-center border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(79,91,255,0.3)]">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-bold tracking-tight">AI Strategist</h3>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Powered by Gemini 3</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none animate-pulse flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/5 bg-[#111827]/50">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about marketing strategy..."
                className="w-full pl-5 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-sm placeholder:text-gray-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-4 font-bold uppercase tracking-[0.3em]">
              Hardik Sonagara • Digital Strategist
            </p>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </>
  );
};

export default Chatbot;
