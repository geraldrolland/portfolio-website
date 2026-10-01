"use client";
import { useState } from "react";
import Loader from "./Loader";
import { useAppStore } from "@/hooks/useAppStore";
import { btnAccent } from "./ui";

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

  const fieldClasses = "w-full bg-transparent border-b border-line py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent transition-colors duration-200";
  const labelClasses = "block text-[11px] font-medium uppercase tracking-[0.16em] text-muted";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
        Send me a message
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
            value={formData.name}
            className={`${fieldClasses} mt-2`}
            type="text"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            id="email"
            name="email"
            required
            autoComplete="email"
            onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
            value={formData.email}
            className={`${fieldClasses} mt-2`}
            type="email"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
          value={formData.message}
          className={`${fieldClasses} mt-2 h-36 resize-none`}
          placeholder="Tell me about your project..."
        ></textarea>
      </div>
      {error && (
        <p role="alert" className="text-sm text-danger">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className={`${btnAccent} self-start ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {loading ? <Loader /> : <span>Send Message</span>}
      </button>
    </form>
  );
};

export default SubmitForm;
