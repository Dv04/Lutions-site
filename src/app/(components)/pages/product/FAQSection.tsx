"use client";
import { FAQs } from "@/app/(lib)/constants";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Section from "../../common/Section";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section title="Frequently Asked Questions">
            <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                    {FAQs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left p-4 sm:p-6"
                            >
                                <span className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">{faq.question}</span>
                                <ChevronDownIcon className={`h-6 w-6 text-neutral-500 dark:text-neutral-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-4 sm:px-6 pb-4">
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
