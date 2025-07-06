import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ children, title, subtitle, className = "" }: SectionProps) {
  return (
    // Adjusted vertical padding for better rhythm
    <section className={`py-14 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
