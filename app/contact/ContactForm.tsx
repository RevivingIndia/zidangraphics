"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit; replace with actual API/email endpoint later
    setTimeout(() => {
      setStatus("sent");
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#c41e3a] focus:outline-none focus:ring-1 focus:ring-[#c41e3a]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#c41e3a] focus:outline-none focus:ring-1 focus:ring-[#c41e3a]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#c41e3a] focus:outline-none focus:ring-1 focus:ring-[#c41e3a]"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message / Quote request
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-[#c41e3a] focus:outline-none focus:ring-1 focus:ring-[#c41e3a]"
          placeholder="Describe your requirement: product, quantity, timeline..."
        />
      </div>
      {status === "sent" && (
        <p className="text-sm text-green-600">
          Thank you! We will get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us.</p>
      )}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
