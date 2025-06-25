import Link from "next/link";
import Section from "../(components)/common/Section";

export default function Docs() {
  return (
    <Section title="Documentation">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Get the complete guide to Lutions Predictor. Our detailed user manual provides a step-by-step walkthrough of all features, from data upload to model evaluation.
        </p>
        <div className="mt-8">
          <Link
            href="/Lutions-Predictor-Manual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Download Manual (PDF)
          </Link>
        </div>
        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            For advanced use-cases, developer guides, and contribution details, please visit our GitHub repository.
        </p>
      </div>
    </Section>
  );
}
