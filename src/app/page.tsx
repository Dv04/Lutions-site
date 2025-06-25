import HeroSection from "./(components)/pages/home/HeroSection";
import Section from "./(components)/common/Section";
import { Partners, Testimonials } from "./(lib)/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Testimonials Section */}
      <Section
        title="Trusted by Innovators"
        subtitle="Our users are at the forefront of research and development. While we gather their stories, here's what you can expect."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <p className="italic text-neutral-700 dark:text-neutral-300">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-right text-neutral-800 dark:text-neutral-200">- {testimonial.name}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-right">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section
        title="Our Expert Collaborators"
        subtitle="We are proud to collaborate with leading institutions and companies to push the boundaries of AI."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {Partners.map((partner) => (
            <div key={partner.name} className="flex items-center">
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} Logo`}
                width={140}
                height={50}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:invert dark:hover:invert-0"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
