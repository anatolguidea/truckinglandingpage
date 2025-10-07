"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    cdlClass: "Class A",
    yearsExperience: "",
    endorsements: [],
    hasTWIC: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEndorsements = (endorsement) => {
    setFormData((prev) => {
      const exists = prev.endorsements.includes(endorsement);
      return {
        ...prev,
        endorsements: exists
          ? prev.endorsements.filter((e) => e !== endorsement)
          : [...prev.endorsements, endorsement],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Driver application submitted:", formData);
    alert("Application submitted! We will contact you soon.");
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">Driver Application</h1>
          <p className="text-gray-700 text-lg mt-2">Tell us about yourself and your driving experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 rounded-2xl p-6 md:p-8 shadow-2xl" style={{ backgroundColor: '#F9F6EE', color: '#111827' }}>
            <div className="h-1 w-full rounded" style={{ background: 'linear-gradient(90deg, #e10037, #6a0011)' }}></div>
            {/* Section: Personal Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#c3002e' }}>Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
            </div>

            {/* Section: Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#c3002e' }}>Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
            </div>

            {/* Section: Location & CDL */}
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#c3002e' }}>Location & Licensing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CDL Class</label>
                  <select name="cdlClass" value={formData.cdlClass} onChange={handleChange} className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="Class A">CDL Class A</option>
                    <option value="Class B">CDL Class B</option>
                    <option value="Non-CDL">Non-CDL</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Experience */}
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#c3002e' }}>Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Years of experience</label>
                  <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} min="0" required className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Endorsements</label>
                  <div className="flex flex-wrap items-center gap-3">
                    {['T', 'N', 'H', 'X', 'P'].map((code) => (
                      <label key={code} className="text-gray-800 text-sm inline-flex items-center gap-2">
                        <input type="checkbox" style={{ accentColor: '#c3002e' }} checked={formData.endorsements.includes(code)} onChange={() => handleEndorsements(code)} />
                        {code}
                      </label>
                    ))}
                    <label className="text-gray-800 text-sm inline-flex items-center gap-2 ml-2">
                      <input type="checkbox" name="hasTWIC" style={{ accentColor: '#c3002e' }} checked={formData.hasTWIC} onChange={handleChange} />
                      TWIC
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Notes */}
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#c3002e' }}>Additional Details</h2>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your background, equipment, lanes, etc." className="w-full px-3 py-2.5 bg-white rounded border border-gray-200 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div className="flex justify-end">
              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary text-white px-6 py-3 rounded-lg font-semibold">
                Submit Application
              </motion.button>
            </div>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xl">
              <h3 className="text-black text-lg font-semibold mb-3 border-l-4 pl-3" style={{ borderColor: '#c3002e' }}>Why Drive With Us</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Competitive pay and benefits</li>
                <li>• Modern, well-maintained equipment</li>
                <li>• Excellent home time</li>
                <li>• Supportive dispatch team</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xl">
              <h3 className="text-black text-lg font-semibold mb-3 border-l-4 pl-3" style={{ borderColor: '#c3002e' }}>Application Tips</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Keep your phone available for follow-up</li>
                <li>• Share preferred lanes and equipment</li>
                <li>• Include endorsements and years of experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


