import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";

import formalAsset from "@/assets/formal.png";
import { skillCategories, projects } from "@/lib/portfolio-data";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-msg",
    role: "assistant",
    content:
      "👋 Hi! I'm **Khurt's AI assistant**. Ask me anything about Khurt's **skills**, **projects**, **education**, or **data analytics journey**!",
  },
];

const QUICK_PROMPTS = [
  "What are Khurt's core skills?",
  "Tell me about ACMES CORE",
  "What projects has Khurt built?",
  "Education & background",
  "How can I contact Khurt?",
];

function generateReply(question: string): string {
  const q = question.toLowerCase().trim();

  if (q.includes("acmes") || q.includes("capstone") || q.includes("construction")) {
    const acmes = projects[0];
    return `### ${acmes.title}\n**Role:** ${acmes.role} (${acmes.year})\n\n${acmes.description}\n\n**Tech Stack:** ${acmes.tech.join(", ")}\n\n**Key Highlights:**\n- Critical Path Method (CPM) schedule analysis\n- Workforce & employee management\n- Document tracking and compliance monitoring\n- Real-time project analytics dashboard`;
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("tool") || q.includes("stack") || q.includes("know")) {
    const summary = skillCategories
      .map((cat) => `- **${cat.title}:** ${cat.skills.map((s) => s.name).join(", ")}`)
      .join("\n");
    return `Here is a snapshot of **Khurt's technical & analytical toolkit**:\n\n${summary}\n\nHe focuses on combining database management, data organization, and clean dashboard design to turn raw data into actionable insights.`;
  }

  if (q.includes("project") || q.includes("built") || q.includes("work") || q.includes("portfolio") || q.includes("case")) {
    const list = projects
      .map((p) => `- **${p.title}** (${p.category}) — *${p.tech.join(", ")}*`)
      .join("\n");
    return `Khurt has worked on **${projects.length} featured projects** spanning full-stack systems, desktop apps, and analytics UI/UX design:\n\n${list}\n\nAsk me about any specific project (like **ACMES CORE** or **Water Billing Consumption**) for more details!`;
  }

  if (q.includes("water") || q.includes("billing")) {
    const p = projects.find((proj) => proj.title.toLowerCase().includes("water"));
    if (p) {
      return `### ${p.title}\n**Category:** ${p.category} (${p.year})\n\n${p.description}\n\n- **Features:** ${p.features.join(", ")}\n- **Outcome:** ${p.outcome}`;
    }
  }

  if (q.includes("cv") || q.includes("resume") || q.includes("cert") || q.includes("award")) {
    return `### CV, Certifications & Awards\nYou can **[View & Download Khurt's CV here](/cv.pdf)** (opens in a new tab).\n\n**Certifications & Awards:**\n- 🏆 3rd Place – Startup Sundayag (2025)\n- 📜 HTML Essentials\n- 🔐 Cybersecurity Essentials\n- 🛡️ Junior Cybersecurity Analyst Career Path`;
  }

  if (q.includes("education") || q.includes("study") || q.includes("school") || q.includes("degree") || q.includes("student") || q.includes("year") || q.includes("college")) {
    return `### Education & Academic Background\n- **College:** Bachelor of Science in Information Systems — *Davao del Norte State College, Panabo City* (2023 – Present)\n- **High School:** *F. Bustamante National High School, Tibungco, Davao City* (2017 – 2023)\n- **Elementary:** *Sixto Babao Elementary School, Ilang, Davao City* (2011 – 2017)\n\nKhurt is currently a 4th-year Information Systems student focused on pursuing a professional career in **Data Analytics & Systems Analysis**.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("phone") || q.includes("linkedin") || q.includes("github")) {
    return `You can reach **Khurt Pingoy** directly through:\n\n- **Email:** [pingoykhurtr@gmail.com](mailto:pingoykhurtr@gmail.com)\n- **Phone:** 0967 823 2914\n- **Location:** Philippines\n- **LinkedIn:** [linkedin.com/in/pingoykhurtr](https://www.linkedin.com/in/pingoykhurtr/)\n- **GitHub:** [github.com/pingoykhurtr](https://github.com/pingoykhurtr)\n\nOr simply use the **Contact** form at the bottom of this page!`;
  }

  if (q.includes("goal") || q.includes("career") || q.includes("future") || q.includes("analyst") || q.includes("journey") || q.includes("experience")) {
    return `### Career Goal & Data Analytics Journey\nKhurt is an **Aspiring Data Analyst** passionate about transforming raw data into meaningful decisions.\n\n- **2023:** Built programming foundations in Java, HTML, and CSS.\n- **2024:** Expanded into database management, academic software projects, and UI/UX design (Figma, Draw.io).\n- **2025–Present:** Lead developer & system designer for **ACMES CORE** (React, Node.js, TypeScript, MySQL) while deepening data analytics and reporting skills.\n- **Goal:** Help organizations make informed, data-driven decisions through clear dashboards, SQL/Python analytics, and business reporting.`;
  }

  if (q.includes("hobby") || q.includes("interest") || q.includes("free time") || q.includes("sport") || q.includes("about") || q.includes("who is")) {
    return `**Khurt Rocaberte Pingoy** is a 4th-year BS Information Systems student and aspiring Data Analyst based in the Philippines.\n\nOutside of data and software development, he stays active playing **basketball** and **badminton**, enjoys strategy-based computer games, and values a healthy sleep cycle to stay sharp for problem-solving.`;
  }

  return `I'd love to help with that! Here are a few things you can ask me about **Khurt Pingoy**:\n\n- **Skills & Tools:** Excel, MySQL, Python, React, TypeScript, Figma, Draw.io\n- **Capstone & Projects:** ACMES CORE, Water Billing System, Dashboard Designs\n- **Background:** 4th-year BS Information Systems student & Aspiring Data Analyst\n- **Contact:** [pingoykhurtr@gmail.com](mailto:pingoykhurtr@gmail.com) or **0967 823 2914**`;
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const hasShownWelcomeRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show welcome speech bubble once when visitor first opens/refreshes the website,
  // fade in smoothly, and automatically disappear after ~6.5 seconds (within 5–8s window).
  useEffect(() => {
    if (hasShownWelcomeRef.current) return;
    hasShownWelcomeRef.current = true;

    const fadeInTimer = window.setTimeout(() => {
      setShowWelcomeBubble(true);
    }, 450);

    const fadeOutTimer = window.setTimeout(() => {
      setShowWelcomeBubble(false);
    }, 6950); // visible for 6.5 seconds

    return () => {
      window.clearTimeout(fadeInTimer);
      window.clearTimeout(fadeOutTimer);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleOpenToggle = () => {
    setShowWelcomeBubble(false);
    setIsOpen((prev) => !prev);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: generateReply(query),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 flex h-[480px] max-h-[calc(100vh-7rem)] w-[calc(100vw-2.5rem)] max-w-[370px] flex-col overflow-hidden rounded-2xl border border-[#8DBCC7]/60 bg-white text-[#111317] shadow-[0_14px_40px_-12px_rgba(17,19,23,0.18)] dark:border-[#8DBCC7]/50 dark:bg-[#1f2125] dark:text-[#d1d5db] dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.65)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#dbe4ea] bg-[#f8fafc] px-4 py-3 dark:border-[#35373b] dark:bg-[#181a1f]">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#8DBCC7] bg-[#8DBCC7]/15 shadow-sm">
                  <img
                    src={formalAsset}
                    alt="Khurt Pingoy"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold leading-tight text-[#111317] dark:text-[#d1d5db]">
                    Khurt's Assistant
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#5b6470] dark:text-[#8b929c]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8DBCC7]" />
                    Personal Portfolio AI
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset conversation"
                  title="Reset chat"
                  className="grid h-8 w-8 place-items-center rounded-full text-[#5b6470] transition-colors hover:bg-[#8DBCC7]/15 hover:text-[#111317] dark:text-[#8b929c] dark:hover:text-[#d1d5db]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="grid h-8 w-8 place-items-center rounded-full text-[#5b6470] transition-colors hover:bg-[#8DBCC7]/15 hover:text-[#111317] dark:text-[#8b929c] dark:hover:text-[#d1d5db]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="khurt-scroll flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-end gap-2 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#8DBCC7] bg-[#8DBCC7]/15 shadow-xs">
                      <img
                        src={formalAsset}
                        alt="Khurt"
                        className="h-full w-full rounded-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-[#8DBCC7] font-medium text-[#111317]"
                        : "rounded-bl-sm border border-[#dbe4ea] bg-[#f8fafc] text-[#111317] dark:border-[#35373b] dark:bg-[#181a1f] dark:text-[#d1d5db]"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="khurt-md">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#8DBCC7] bg-[#8DBCC7]/15 shadow-xs">
                    <img
                      src={formalAsset}
                      alt="Khurt"
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-[#dbe4ea] bg-[#f8fafc] px-3.5 py-3 dark:border-[#35373b] dark:bg-[#181a1f]">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8DBCC7] [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8DBCC7] [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8DBCC7]" />
                  </div>
                </div>
              )}

              {/* Quick prompt chips */}
              {messages.length <= 2 && !isTyping && (
                <div className="pt-1">
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#5b6470] dark:text-[#8b929c]">
                    Suggested questions
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleSend(prompt)}
                        className="rounded-full border border-[#8DBCC7]/50 bg-[#8DBCC7]/10 px-2.5 py-1 text-left text-[11px] font-medium text-[#111317] transition-colors hover:border-[#8DBCC7] hover:bg-[#8DBCC7]/20 dark:text-[#d1d5db]"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-[#dbe4ea] bg-[#f8fafc] p-3 dark:border-[#35373b] dark:bg-[#181a1f]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, experience…"
                className="h-9 flex-1 rounded-full border border-[#dbe4ea] bg-white px-3.5 text-xs text-[#111317] placeholder:text-[#5b6470] focus:border-[#8DBCC7] focus:outline-none dark:border-[#35373b] dark:bg-[#1f2125] dark:text-[#d1d5db] dark:placeholder:text-[#8b929c]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#8DBCC7] text-[#111317] transition-all hover:scale-105 disabled:opacity-45 disabled:hover:scale-100"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher row: Welcome Speech Bubble beside the Pill Launcher Button */}
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {showWelcomeBubble && !isOpen && (
            <motion.div
              key="welcome-speech-bubble"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, x: 10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none relative max-w-[240px] rounded-2xl border border-[#8DBCC7] bg-white px-3.5 py-2.5 text-xs leading-relaxed text-[#111317] shadow-[0_8px_24px_-8px_rgba(17,19,23,0.12),0_2px_10px_-2px_rgba(141,188,199,0.22)] sm:max-w-[280px] dark:border-[#8DBCC7] dark:bg-[#1f2125] dark:text-[#d1d5db] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.55),0_2px_10px_-2px_rgba(141,188,199,0.18)]"
            >
              <span>
                👋 Hi! I'm Khurt's AI assistant. Click{" "}
                <strong className="font-semibold text-[#111317] underline decoration-[#8DBCC7] decoration-2 underline-offset-2 dark:text-white">
                  Ask Me
                </strong>{" "}
                to learn more about my skills, projects, and experience.
              </span>
              {/* Speech bubble tail pointing right toward the launcher */}
              <span
                aria-hidden="true"
                className="absolute -right-[6px] bottom-4 h-3 w-3 rotate-45 border-r border-t border-[#8DBCC7] bg-white dark:border-[#8DBCC7] dark:bg-[#1f2125]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill-shaped Chatbot Launcher Button */}
        <button
          type="button"
          onClick={handleOpenToggle}
          aria-label="Ask Me — Open Khurt's AI portfolio assistant"
          aria-expanded={isOpen}
          className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#8DBCC7] bg-white py-1.5 pl-1.5 pr-4 text-[#111317] shadow-[0_6px_20px_-6px_rgba(17,19,23,0.12),0_2px_8px_-2px_rgba(141,188,199,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#8DBCC7] hover:shadow-[0_10px_26px_-6px_rgba(141,188,199,0.45),0_4px_12px_-4px_rgba(17,19,23,0.12)] active:scale-[0.99] dark:border-[#8DBCC7] dark:bg-[#1f2125] dark:text-[#d1d5db] dark:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.55),0_2px_10px_-2px_rgba(141,188,199,0.22)] dark:hover:shadow-[0_12px_30px_-6px_rgba(141,188,199,0.38),0_6px_16px_-4px_rgba(0,0,0,0.65)]"
        >
          {/* Circular profile avatar on the left */}
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#8DBCC7] bg-[#8DBCC7]/15 shadow-sm transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-md">
            <img
              src={formalAsset}
              alt="Khurt Pingoy"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </span>

          {/* "Ask Me" text on the right */}
          <span className="font-display text-sm font-medium tracking-tight text-[#111317] transition-colors dark:text-[#d1d5db]">
            Ask Me
          </span>
        </button>
      </div>
    </div>
  );
}
