// Data extracted from the provided PDF documents

// FROM: Lutions Predictor.pdf (Page 2, 10) & GUI User Manual.pdf (Page 4)
export const TeamMembers = [
  {
    name: "Siddhi Vinayak Pandey",
    role: "Founder, System Architect",
    expertise: "Specializing in UX design and bridging the gap between complex ML models and intuitive user interfaces.",
    imageUrl: "/assets/team/placeholder.png",
  },
  {
    name: "Dev Sanghvi",
    role: "Full-stack Developer",
    expertise: "Expert in building robust, scalable web applications with Next.js and modern frontend technologies.",
    imageUrl: "/assets/team/placeholder.png",
  },
  {
    name: "Heet Vekariya",
    role: "Machine Learning Developer",
    expertise: "Focused on implementing and optimizing machine learning algorithms and data pipeline engineering.",
    imageUrl: "/assets/team/placeholder.png",
  },
  {
    name: "Naimish Bhuva",
    role: "Machine Learning Developer",
    expertise: "Ensures the core predictive engine is powerful and efficient, specializing in model training and evaluation.",
    imageUrl: "/assets/team/placeholder.png",
  },
];

// FROM: Lutions Predictor.pdf (Page 3)
export const Partners = [
  { name: "Microsoft", logoUrl: "/assets/partner-logos/microsoft.png" },
  { name: "University of Manchester", logoUrl: "/assets/partner-logos/u-of-manchester.png" },
  { name: "PDEU", logoUrl: "/assets/partner-logos/pdeu.png" },
  { name: "VMukti", logoUrl: "/assets/partner-logos/vmukti.png" },
  { name: "Ola Electricals", logoUrl: "/assets/partner-logos/ola-electricals.png" },
  { name: "Ecowatt Energy", logoUrl: "/assets/partner-logos/ecowatt-energy.png" },
];

// FROM: GUI User Manual.pdf (Throughout the document)
export const ProductFeatures = [
  {
    title: "Simple Dataset Upload",
    description: "Easily import your .csv files with a single click to start your analysis instantly.",
  },
  {
    title: "Comprehensive EDA",
    description: "Automatically check for categorical data, handle missing NaN values, and perform correlation analysis.",
  },
  {
    title: "Powerful Data Visualization",
    description: "Generate insightful plots like heatmaps, scatter plots, and box plots to understand your data visually.",
  },
  {
    title: "Advanced Data Transformation",
    description: "Utilize scaling, discretization, outlier removal, and class imbalance handling to enhance dataset quality.",
  },
  {
    title: "Flexible Model Selection",
    description: "Choose from a wide range of regression and classification algorithms, including Random Forest, XGBoost, and ANNs.",
  },
  {
    title: "Automated Hyperparameter Tuning",
    description: "Find the best model parameters automatically using our integrated Grid Search functionality.",
  },
];

export const FAQs = [
    {
      question: "Who is Lutions Predictor for?",
      answer: "It is designed for researchers, students, data analysts, and professionals who need to apply machine learning techniques without any coding expertise.",
    },
    {
      question: "What are the system requirements?",
      answer: "The application is lightweight. Minimal requirements are a 1GHz CPU, 4GB RAM, and 2GB storage. For heavy use, we recommend a 2GHz CPU with 8GB+ RAM.",
    },
    {
      question: "Is Lutions Predictor free?",
      answer: "Yes, Lutions Predictor is an open-source project, free for academic and commercial use under the MIT License.",
    },
    {
      question: "What file formats does it support?",
      answer: "Currently, the tool supports datasets in the .csv file format.",
    },
     {
      question: "Do I need to know how to code to use it?",
      answer: "Not at all. The graphical user interface (GUI) provides a complete code-free experience, guiding you from data upload to model prediction through simple button clicks.",
    },
];

// TODO: USER ACTION REQUIRED: Replace these placeholder testimonials with actual user quotes.
export const Testimonials = [
    {
        name: "A. Researcher",
        title: "PhD Candidate",
        quote: "This is a placeholder testimonial. Lutions Predictor will revolutionize how our lab processes experimental data."
    },
    {
        name: "B. Analyst",
        title: "Data Science Dept.",
        quote: "This is a placeholder testimonial. The ability to quickly train and compare models without coding is a game-changer."
    },
    {
        name: "C. Professor",
        title: "University Faculty",
        quote: "This is a placeholder testimonial. I can now introduce complex ML concepts to my students in a much more accessible way."
    }
];
