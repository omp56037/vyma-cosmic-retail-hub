
import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function HeroCTAs() {
  const [email, setEmail] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  return (
    <div className="w-full flex flex-col gap-5 items-center max-w-xl mx-auto z-10">
      {/* Glowing Launch CTA */}
      <button
        className="relative inline-flex items-center justify-center text-lg font-semibold px-7 py-3 bg-gradient-to-tr from-purple-500 via-violet-600 to-pink-500 rounded-xl shadow-lg ring-2 ring-purple-700/20 hover:scale-105 focus:scale-105 transition-all duration-150 text-white mt-2 mb-1 animate-glow"
        style={{ boxShadow: "0 4px 24px 4px #a855f764" }}
        onClick={() => setShowThanks(true)}
      >
        <span className="mr-2 text-xl">🚀</span>
        Request Early Access
      </button>
      {/* Email Notification Signup */}
      <form
        className="w-full flex flex-col sm:flex-row items-center gap-3"
        onSubmit={e => {
          e.preventDefault();
          setShowThanks(true);
          setEmail("");
        }}
      >
        <input
          aria-label="Enter your email"
          type="email"
          placeholder="Enter your email"
          required
          maxLength={80}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 text-base rounded-md bg-[#181C29] border border-[#232744] outline-none px-5 py-3 focus:ring-2 focus:ring-violet-700 focus:border-purple-500 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 font-semibold rounded-md bg-gradient-to-br from-purple-500 via-violet-600 to-pink-500 text-white hover:scale-105 focus:scale-105 duration-150 transition-all shadow-lg ring-2 ring-purple-700/20 animate-glow"
          style={{ boxShadow: "0 2px 12px 2px #a855f75c" }}
        >
          Notify Me
        </button>
      </form>
      {showThanks && (
        <div className="w-full text-center mt-3 text-purple-300 font-medium animate-fade-in">
          Thanks! We’ll keep you in the loop ✨
        </div>
      )}
    </div>
  );
}
