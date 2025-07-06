import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ children, title, subtitle, className = "" }: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 bg-white dark:bg-background-dark ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-200 sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
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
