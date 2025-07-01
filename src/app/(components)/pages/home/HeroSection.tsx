import Link from "next/link";
import Section from "../../common/Section";

export default function HeroSection() {
  return (
    <Section className="text-center pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {/* <span className="hero-gradient-bg bg-clip-text"> */}
          Advancing AI and ML Frontiers
        {/* </span> */}
      </h1>
      <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-neutral-600 dark:text-neutral-300 animate-fade-in-slide-up" style={{ animationDelay: '0.3s' }}>
        We empower researchers, professionals, and students to unlock the power of machine learning without writing a single line of code. Our intuitive tools bridge the gap between complex data and actionable insights.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/product" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-offset-neutral-950 focus-visible:outline-primary">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
