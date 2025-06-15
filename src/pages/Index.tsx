
import React from "react";
import Logo from "@/components/Logo";
import HeroCTAs from "@/components/HeroCTAs";
import { FeatureCard } from "@/components/FeatureCard";
import StarfieldBackground from "@/components/StarfieldBackground";
import {
  CircleArrowUp,
  CircleArrowDown,
  ArrowUp,
  ArrowDown,
  Users,
  Monitor,
  CircleCheck,
} from "lucide-react";
import EarlyAccessForm from "@/components/EarlyAccessForm";

// --- Features Array ---
const features = [
  {
    icon: <CircleArrowUp size={30} strokeWidth={2.2} />,
    title: "POS (Point of Sale)",
    description: (
      <>
        Voice-enabled AI billing, smart product suggestions, barcode/voice/manual entry, seamless payments (Cash/Card/UPI/Credit), instant bill sharing via WhatsApp/SMS, discounts/offers, credit sale management, and multi-language voice commands.
      </>
    ),
  },
  {
    icon: <CircleArrowDown size={30} strokeWidth={2.2} />,
    title: "Inventory Management",
    description: (
      <>
        AI-managed real-time inventory with voice/barcode controls, auto alerts for expiry/low stock, supplier management, one-tap reorders & payments, and AI-generated purchase orders.
      </>
    ),
  },
  {
    icon: <ArrowDown size={30} strokeWidth={2.2} />,
    title: "Order Management",
    description: (
      <>
        Unified offline/online order handling, real-time alerts, countdown timers for pickups/deliveries, smart filters, AI-powered order status queries and hands-free bulk actions.
      </>
    ),
  },
  {
    icon: <ArrowUp size={30} strokeWidth={2.2} />,
    title: "Employee Management",
    description: (
      <>
        Secure employee access (post-KYC), photo login with face verification, feature-level permissions, full attendance & performance analytics, AI insights on staff activity, salary/incentive tracking.
      </>
    ),
  },
  {
    icon: <CircleArrowDown size={30} strokeWidth={2.2} />,
    title: "AI Dashboard",
    description: (
      <>
        Powerful AI-driven dashboard: live sales, profits, order trends, top products, insightful charts, and AI queries such as "Show sales by hour" or "Low-stock alerts" — with voice input and personalized nudges.
      </>
    ),
  },
  {
    icon: <CircleArrowUp size={30} strokeWidth={2.2} />,
    title: "Vyma AI Assistant",
    description: (
      <>
        Present in every module; understands natural language & voice, multi-lingual support, smart suggestions, shop-specific learning, and rapid hands-free task automation.
      </>
    ),
  },
];

// --- Coming Soon ---
const comingSoon = [
  {
    icon: <CircleArrowUp size={30} />,
    title: "Targeted Marketing",
    description: (
      <>
        Promote products to nearby customers, run geo-targeted campaigns, and boost shop visibility with targeted offers & ranking.
      </>
    ),
  },
  {
    icon: <CircleArrowDown size={30} />,
    title: "Business Consulting",
    description: (
      <>
        AI-driven business advice leveraging trends from nearby Vyma shops — get actionable suggestions and growth tips based on your neighborhood.
      </>
    ),
  },
  {
    icon: <ArrowDown size={30} />,
    title: "Accounting",
    description: (
      <>
        End-to-end automated GST/tax, P&L and ledger management; quick export to Excel/Tally, auto-reconciliation and compliance analytics.
      </>
    ),
  },
  {
    icon: <ArrowUp size={30} />,
    title: "Credit & Lending",
    description: (
      <>
        Internal credit scoring and direct connect to NBFCs — unlock instant, data-driven working capital loans based on shop performance.
      </>
    ),
  },
  {
    icon: <CircleArrowUp size={30} />,
    title: "Integration Ecosystem",
    description: (
      <>
        Coming support for delivery partners, GST apps, and integrations with Tally, Zoho Books, RazorpayX, and more.
      </>
    ),
  },
];

