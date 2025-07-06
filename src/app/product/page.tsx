import Section from "../(components)/common/Section";
import FAQSection from "../(components)/pages/product/FAQSection";
import { ProductFeatures } from "../(lib)/constants";
import { CheckCircleIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <Section className="bg-white dark:bg-background-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 dark:text-blue-200">
              Lutions Predictor
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-200">
              Your no-code AI co-pilot. From dataset to decision in minutes, Lutions Predictor transforms the complex process of machine learning into a simple, intuitive workflow.
            </p>
            <div className="mt-8 flex gap-4">
               <Link href="https://github.com/LutionsLab/Predictor" target="_blank" className="rounded-md bg-blue-700 dark:bg-blue-400 px-5 py-3 text-sm font-semibold text-white dark:text-blue-900 shadow-sm hover:bg-blue-800 dark:hover:bg-blue-300 hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400">
                View on GitHub
              </Link>
            </div>
          </div>
          <div className="bg-black dark:bg-card-dark rounded-lg p-2 shadow-2xl">
              <Image src="/assets/gui-screenshot-placeholder.png" alt="Lutions Predictor GUI Screenshot" width={1200} height={800} className="rounded-md" />
          </div>
        </div>
      </Section>
      <Section title="Everything You Need for Code-Free ML" className="bg-white dark:bg-background-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductFeatures.map((feature) => (
            <div key={feature.title} className="bg-white dark:bg-card-dark p-6 rounded-lg border border-gray-200 dark:border-border-dark transition-all hover:border-blue-400 dark:hover:border-blue-400 hover:-translate-y-1 shadow-sm">
              <div className="flex gap-4">
                <div>
                  <CheckCircleIcon className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-200">{feature.title}</h3>
                  <p className="mt-1 text-gray-700 dark:text-gray-200">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="See It In Action" className="bg-white dark:bg-background-dark">
         <div className="aspect-w-16 aspect-h-9 bg-black dark:bg-card-dark rounded-lg overflow-hidden shadow-lg">
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
      </Section>
      <Section className="bg-white dark:bg-background-dark">
          <div className="relative bg-white/90 dark:bg-card-dark/90 backdrop-blur-lg p-8 sm:p-12 rounded-lg border border-gray-200 dark:border-border-dark text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 text-blue-100 dark:text-blue-900/10">
                <WrenchScrewdriverIcon className="h-64 w-64" />
            </div>
            <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-200">
                    Need a Custom AI Solution?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
                    Beyond our flagship product, our team of experts specializes in developing bespoke AI and machine learning software tailored to your specific research or business needs. Let&apos;s build something powerful together.
                </p>
                <div className="mt-8">
                    <Link href="#contact-us" className="rounded-md bg-blue-700 dark:bg-blue-400 px-5 py-3 text-sm font-semibold text-white dark:text-blue-900 shadow-sm hover:bg-blue-800 dark:hover:bg-blue-300 hover:-translate-y-0.5 transform transition-all duration-200">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
          </div>
      </Section>
      <FAQSection />
    </>
  );
}
