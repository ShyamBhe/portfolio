export const nav = [
  { href: "#header", icon: "fa-home", label: "Home" },
  { href: "#about", icon: "fa-user", label: "About" },
  { href: "#projects", icon: "fa-briefcase", label: "Projects" },
  { href: "#publications", icon: "fa-book", label: "Publications" },
  { href: "#contact", icon: "fa-envelope", label: "Contact" },
];

export const skills = [
  {
    label: "Programming languages",
    text: "JavaScript, Python, TypeScript",
  },
  {
    label: "Frameworks",
    text: "React, Redux, Node, FastAPI, Flask, Express, .Net, WebSockets, Pandas, Numpy, scikit-earn, Matplotlib, Seaborn, PyPl, OpenCV, Pathlib and many others",
  },
  {
    label: "Data Science",
    text: "Data Analysis, AI, Machine Learning, Deep Learning, CNN, R-CNN, LLMs and many others libraries and tools",
  },
  {
    label: "Agile Methodologies and Collaboration Tools",
    text: "Git, Scrum, Jira, GitLab, SVN",
  },
  {
    label: "Database Design and Data Integration tools",
    text: "SQL, PostgreSQL, APIs, MySQL, MongoDB, RestAPIs, GraphQL API",
  },
  {
    label: "Research and Analysis",
    text: "Advanced applied AI using Google Scholar, PubMed, Zotero, LaTeX",
  },
  {
    label: "Knowledgeable and Better Understandings",
    text: "Internet of things, Security, Networkings, C#, Java, PHP, Testing, Cloud (Azure/GCP), DevOps, Linux OS, Power BI, Documentation",
  },
];

export const experience = [
  {
    period: "02/2024 - Current",
    text: "Lead AI and Software Engineer — University of Turku (Advanced Machine Vision System)",
  },
  {
    period: "05/2023 - 08/2023",
    text: "R&D Summer Project Developer — Vaisala",
  },
  {
    period: "01/2022 - 04/2023",
    text: "Freelance Fullstack Developer — Client Based Consulting",
  },
  {
    period: "01/2023 - 04/2023",
    text: "R&D Summer Project Developer — Oulu University Of Applied Sciences",
  },
  {
    period: "10/2020 - 01/2021",
    text: "Project Trainee — Technological University Dublin",
  },
  {
    period: "11/2019 - 04/2020",
    text: "Software Developer Trainee — PiiMega Oy",
  },
];

export const education = [
  {
    period: "University of Turku (2023 - 2025)",
    text: 'Master\u2019s in IT Engineering — Advanced Software Engineering with Data Science. Thesis (Graded 5/5): "Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools" — Developing an AIoT based automated platform.',
  },
  {
    period: "Oulu University of Applied Sciences (2018 - 2022)",
    text: "Bachelor\u2019s in IT Engineering — Software Development Technologies with Data Science, Security and IoT",
  },
];

