"use client";

import { usePathname } from "next/navigation";
import { useState, FormEvent } from "react";
import Section from "../(components)/common/Section";
import TeamSection from "../(components)/pages/about/TeamSection";
import { UserPlusIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const aboutText = `Lutions Lab is a virtual research facility comprised of a collaborative team dedicated to advancing the fields of artificial intelligence and machine learning. Our primary areas of research encompass semiconductors and energy storage devices, and we develop a diverse array of products tailored to researchers in these fields. Through the application of machine learning, we endeavor to address practical, real-life challenges.`;

export default function About() {
  const [formState, setFormState] = useState({ status: "idle", message: "" });
  const pathname = usePathname();

  // Determine the title based on the current page
  const formTitle = pathname === '/product' ? "Provide Feedback" : "Contact Us";

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
    <>
      <Section title="About Lutions Lab" subtitle="Our Mission and Our Team" className="bg-white">
        <div className="prose prose-lg max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center">
            <p>{aboutText}</p>
        </div>
      </Section>
      <Section title="Meet the Team" className="bg-white">
          <TeamSection />
      </Section>
      {/* NEW Join Us Section */}
      <Section title="Join Our Mission" className="bg-white dark:bg-background-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* For Students */}
                <div className="bg-white dark:bg-card-dark p-8 rounded-lg border border-gray-200 dark:border-border-dark text-center">
                    <AcademicCapIcon className="mx-auto h-12 w-12 text-blue-700 dark:text-blue-400" />
                    <h3 className="mt-4 text-xl font-bold text-blue-900 dark:text-blue-200">Students & Interns</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">
                        Are you passionate about AI/ML and looking for hands-on experience? We are always looking for bright minds to join us.
                    </p>
                    <a href="mailto:lutionspredictor@gmail.com?subject=Student/Intern Application" className="mt-6 inline-block rounded-md px-5 py-2 text-sm font-semibold leading-6 border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transform transition-all duration-200">
                        Apply with Resume
                    </a>
                </div>
                {/* For Collaborators */}
                <div className="bg-white dark:bg-card-dark p-8 rounded-lg border border-gray-200 dark:border-border-dark text-center">
                    <UserPlusIcon className="mx-auto h-12 w-12 text-blue-700 dark:text-blue-400" />
                    <h3 className="mt-4 text-xl font-bold text-blue-900 dark:text-blue-200">Collaborators & Partners</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">
                        If you or your organization has resources, ideas, or a desire to collaborate on cutting-edge research, we would love to hear from you.
                    </p>
                    <a href="mailto:lutionspredictor@gmail.com?subject=Collaboration/Resource Proposal" className="mt-6 inline-block rounded-md px-5 py-2 text-sm font-semibold leading-6 border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transform transition-all duration-200">
                        Propose Collaboration
                    </a>
                </div>
          </div>
      </Section>

      {/* Contact Us */}
      <Section title="Contact Us" className="bg-white dark:bg-background-dark">
        <div id="contact-us" className="mx-auto w-full max-w-[800px] bg-white/90 dark:bg-card-dark/90 backdrop-blur-lg p-8 rounded-lg border border-gray-200 dark:border-border-dark shadow-md scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-200 mb-2">Contact Us</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-200 mb-6">
            Have a suggestion, a project in mind, or want to get in touch? Let us know!
          </p>
          <form onSubmit={handleFeedbackSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 dark:text-gray-200">First Name</label>
                <input type="text" name="firstName" id="firstName" required className="mt-1 block w-full rounded-md bg-white dark:bg-background-dark border-gray-300 dark:border-border-dark shadow-sm focus:border-blue-700 dark:focus:border-blue-400 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Last Name</label>
                <input type="text" name="lastName" id="lastName" required className="mt-1 block w-full rounded-md bg-white dark:bg-background-dark border-gray-300 dark:border-border-dark shadow-sm focus:border-blue-700 dark:focus:border-blue-400 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
              <div className="sm:col-span-2">
                 <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md bg-white dark:bg-background-dark border-gray-300 dark:border-border-dark shadow-sm focus:border-blue-700 dark:focus:border-blue-400 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200"/>
              </div>
              <input type="hidden" name="phone" value="N/A" />
              <input type="hidden" name="country" value="N/A" />
              <div className="sm:col-span-2">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-800 dark:text-gray-200">Message</label>
                <textarea id="feedback" name="feedback" rows={4} required className="mt-1 block w-full rounded-md bg-white dark:bg-background-dark border-gray-300 dark:border-border-dark shadow-sm focus:border-blue-700 dark:focus:border-blue-400 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200"></textarea>
              </div>
            </div>
            <div className="flex justify-between items-center">
                <button type="submit" disabled={formState.status === 'loading'} className="inline-flex items-center rounded-md border border-transparent bg-blue-700 dark:bg-blue-400 px-6 py-2 text-base font-medium text-white dark:text-blue-900 shadow-sm hover:bg-blue-800 dark:hover:bg-blue-300 hover:-translate-y-0.5 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-400 focus:ring-offset-2 disabled:bg-gray-400 dark:disabled:bg-gray-700">
                    {formState.status === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
                 {formState.status === 'success' && <p className="text-green-600 dark:text-green-400">{formState.message}</p>}
                 {formState.status === 'error' && <p className="text-red-600 dark:text-red-400">{formState.message}</p>}
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
