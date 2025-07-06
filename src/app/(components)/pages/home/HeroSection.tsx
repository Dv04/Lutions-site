import Link from "next/link";
import Section from "../../common/Section";
import AnimatedSubtitle from "../../common/AnimatedSubtitle";

export default function HeroSection() {
  const subtitleText = "We empower researchers and professionals to unlock machine learning without writing a single line of code. Our intuitive tools bridge the gap between complex data and actionable insights.";

  return (
    <Section className="text-center pt-24 sm:pt-32 bg-white dark:bg-background-dark">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-900 dark:text-blue-200">
        <span className="bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Advancing AI and ML Frontiers
        </span>
      </h1>
      <div className="mt-6 min-h-[112px] flex items-center justify-center">
        <AnimatedSubtitle
          text={subtitleText}
          className="text-lg max-w-3xl mx-auto leading-8 text-gray-700 dark:text-gray-200"
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-4">
        <Link href="/product" className="rounded-md px-5 py-3 text-sm font-semibold leading-6 border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:-translate-y-0.5 transform transition-all duration-200">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
