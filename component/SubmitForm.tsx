"use client";
import { useState } from "react";
import Loader from "./Loader";
import { useAppStore } from "@/hooks/useAppStore";
import { Send } from "lucide-react";

const SubmitForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      useAppStore.setState({ showNotification: true });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again or email me directly at geraldrolland123@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <Send size={18} className="text-blue-600" />
        </span>
        <h3 className="font-semibold text-slate-900">Send Me a Message</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
          value={formData.name}
          className={inputClasses}
          type="text"
          placeholder="Full name"
        />
        <input
          required
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
          value={formData.email}
          className={inputClasses}
          type="email"
          placeholder="Email address"
        />
      </div>
      <textarea
        required
        onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
        value={formData.message}
        className={`${inputClasses} h-36 resize-none`}
        placeholder="Your message"
      ></textarea>
      {error && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
      )}
      <button
        disabled={loading}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-lg font-medium py-2.5 transition-all duration-300 ${
          loading
            ? "bg-slate-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white"
        }`}
      >
        {loading ? <Loader /> : <span>Send Message</span>}
      </button>
    </form>
  )
}

export default SubmitForm
