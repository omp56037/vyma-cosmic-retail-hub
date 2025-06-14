
import React, { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
  glow,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`relative group bg-[#181c28] rounded-2xl p-6 min-h-[180px] flex flex-col items-start shadow-md border border-[#2E2678] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_16px_5px_rgba(168,85,247,0.23)] ${
        glow ? "feature-glow" : "hover:feature-glow"
      }`}
    >
      <div className="w-10 h-10 flex items-center justify-center text-purple-400 mb-4">{icon}</div>
      <div className="text-lg font-bold text-white mb-1 drop-shadow">{title}</div>
      <div className="text-gray-300 text-sm leading-relaxed">{description}</div>
    </div>
  );
}
