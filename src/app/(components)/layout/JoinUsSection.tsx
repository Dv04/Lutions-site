import Link from 'next/link';

const studentEmail = "lutionspredictor@gmail.com";
const professionalEmail = "lutionspredictor@gmail.com";

const studentMailto = `mailto:${studentEmail}?subject=Student Internship/Collaboration Inquiry&body=Dear Lutions Lab Team,%0D%0A%0D%0AI am interested in exploring internship or collaboration opportunities as a student. Please find my resume attached.%0D%0A%0D%0A[Your Name]%0D%0A[Your Institution/University]%0D%0A[Link to Portfolio/GitHub, if applicable]`;
const professionalMailto = `mailto:${professionalEmail}?subject=Professional Collaboration/Resource Offer&body=Dear Lutions Lab Team,%0D%0A%0D%0AI am interested in discussing potential collaboration or offering resources. %0D%0A%0D%0A[Your Name/Organization Name]%0D%0A[Briefly describe your area of interest or resources offered]`;

export default function JoinUsSection() {
  return (
    <div id="join-us" className="bg-white dark:bg-neutral-950/70 backdrop-blur-lg p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 mt-12">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center">Join Our Mission</h2>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 text-center">
        We are always looking for passionate individuals and innovative organizations to collaborate with.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Students & Researchers</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
            Interested in internships, research projects, or academic collaborations? Share your ideas and resume with us.
          </p>
          <Link
            href={studentMailto}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-offset-neutral-900 focus-visible:outline-primary"
          >
            Apply / Inquire
          </Link>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Professionals & Organizations</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
            Looking to collaborate, offer resources, or explore partnership opportunities? We'd love to hear from you.
          </p>
          <Link
            href={professionalMailto}
            className="mt-6 inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary/10 hover:-translate-y-0.5 transform transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-offset-neutral-900 focus-visible:outline-primary"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
