import Link from "next/link";
import Section from "../../common/Section";

export default function HeroSection() {
  return (
    <Section className="text-center pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Advancing AI and ML Frontiers
      </h1>
      <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-gray-600 dark:text-gray-300">
        We empower researchers, professionals, and students to unlock the power of machine learning without writing a single line of code. Our intuitive tools bridge the gap between complex data and actionable insights.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="https://github.com/LutionsLab/Predictor"
          target="_blank"
          className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
        >
          Try it now
        </Link>
        <Link href="/product" className="text-sm font-semibold leading-6">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
