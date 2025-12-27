import { useState,useRef,useEffect } from "react";
import ReactMarkdown from "react-markdown";
const API_URL = import.meta.env.VITE_API_URL;

export default function ChatAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setAnswer("Unable to reach the assistant right now.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askQuestion();
    }
  };

  return (
    <div className="flex flex-col h-full text-[#e5e5e5]">
      <div className="px-4 py-3 border-b border-[#1f1f1f]">
        <p className="text-xs tracking-widest text-gray-400">
          PORTFOLIO ASSISTANT
        </p>
      </div>
      <div className="flex-1 px-4 py-3 overflow-y-auto text-sm leading-relaxed">
        {answer ? (
          <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        ) : (
          <p className="text-gray-500">
            Ask about my projects, skills, or experience.
          </p>
        )}
      </div>
      <div className="px-4 py-3 border-t border-[#1f1f1f]">
        <textarea
          className="w-full bg-[#111]
                     border border-[#1f1f1f]
                     rounded-md p-2 text-sm
                     resize-none
                     text-[#e5e5e5]
                     placeholder-gray-500
                     focus:outline-none focus:border-gray-500"
          rows={2}
          placeholder="Type a question…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={askQuestion}
          disabled={loading}
          className="mt-2 w-full
                     text-sm text-gray-300
                     border border-[#1f1f1f]
                     rounded-md py-2
                     hover:bg-[#111]
                     disabled:opacity-50"
        >
          {loading ? "Thinking…" : "Ask"}
        </button>
      </div>
    </div>
  );
}
