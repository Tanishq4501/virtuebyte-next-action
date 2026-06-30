"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { findBestFAQMatch } from "@/lib/chat";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content: "Hi! I'm your Virtuebyte assistant. How can I help you today?",
  },
];

const suggestedQuestions = [
  "Tell me about Virtuebyte",
  "What AI/ML services do you offer?",
  "How can you help with Salesforce?",
  "What cloud services do you provide?",
  "Do you offer offshore development teams?",
  "How can you help with data analytics?",
  "What products and solutions do you offer?",
  "Can I see your case studies?",
  "Do you have blogs or insights?",
  "How can I contact your team?",
];

const serviceFollowUpQuestions: Record<string, string[]> = {
  "Tell me about Virtuebyte": [
    "What services does Virtuebyte offer?",
    "Which industries does Virtuebyte work with?",
    "Where is Virtuebyte located?",
    "How long has Virtuebyte been in business?",
  ],
  "What AI/ML services do you offer?": [
    "How much does AI/ML consulting typically cost?",
    "What AI/ML technologies and platforms do you work with?",
    "How long does it take to implement an AI solution?",
    "What business outcomes can AI/ML deliver?",
    "Can AI/ML solutions integrate with our existing systems?",
  ],
  "How can you help with Salesforce?": [
    "What is included in your Salesforce implementation services?",
    "Can Salesforce be customized for our business workflows?",
    "Do you support AppExchange integrations and custom development?",
    "Do you provide post-implementation Salesforce support?",
    "How do you drive user adoption during Salesforce implementation?",
  ],
  "What cloud services do you provide?": [
    "What does your cloud consulting service include?",
    "How much does cloud migration typically cost?",
    "How long does a cloud migration project take?",
    "Which cloud platforms do you support?",
    "How do you ensure security and compliance during migration?",
  ],
  "Do you offer offshore development teams?": [
    "What is an Offshore Development Center (ODC)?",
    "How much does it cost to set up a dedicated offshore team?",
    "How do you ensure data security and IP protection?",
    "What engagement models do you offer for offshore teams?",
    "How quickly can you deploy a dedicated development team?",
  ],
  "How can you help with data analytics?": [
    "What does data analytics consulting typically cost?",
    "Which analytics tools and technologies do you use?",
    "How long does a data analytics implementation take?",
    "What business insights can data analytics provide?",
    "How do you ensure data quality and security?",
  ],
  "What products and solutions do you offer?": [
    "Can you tell me more about VirtuElite?",
    "What is VirtuNest?",
    "Do you build custom software products?",
    "Are your solutions cloud-based?",
  ],
  "Can I see your case studies?": [
    "Do you have case studies in manufacturing?",
    "Do you have examples in healthcare?",
    "Can you share finance or fintech project experience?",
    "Do you have success stories in the technology sector?",
  ],
  "Do you have blogs or insights?": [
    "Do you have blogs on the latest AI trends?",
    "Do you publish Salesforce tips and updates?",
    "Do you share cloud computing insights?",
    "Do you have content on DevOps best practices?",
  ],
  "How can I contact your team?": [
    "What are your business hours?",
    "Do you offer live chat or support assistance?",
    "Can I schedule a consultation with your team?",
    "How quickly do you respond to inquiries?",
  ],
};

async function sendMessageToApi(messages: ChatMessage[]): Promise<string> {
  try {
    const lastMessage = messages[messages.length - 1]?.content ?? "";
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: lastMessage }),
    });
    if (!response.ok) throw new Error("API request failed");
    const payload = await response.json();
    return payload.reply || "I couldn't get a response from the server.";
  } catch {
    return "I'm sorry, something went wrong. Please try again.";
  }
}