export const projects = [
  {
    id: "calorie-tracking",
    title: "AIoT Based Machine Vision System for Calorie Tracking",
    image: "/images/systems.JPG",
    text: "This is my latest advanced AIoT system work, ongoing at the University of Turku. I researched and developed a machine vision-based food detection system for analysis and re-correction of food detection. Developed with AI/ML algorithms, React, Python, advanced image processing libraries and sensors. With 3 novel publications and a product tested in hospital and restaurant settings. Solved key challenges and enhanced accuracy.",
    action: {
      label: "Project Link",
      type: "window",
      url: "https://www.researchgate.net/publication/398328841_Comparing_the_Accuracy_and_Efficiency_of_Existing_AI_Based_Food_Detection_Tools_Developing_Automated_AIoT_based_Platform_for_real_time_food_detection_recognition_analysis_and_re-correction_from_Multip",
    },
  },
  {
    id: "mental-health",
    title: "Agentic AI integrated Mental Health Care System",
    image: "/images/mentalUI.png",
    text: "An ongoing, versatile AI/ML-assisted joint mental health care advanced work, a platform for all concerned parties (clinicians, hospitals and patients). Possible to discuss with trained AI models and human specialists (if needed at the end) based on needs. Sensors, NlP,LLMs, integrated responsible AI system. This is going to bea patented product. Building withdeep learning and NLP-based algorithms, with integrated sensors for voice, heart-rate and other data.",
    action: {
      label: "Live Link",
      type: "anchor",
      url: "https://mindsightaitool.onrender.com/",
  },
  },
  {
    id: "country-finder",
    title: "Country Finder AI assisted App",
    image: "/images/countryuiai.png",
    text: "An AI poweredchatbot assisted countryfinder, users can get info from chatbot Shows detailed country information, or specific answer for questions related to country.Users can get summary and detail info about country from app. Also lets users chat with an AI-assisted bot for country info, and displays details on an interactive map. built with React, OpenAI, Gemini, React Hooks and CSS. Country finder API has been used to fetch the information from Country. ",
    action: {
      label: "Live Link",
      type: "anchor",
      url: "https://countryfinderapplication.netlify.app/",
    },
  },
  {
    id: "ecommerce",
    title: "Ecommerce Shop",
    image: "/images/OnlineShop.png",
    text: "One of many freelance client based applications: a sample UI for a hybrid app. Admins can add and update products, clients can view, filter, order, and have products delivered. Part of a full-stack client project built with React, Redux, payment authentication, advanced user authentication, Node, MS Azure, AWS, C#, Docker and Jenkins. Worked on live on production projects according to client's needs",
    action: {
      label: "Live Link",
      type: "anchor",
      url: "https://onlinetshirtshop.netlify.app/",
    },
  },
  {
    id: "digital-repo",
    title: "National Digital Repository",
    image: "/images/NationalDigitalRepo.png",
    text: "Part of a broader R&D project, built in React and Redux with a Python/FastAPI backend and authentication. Was a real product developed for University's project.UI developed for an educational project for searching and uploading thesis information from students.  Only a sample UI is included here.",
    action: {
      label: "Live Link",
      type: "anchor",
      url: "https://national-digital-repository.netlify.app/",
    },
  },
  {
    id: "library-system",
    title: "Library Management System",
    image: "/images/Library.png",
    text: "Desktop application built with MS Access DB, C#, and SQL. Lets librarians and users log in, search, add and update library operations, digitalizing the library's workflow. Later updated for a client in React and ASP ,.NET web, using MS Azure for the database.",
    action: {
      label: "Live Link",
      type: "anchor",
      url: "https://github.com/Shyamraja/LibraryManagementSystem",
    },
  },
];

export const publications = [
  {
    id: "energy-composition",
    type: "Conference Paper \u00b7 Nov 2025",
    title:
      "Automated Image Recognition System for Determining Energy Composition of Meals: A Study Utilizing Flavoria Flex",
    text: "Shows how AI predictions and heterogeneous data can be automatically integrated for real-world scenarios, validated and tested in real restaurant settings, improving the accuracy of AI-based food detection with near-100% accuracy in weight estimation.",
    url: "https://www.researchgate.net/publication/398716879_Automated_Image_Recognition_System_for_Determining_Energy_Composition_of_Meals_by_AI-Powered_Detection_and_Identification_of_Food_Items_-_A_Study_Utilizing_Flavoria_Flex",
  },
  {
    id: "food-name-mapping",
    type: "Conference Paper \u00b7 Jan 2026",
    title:
      "Multi-source Food Names Mapping Using OpenAI Vision, Manual Dictionary and Fuzzy Matching Techniques",
    text: "Tackles the problem of reconciling food names across multilingual, inconsistent AI-generated outputs by combining OpenAI Vision output with a manual dictionary and fuzzy-matching logic, improving name-matching accuracy and downstream calorie estimation.",
    url: "https://www.researchgate.net/publication/408463388_Multi-source_Food_Names_Mapping_Using_OpenAI_vision_Manual_Dictionary_and_Fuzzy_Matching_Techniques",
  },
  {
    id: "hospital-feasibility",
    type: "Conference Paper \u00b7 Jan 2026",
    title:
      "Assessing Hospital Patient Nutrient Intake with an AI-Powered Food Recognition System — A Feasibility Study of the FlavoriaFlex Solution",
    text: "Co-authored publication reporting a feasibility study testing FlavoriaFlex in a real hospital ward, evaluating whether AI-based food recognition can replace the manual, subjective process of tracking patient nutrient intake.",
    url: "https://www.researchgate.net/publication/408462814_Assessing_Hospital_Patient_Nutrient_Intake_with_an_AI-Powered_Food_Recognition_System_-_A_Feasibility_Study_of_the_FlavoriaFlex_solution",
  },
];

export const researchGateProfile = "https://www.researchgate.net/profile/Shyam-Bhetuwal";

export const contact = {
  email: "shyambhetuwal254@gmail.com",
  phone: "0453519888",
  githubPrimary: { url: "https://github.com/ShyamBhe", label: "Shyamraja" },
  githubSecondary: { url: "https://github.com/Shyamraja", label: "ShyamBhe" },
  linkedin: "https://www.linkedin.com/in/rshyamvetwal/",
};
