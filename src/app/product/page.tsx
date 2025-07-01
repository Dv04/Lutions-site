import Section from "../(components)/common/Section";
import FAQSection from "../(components)/pages/product/FAQSection";
import { ProductFeatures } from "../(lib)/constants";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
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
              Lutions Predictor is your no-code AI co-pilot. It transforms the complex process of machine learning into a simple, intuitive GUI-based workflow, designed for researchers and professionals. From Dataset to Decision in Minutes.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="https://github.com/LutionsLab/Predictor" target="_blank" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Try on GitHub
              </Link>
            </div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-2 shadow-2xl overflow-hidden">
              {/* Placeholder for a screenshot of the app */}
              <Image src="/assets/gui-screenshot-placeholder.png" alt="Lutions Predictor GUI Screenshot" width={1200} height={800} className="rounded-md shimmer-bg animate-shimmer" />
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
         <div className="aspect-w-16 aspect-h-9 bg-neutral-800 rounded-lg overflow-hidden">
            {/* YouTube Embed Placeholder */}
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Customized Software Solutions Section */}
      <Section
        title="Lutions Predictor"
        subtitle="Placeholder text: Describe how Lutions Lab can also offer customized software solutions, leveraging the expertise demonstrated in Lutions Predictor. Mention tailoring solutions to specific client needs, integrating advanced AI/ML capabilities, and providing end-to-end development services."
        className="bg-neutral-100 dark:bg-neutral-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Placeholder for an icon, e.g., a gear or code icon */}
          {/* <Cog8ToothIcon className="h-12 w-12 text-primary mx-auto mb-4" /> */}
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Placeholder: Further details about custom solutions, perhaps with examples or a call to action to contact for consultation.
          </p>
          {/* You could add a button here e.g., <Link href="/contact" className="...">Contact Us for Custom Solutions</Link> */}
        </div>
      </Section>
    </>
  );
}
