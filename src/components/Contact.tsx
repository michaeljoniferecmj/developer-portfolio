"use client";

import { useState, type FormEvent } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For now, just show success. Can integrate Formspree/EmailJS later.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-surface-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of something great.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:michaeljoniferecmj@gmail.com"
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-surface-800/80 rounded-lg flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm">michaeljoniferecmj@gmail.com</span>
              </a>

              <a
                href="https://github.com/michaeljoniferecmj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-surface-800/80 rounded-lg flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm">github.com/michaeljoniferecmj</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-surface-800/80 rounded-lg flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center p-8 rounded-xl bg-surface-900/50 border border-primary-500/30">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Message Sent!
                  </h4>
                  <p className="mt-2 text-sm text-surface-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-surface-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-surface-900/50 border border-surface-700/50 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-surface-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-surface-900/50 border border-surface-700/50 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-surface-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-surface-900/50 border border-surface-700/50 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
