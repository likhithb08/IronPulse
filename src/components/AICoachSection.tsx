/* REPLACE THIS WITH YOUR N8N WEBHOOK / CHAT WIDGET */
// Connect your n8n AI agent webhook or embed code here
//
// Example n8n Integration snippet:
// <iframe src="https://your-n8n-instance.app/webhook/ironpulse-agent" className="w-full h-full border-0" />
// or initialize `@n8n/chat` bundle here.

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Settings, RefreshCw, Check, AlertCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export const AICoachSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: 'Hey athlete! I am PulseAI, your 24/7 strength & nutrition intelligence coach powered by n8n. Whether you need a hypertrophy split, macro calculation, or recovery strategy, what are we building today?',
      timestamp: 'Just now',
      suggestions: [
        'Build a 4-day Upper/Lower hypertrophy split',
        'Calculate my protein & macro requirements',
        'Best warm-up for heavy squats',
        'Post-workout recovery protocol for sore legs'
      ]
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState('');
  const [useLiveWebhook, setUseLiveWebhook] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle simulated responses or dispatch to n8n Webhook
  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // If user configured a live n8n webhook, attempt calling it
    if (useLiveWebhook && n8nWebhookUrl) {
      try {
        const response = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, timestamp: new Date().toISOString() })
        });
        if (response.ok) {
          const data = await response.json();
          const replyText = data.output || data.text || data.response || JSON.stringify(data);
          setMessages((prev) => [
            ...prev,
            {
              id: `ai-${Date.now()}`,
              sender: 'ai',
              text: replyText,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsTyping(false);
          return;
        }
      } catch (err) {
        console.warn('n8n Webhook error, falling back to simulated coach:', err);
      }
    }

    // Default intelligent simulated coach responses
    setTimeout(() => {
      let aiReply = '';
      const lower = text.toLowerCase();

      if (lower.includes('hypertrophy') || lower.includes('split') || lower.includes('routine')) {
        aiReply = `Here is our tested IronPulse 4-Day Power-Hypertrophy Split:
• Day 1 (Upper Heavy): Barbell Bench Press (4x5), Barbell Pendlay Row (4x6), Standing Overhead Press (3x8), Weighted Dips (3x10).
• Day 2 (Lower Heavy): Competition Squat (4x5), Romanian Deadlift (4x8), Bulgarian Split Squat (3x10/leg), Standing Calf Raises (4x15).
• Day 3: Rest & Contrast Sauna / Cold Plunge.
• Day 4 (Upper Volume): Incline Dumbbell Press (4x10-12), Neutral Grip Lat Pulldown (4x10), Cable Lateral Raises (4x15), Incline Bicep Curls (3x12).
• Day 5 (Lower Volume): Barbell Deadlift (3x5), Hack Squat or Leg Press (4x10-12), Hamstring Curls (4x12), Hanging Leg Raises (4x15).
Aim to increase weight or reps every single week (progressive overload).`;
      } else if (lower.includes('protein') || lower.includes('macro') || lower.includes('diet') || lower.includes('calculate')) {
        aiReply = `For optimal muscular protein synthesis and lean tissue recovery:
1. Protein Target: 0.8g – 1.0g per lb of target bodyweight (e.g. 180g for a 180 lb athlete), distributed across 4-5 meals containing ~35-40g each to stimulate muscle mTOR.
2. Carbohydrates: 1.5g – 2.5g per lb depending on your training volume. Prioritize jasmine rice, oats, and sweet potatoes around your lifting windows.
3. Healthy Fats: 0.3g – 0.4g per lb for testosterone and joint lubrication.
Would you like a personalized daily calorie breakdown based on your exact body weight and target?`;
      } else if (lower.includes('squat') || lower.includes('warm') || lower.includes('technique')) {
        aiReply = `Here is Marcus Vance’s IronPulse Olympic Squat Primer (8 minutes):
1. 90/90 Hip Flow: 10 reps each side for hip capsule clearance.
2. Ankle Dorsiflexion Banded Mobilization: 60s per ankle to allow a vertical torso.
3. World's Greatest Stretch: 5 reps with thoracic rotation.
4. Barbell Warmup Ladder: Empty bar x 10 → 40% x 5 → 60% x 3 → 80% x 1 → Working Sets.
Cue: 'Screw your feet into the floor, brace 360° into your abdominal wall, and drive knees outward on the ascent.'`;
      } else if (lower.includes('recovery') || lower.includes('sore') || lower.includes('sauna') || lower.includes('plunge')) {
        aiReply = `To flush lactate and lower systemic CNS fatigue:
• Contrast Protocol: 15 minutes in our 195°F cedar infrared sauna → 3 minutes in the 42°F cold plunge pool → Repeat 2-3 cycles.
• Sleep & Hydration: Minimum 7.5 hours of slow-wave sleep. Drink 16 oz of water with 500mg sodium and potassium immediately post-training.
• Active Recovery: 20 minutes on the assault bike at Zone 2 cardio (HR 120-135 bpm) to promote capillary blood flow into sore muscle bellies.`;
      } else {
        aiReply = `Great question! At IronPulse, we approach this through the lens of progressive overload and biomarker optimization. For your specific goal, we recommend logging your weights in our athlete portal, ensuring at least 1g of protein per pound of lean body mass, and maintaining strict eccentric control on your compound lifts. Would you like me to tailor a specific program or connect you with Coach Marcus for a 1-on-1 assessment?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleTestWebhook = async () => {
    if (!n8nWebhookUrl) return;
    setWebhookStatus('testing');
    try {
      const res = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'ping_test', timestamp: new Date().toISOString() })
      });
      if (res.ok) {
        setWebhookStatus('success');
      } else {
        setWebhookStatus('error');
      }
    } catch {
      setWebhookStatus('error');
    }
  };

  return (
    <section id="ai-coach" className="py-24 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/15 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Fitness Coach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            AI FITNESS COACH
          </h2>
          <p className="text-neutral-400 text-base mt-3">
            Chat with our AI trainer powered by n8n. Get instant workout adjustments, nutritional calculations, and recovery protocols customized to your routine.
          </p>
        </div>

        {/* Chat Widget Container */}
        {/*
          =======================================================
          /* REPLACE THIS WITH YOUR N8N WEBHOOK / CHAT WIDGET * /
          Connect your n8n AI agent webhook or embed code here.
          To embed an official n8n chat widget directly:
          <iframe src="YOUR_N8N_CHAT_URL" className="w-full h-[600px] border-0" />
          =======================================================
        */}
        <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[650px] relative">
          {/* Chat Header Bar */}
          <div className="p-4 sm:px-6 bg-[#181818] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#181818]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">PulseAI Trainer</h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    Powered by n8n
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {useLiveWebhook ? 'Connected to live n8n webhook' : 'Ready for coaching queries'}
                </p>
              </div>
            </div>

            {/* Config & Integration Drawer Toggle */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/10 hover:border-white/20 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
              title="Configure n8n Agent Webhook"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">n8n Config</span>
            </button>
          </div>

          {/* Optional n8n Webhook Settings Drawer */}
          {showSettings && (
            <div className="p-4 bg-[#141414] border-b border-white/10 text-xs animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-neutral-200">Connect n8n AI Agent</span>
                <span className="text-neutral-400">/* REPLACE WITH YOUR N8N WEBHOOK */</span>
              </div>
              <p className="text-neutral-400 mb-3">
                Paste your n8n Production Webhook URL below to route chat queries straight to your custom n8n LLM workflow:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <input
                  type="url"
                  placeholder="https://your-n8n-domain.com/webhook/ironpulse-chat"
                  value={n8nWebhookUrl}
                  onChange={(e) => setN8nWebhookUrl(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleTestWebhook}
                  disabled={!n8nWebhookUrl || webhookStatus === 'testing'}
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {webhookStatus === 'testing' ? 'Testing...' : 'Test Ping'}
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
                    type="checkbox"
                    checked={useLiveWebhook}
                    onChange={(e) => setUseLiveWebhook(e.target.checked)}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span>Route all chat messages through this live n8n webhook</span>
                </label>

                {webhookStatus === 'success' && (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Webhook Verified
                  </span>
                )}
                {webhookStatus === 'error' && (
                  <span className="text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Webhook unreachable (using simulation)
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%]`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-orange-600 text-white rounded-tr-xs'
                        : 'bg-neutral-800/90 text-neutral-200 border border-white/10 rounded-tl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className={`text-[10px] text-neutral-400 mt-1 block ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </span>

                  {/* Suggestion Chips */}
                  {msg.suggestions && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(sug)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-orange-500/40 hover:bg-neutral-800 transition-all text-left cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-neutral-800/90 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Field */}
          <div className="p-3 sm:p-4 bg-[#181818] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about workout splits, macros, recovery, or form..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="p-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white transition-all disabled:opacity-40 disabled:hover:bg-orange-600 glow-orange-sm cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-2 text-center text-[10px] text-neutral-400">
              Integrate with your n8n webhook or custom AI agent workflow via the config menu.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
