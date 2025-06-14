import React, { useState } from "react";

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    storeName: "",
    storeType: "",
    mobileNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative z-10 py-16 px-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-center">
          <span className="text-white">Request </span>
          <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">Early Access</span>
        </h2>
        <p className="text-center text-lg text-gray-400 mb-11 max-w-2xl mx-auto">
          Be among the first to experience the future of retail management. Fill out the form below to get started.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#232744] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-300 mb-1">
                Store Name
              </label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                required
                value={formData.storeName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#232744] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="storeType" className="block text-sm font-medium text-gray-300 mb-1">
                Store Type
              </label>
              <select
                id="storeType"
                name="storeType"
                required
                value={formData.storeType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#232744] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Store Type</option>
                <option value="retail">Retail</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="supermarket">Supermarket</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#232744] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mt-6"
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div className="text-center py-8 max-w-xl mx-auto">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              We've received your early access request. We'll contact you soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 