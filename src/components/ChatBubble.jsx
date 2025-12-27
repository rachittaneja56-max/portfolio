import { useState } from "react";
import ChatAssistant from "./ChatWindow";


export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className=" fixed bottom-6 right-6
                   bg-[#0b0b0b] text-gray-200
                   px-5 py-3 rounded-full
                   border border-[#1f1f1f]
                   shadow-lg
                   hover:bg-[#111]
                   transition
                   z-50 cursor-pointer"
      >
        {open ? "Close" : "Rachit's Assistant"}
      </button>
      {open && (
        <div
          className="fixed bottom-20 right-6
                     w-[360px] h-[520px]
                     bg-[#0b0b0b]
                     border border-[#1f1f1f]
                     rounded-xl
                     shadow-2xl
                     z-50
                     overflow-hidden
                     flex flex-col"
        >
          <ChatAssistant/>
        </div>
      )}
    </>
  );
}
