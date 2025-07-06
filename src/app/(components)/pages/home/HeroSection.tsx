import Link from "next/link";
import Section from "../../common/Section";
import AnimatedSubtitle from "../../common/AnimatedSubtitle";

export default function HeroSection() {
  const subtitleText = "We empower researchers and professionals to unlock machine learning without writing a single line of code. Our intuitive tools bridge the gap between complex data and actionable insights.";

  return (
    <Section className="text-center pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <span className="hero-gradient-bg bg-clip-text text-transparent">
          Advancing AI and ML Frontiers
        </span>
      </h1>
      <div className="mt-6 min-h-[112px] flex items-center justify-center">
        <AnimatedSubtitle
          text={subtitleText}
          className="text-lg max-w-3xl mx-auto leading-8 text-neutral-600 dark:text-neutral-300"
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-4">
        <Link href="/product" className="rounded-md px-5 py-3 text-sm font-semibold leading-6 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5 transform transition-all duration-200">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
