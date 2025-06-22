import Section from "../(components)/common/Section";
import TeamSection from "../(components)/pages/about/TeamSection";

const aboutText = `Lutions Lab is a virtual research facility comprised of a collaborative team dedicated to advancing the fields of artificial intelligence and machine learning. Our primary areas of research encompass semiconductors and energy storage devices, and we develop a diverse array of products tailored to researchers in these fields.  Through the application of machine learning, we endeavor to address practical, real-life challenges. `

export default function About() {
  return (
    <>
      {/* About Lutions Lab Section */}
      <Section title="About Lutions Lab" subtitle="Our Mission and Our Team">
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
          <p>
            {aboutText}
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Meet the Team">
          <TeamSection />
      </Section>
    </>
  );
}
