// Data extracted from the provided PDF documents

// FROM: Lutions Predictor.pdf (Page 2, 10) & GUI User Manual.pdf (Page 4)
export const TeamMembers = [
  {
    name: "Siddhi Vinayak Pandey",
    role: "Founder, GUI Layout & Structure Development",
    imageUrl: "/assets/team/placeholder.png", // Placeholder
    expertise: "Placeholder: Specializes in intuitive user interface design and application architecture. Led the development of Lutions Predictor's GUI.",
  },
  {
    name: "Dev Sanghvi",
    role: "Core Member, Full-stack Developer",
    imageUrl: "/assets/team/placeholder.png", // Placeholder
    expertise: "Placeholder: Expertise in building robust back-end systems and dynamic front-end experiences. Key contributor to the full-stack development of Lutions Lab projects.",
  },
  {
    name: "Heet Vekariya",
    role: "Core Member, ML Developer",
    imageUrl: "/assets/team/placeholder.png", // Placeholder
    expertise: "Placeholder: Focuses on developing and implementing cutting-edge machine learning models. Drives the ML capabilities within Lutions Predictor.",
  },
  {
    name: "Naimish Bhuva",
    role: "Core Member, ML Developer",
    imageUrl: "/assets/team/placeholder.png", // Placeholder
    expertise: "Placeholder: Proficient in data preprocessing, feature engineering, and ML algorithm optimization. Ensures high performance and accuracy of our ML solutions.",
  },
  // {
  //   name: "Sahil Kadiwala",
  //   role: "Core Member, Electrical Engineering",
  //   imageUrl: "/assets/team/placeholder.png", // Placeholder
  //   expertise: "Placeholder: Bridges the gap between hardware and software, specializing in sensor integration and data acquisition for ML applications in engineering.",
  // },
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
