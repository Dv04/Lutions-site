"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import JoinUsSection from "./JoinUsSection";

export default function Footer() {
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const handleFeedbackSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ status: "loading", message: "" });

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setFormState({ status: "success", message: "Thank you for your feedback!" });
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      setFormState({ status: "error", message: error.message });
    }
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Feedback Form Section */}
        <div id="feedback" className="bg-white dark:bg-neutral-950/70 backdrop-blur-lg p-8 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Contact Us</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Have a question, suggestion, or want to discuss a project? Let us know!
          </p>
          <form onSubmit={handleFeedbackSubmit} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">First Name</label>
                <input type="text" name="firstName" id="firstName" required className="mt-1 block w-full rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Last Name</label>
                <input type="text" name="lastName" id="lastName" required className="mt-1 block w-full rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
              <div className="sm:col-span-2">
                 <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
               {/* Other fields are hidden for brevity but follow the same pattern */}
               <input type="hidden" name="phone" value="N/A" />
               <input type="hidden" name="country" value="N/A" />
               <div className="sm:col-span-2">
                <label htmlFor="feedback" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Feedback</label>
                <textarea id="feedback" name="feedback" rows={4} required className="mt-1 block w-full rounded-md bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"></textarea>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <button type="submit" disabled={formState.status === 'loading'}
                        className="inline-flex items-center rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-neutral-400 dark:focus:ring-offset-neutral-950 transform transition-all duration-200 hover:-translate-y-0.5">
                    {formState.status === 'loading' ? 'Submitting...' : 'Submit Feedback'}
                </button>
                 {formState.status === 'success' && <p className="text-green-600 dark:text-green-500">{formState.message}</p>}
                 {formState.status === 'error' && <p className="text-red-600 dark:text-red-500">{formState.message}</p>}
            </div>
          </form>
        </div>

        {/* Join Us Section */}
        <JoinUsSection />

        {/* Footer Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://github.com/LutionsLab" className="text-neutral-400 hover:text-neutral-500 dark:hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
            </a>
          </div>
          <p className="mt-8 text-base text-neutral-500 dark:text-neutral-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Lutions Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
