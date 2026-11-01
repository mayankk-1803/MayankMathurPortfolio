"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Project Inquiry via Portfolio",
        message: formData.message,
      });

      if (result.success) {
        setStatus("success");
        setFeedbackMessage(result.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage(result.message);
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("An unexpected error occurred. Please try again or email directly.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#FFFFFF] text-[#090909] rounded-2xl sm:rounded-3xl border border-black/15 shadow-2xl p-5 sm:p-8 md:p-10 z-10 my-auto overflow-hidden"
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between border-b border-black/10 pb-4 sm:pb-5 mb-4 sm:mb-6 shrink-0">
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#777777]">
                  DIRECT COMMUNICATION
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight text-[#050505]">
                  SEND ME A MESSAGE
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/15 flex items-center justify-center text-[#090909] hover:bg-black/5 transition-colors cursor-pointer shrink-0"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 overflow-y-auto pr-1">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[#555555]">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mayank..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-black/15 bg-black/[0.02] text-base sm:text-sm text-[#090909] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-[#555555]">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-black/15 bg-black/[0.02] text-base sm:text-sm text-[#090909] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-[#555555]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-time opportunity / FinTech project / Architecture..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-black/15 bg-black/[0.02] text-base sm:text-sm text-[#090909] placeholder:text-[#999999] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-[#555555]">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Mayank, I'd like to talk about..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-black/15 bg-black/[0.02] text-base sm:text-sm text-[#090909] placeholder:text-[#999999] focus:outline-none focus:border-black resize-none transition-colors"
                />
              </div>

              {/* Feedback Alerts */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-black/10 pt-4 mt-2 shrink-0">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#777777] text-center sm:text-left">
                  EmailJS Encrypted Transport
                </span>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#050505] text-white hover:bg-black font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

