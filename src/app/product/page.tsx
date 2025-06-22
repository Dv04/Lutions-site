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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              From Dataset to Decision in Minutes.
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Lutions Predictor is your no-code AI co-pilot. It transforms the complex process of machine learning into a simple, intuitive GUI-based workflow, designed for researchers and professionals.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="https://github.com/LutionsLab/Predictor" target="_blank" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-700 transition-colors">
                Try on GitHub
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
              {/* Placeholder for a screenshot of the app */}
              <Image src="/assets/gui-screenshot-placeholder.png" alt="Lutions Predictor GUI Screenshot" width={1200} height={800} className="rounded-md" />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section title="Everything You Need for Code-Free ML">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div>
                <CheckCircleIcon className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Tutorial Section */}
      <Section title="See It In Action">
         <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
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
    </>
  );
}