// --- Midpage Product Visuals ---
const productImages = [
  {
    alt: "iPhone mockup showing Vyma app",
    src: "/images/iphone-mockup.png",
    tw: "w-24 h-40 object-contain rounded-2xl bg-[#f7f3f8] p-4 flex items-center justify-center",
    glow: false,
    cosmicShadow: "shadow-[0_0_120px_24px_rgba(59,130,246,0.85)] ring-4 ring-blue-400/80",
  },
  {
    alt: "MacBook mockup showing Vyma analytics",
    src: "/images/macbook-mockup.png",
    tw: "w-64 h-32 object-contain rounded-2xl bg-[#f7f3f8] p-4 flex items-center justify-center",
    glow: false,
    cosmicShadow: "shadow-[0_0_120px_24px_rgba(59,130,246,0.85)] ring-4 ring-blue-400/80",
  },
  {
    alt: "iPad mockup showing Vyma dashboard",
    src: "/images/ipad-mockup.png",
    tw: "w-32 h-44 object-contain rounded-3xl bg-[#f7f3f8] p-4 border-4 border-purple-400/40 flex items-center justify-center",
    glow: true,
    cosmicShadow: "shadow-[0_0_120px_24px_rgba(59,130,246,0.85)] ring-4 ring-blue-400/80",
  },
];

// --- Mid-page icons
const midIcons = [
  { icon: <CircleArrowUp size={22} className="text-purple-400" />, label: "AI-Powered POS" },
  { icon: <Users size={22} className="text-purple-400" />, label: "Retail Operations" },
  { icon: <Monitor size={22} className="text-purple-400" />, label: "Data Analytics" },
  { icon: <CircleCheck size={22} className="text-purple-400" />, label: "Seamless Integration" },
];

// --- Main Page Layout ---
const Index = () => {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-[#111928]">
      {/* Starfield BG */}
      <StarfieldBackground />

      {/* HERO Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-2">
        <Logo size={120} />
        <h1 className="mt-10 mb-4 text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide drop-shadow-glow">
          <span className="text-white">Revolutionizing Local Retail with </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 via-violet-300 to-pink-400 drop-shadow-glow">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-7 text-center max-w-xl">
          Manage sales, inventory, employees, and finances &mdash; smarter, faster, Vyma-style.
        </p>
        <HeroCTAs onRequestAccess={scrollToEarlyAccess} />
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-10 md:py-20 px-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-7 text-center">
            <span className="text-white">Unlock Your Retail </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-yellow-300 bg-clip-text text-transparent">Potential</span>
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Run your entire store, staff, and customer experience with one voice-driven, AI-enabled platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Magic Visual/Mid-section */}
      <section className="relative z-10 py-14 px-2">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
            <span className="text-white">Looks like </span>
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">magic.</span>
            <br />
            <span className="text-white">Works like </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">clockwork.</span>
          </h2>
          <p className="max-w-xl mx-auto text-center text-lg text-gray-300 mb-8">
            Experience the future of retail with Vyma. Our AI-powered platform seamlessly integrates POS and operations, transforming your business.
          </p>
          {/* Device visual mockups - reference style */}
          <div className="flex flex-row items-end justify-center gap-8 md:gap-16 mb-10">
            {productImages.map(({ src, alt, tw, glow, cosmicShadow }, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${tw} ${cosmicShadow} transition-all duration-300`}
                style={{ minHeight: i === 1 ? '18rem' : '12rem' }}
              >
                <img src={src} alt={alt} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          {/* Four mid-icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl w-full mt-3">
            {midIcons.map((mi, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-1">{mi.icon}</div>
                <span className="text-gray-200 text-sm font-medium">{mi.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon section */}
      <section className="relative z-10 py-16 px-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-center">
            <span className="text-white">Coming </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">Soon...</span>
          </h2>
          <p className="text-center text-lg text-gray-400 mb-11 max-w-2xl mx-auto">
            New AI-powered tools, marketing, business insights and integrations are on the way to help your business grow!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7">
            {comingSoon.map((cs, idx) => (
              <FeatureCard
                key={cs.title}
                icon={cs.icon}
                title={cs.title}
                description={cs.description}
                glow={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Form Section */}
      <section id="early-access" className="relative z-10">
        <EarlyAccessForm />
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-[#292146] bg-[#0C1020]/80 py-8 mt-6 flex flex-col items-center">
        <Logo size={44} />
        <div className="mt-3 text-gray-400 text-sm tracking-wide">&copy; 2025 VymaTech. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Index;
