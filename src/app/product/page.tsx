import Section from "../(components)/common/Section";
import FAQSection from "../(components)/pages/product/FAQSection";
import { ProductFeatures } from "../(lib)/constants";
import { CheckCircleIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <>
      {/* Product Hero */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Lutions Predictor
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
              Your no-code AI co-pilot. From dataset to decision in minutes, Lutions Predictor transforms the complex process of machine learning into a simple, intuitive workflow.
            </p>
            <div className="mt-8 flex gap-4">
               <Link href="https://github.com/LutionsLab/Predictor" target="_blank" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                View on GitHub
              </Link>
            </div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-2 shadow-2xl">
              {/* Placeholder for a screenshot of the app */}
              <Image src="/assets/gui-screenshot-placeholder.png" alt="Lutions Predictor GUI Screenshot" width={1200} height={800} className="rounded-md" />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section title="Everything You Need for Code-Free ML">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductFeatures.map((feature) => (
            // Adding a subtle continuous animation to feature card icons
            <div key={feature.title} className="bg-white/50 dark:bg-neutral-900/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-all hover:border-primary/50 hover:-translate-y-1 backdrop-blur-lg">
              <div className="flex gap-4">
                <div>
                  <CheckCircleIcon className="h-7 w-7 text-primary animate-subtle-bob" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">{feature.title}</h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Tutorial Section */}
      <Section title="See It In Action">
         <div className="aspect-w-16 aspect-h-9 bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            {/* YouTube Embed Placeholder */}
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

      {/* New Custom Solutions Section */}
      <Section>
          <div className="relative bg-white/40 dark:bg-neutral-900/40 backdrop-blur-lg p-8 sm:p-12 rounded-lg border border-neutral-200 dark:border-neutral-800 text-center overflow-hidden">
            <div className="absolute -top-16 -left-16 text-primary/5 dark:text-primary/10">
                <WrenchScrewdriverIcon className="h-64 w-64" />
            </div>
            <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                    Need a Custom AI Solution?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
                    Beyond our flagship product, our team of experts specializes in developing bespoke AI and machine learning software tailored to your specific research or business needs. Let's build something powerful together.
                </p>
                <div className="mt-8">
                    <Link href="#contact-us" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
          </div>
      </Section>
      
      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
