
import React from "react";

const gradient = "bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400";

export default function Logo({ size = 108, withText = false }: { size?: number; withText?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative rounded-full flex items-center justify-center shadow-[0_0_80px_10px_rgba(168,85,247,0.25)]`}
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Outer glowing ring */}
        <div
          className={`absolute inset-0 ${gradient} rounded-full blur-[8px] animate-pulse-slow`}
          style={{
            filter: "blur(8px)",
            opacity: 0.7,
          }}
        />
        {/* Actual ring */}
        <div
          className={`absolute inset-0 ${gradient} rounded-full border-4 border-transparent`}
          style={{
            boxShadow: "0 0 16px 6px #a855f7, 0 0 1.5px 1.5px #fff inset",
            pointerEvents: "none",
          }}
        />
        {/* Inner circle */}
        <div
          className="relative z-10 flex items-center justify-center bg-[#111928] rounded-full"
          style={{
            width: size - 24,
            height: size - 24,
            border: "2.5px solid rgba(255,255,255,0.08)",
          }}
        >
          <span className="text-white text-3xl font-black tracking-wide select-none drop-shadow-lg" style={{ letterSpacing: 1 }}>
            VYMA
          </span>
        </div>
      </div>
      {withText && (
        <span className="mt-2 text-white font-bold text-xl tracking-wider">VymaTech</span>
      )}
    </div>
  );
}
