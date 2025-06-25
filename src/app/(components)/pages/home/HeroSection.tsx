import Link from "next/link";
import Section from "../../common/Section";

export default function HeroSection() {
  return (
    <Section className="text-center pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
        <span className="hero-gradient-bg bg-clip-text text-transparent">
          Advancing AI and ML Frontiers
        </span>
      </h1>
      <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-neutral-600 dark:text-neutral-300">
        We empower researchers, professionals, and students to unlock the power of machine learning without writing a single line of code. Our intuitive tools bridge the gap between complex data and actionable insights.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="https://github.com/LutionsLab/Predictor"
          target="_blank"
          className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Try it now
        </Link>
        <Link href="/product" className="rounded-md px-5 py-3 text-sm font-semibold leading-6 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transform transition-all duration-200 hover:-translate-y-0.5 text-neutral-900 dark:text-neutral-100">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
