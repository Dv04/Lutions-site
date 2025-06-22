import Link from "next/link";
import Section from "../(components)/common/Section";

export default function Docs() {
  return (
    <Section title="Documentation">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Get the complete guide to Lutions Predictor. Our detailed user manual provides a step-by-step walkthrough of all features, from data upload to model evaluation.
        </p>
        <div className="mt-8">
          <Link
            href="/Lutions-Predictor-Manual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Download Manual (PDF)
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            For advanced use-cases, developer guides, and contribution details, please visit our GitHub repository.
        </p>
      </div>
    </Section>
  );
}