function simulateTyping(
  text: string,
  onUpdate: (partial: string) => void,
  onComplete: () => void
) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      onUpdate(text.slice(0, index + 1));
      index++;
    } else {
      clearInterval(interval);
      onComplete();
    }
  }, 50);
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [subQuestions, setSubQuestions] = useState<string[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    if (!open) setShowThankYou(false);
  };

  const endChat = () => {
    setMessages([]);
    setSubQuestions([]);
    setShowThankYou(true);
  };

  useEffect(() => {
    if (open && messages.length === 0 && !showThankYou) {
      setMessages(initialMessages);
    }
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typingText]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const match = findBestFAQMatch(messageText);
    let botReply: string;

    if (match.faq && match.confidence >= 0.6) {
      botReply = match.faq.answer;
    } else {
      botReply = await sendMessageToApi([
        ...messages,
        { role: "user", content: messageText },
      ]);
    }

    setLoading(false);
    setIsTyping(true);
    setTypingText("");

    simulateTyping(botReply, setTypingText, () => {
      setMessages((prev) => [...prev, { role: "assistant", content: botReply }]);
      setIsTyping(false);
      setTypingText("");
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    setInput("");
    handleSend(message);
  };

  const handleSuggestedQuestion = (question: string) => {
    setSubQuestions(serviceFollowUpQuestions[question] ?? []);
    handleSend(question);
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[95vw] sm:w-[340px] h-[75vh] sm:h-[500px] flex flex-col rounded-[16px] border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">

          {/* HEADER */}
          <div className="flex items-center justify-between bg-primary px-4 py-3 rounded-t-[16px]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-[14px] font-semibold text-white">VirtueByte Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={endChat}
                className="text-xs bg-white/15 hover:bg-white/25 px-2 py-1 rounded transition-colors"
              >
                End Chat
              </button>
              <button
                onClick={toggleOpen}
                className="rounded-full bg-white/15 px-2 py-1 hover:bg-white/25 text-white transition-colors"
              >
                ×
              </button>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line ${
                  m.role === "assistant"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "ml-auto bg-primary text-white max-w-[85%]"
                }`}
              >
                {m.content}
              </div>
            ))}

            {isTyping && (
              <div className="rounded-2xl bg-white px-4 py-3 text-[13px] text-slate-600 shadow-sm whitespace-pre-line leading-relaxed">
                {typingText}
                <span className="animate-pulse">▌</span>
              </div>
            )}

            {showThankYou && (
              <div className="flex items-center justify-center h-full text-center text-[13px] text-slate-600 py-8">
                <div>
                  <div className="text-2xl mb-2">🙌</div>
                  <div className="text-base font-semibold text-slate-800 mb-1">Thank You!</div>
                  <div className="mb-4 text-slate-500">
                    Your chat has ended. Feel free to start again anytime.
                  </div>
                  <button
                    onClick={() => {
                      setShowThankYou(false);
                      setMessages(initialMessages);
                    }}
                    className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
                  >
                    Start New Chat
                  </button>
                </div>
              </div>
            )}

            <div ref={messageEndRef} />
          </div>

          {/* QUICK QUESTIONS */}
          {messages.length > 0 && !isTyping && !showThankYou && (
            <div className="px-4 py-3 border-t border-slate-200 bg-white max-h-[190px] overflow-y-auto">
              {subQuestions.length > 0 && (
                <div className="mb-3">
                  <p className="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                    Related questions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-[12px] bg-slate-100 hover:bg-slate-200 rounded-full px-3 py-1.5 text-slate-800 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                Quick questions
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestedQuestion(q)}
                    className="text-[12px] bg-slate-100 hover:bg-slate-200 rounded-full px-3 py-1.5 text-slate-800 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* INPUT */}
          {!showThankYou && (
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-slate-200 bg-white px-4 py-3 rounded-b-[16px]"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                disabled={loading || isTyping}
                className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-[13px] text-black disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={loading || isTyping}
                className="rounded-2xl bg-primary px-4 py-2 text-white text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                {loading ? "..." : "Send"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <button
          onClick={toggleOpen}
          className="h-14 w-14 rounded-full bg-primary text-white shadow-2xl hover:scale-105 transition-transform flex items-center justify-center text-2xl"
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
}
