export const PROFILE = {
  name: "David Itina",
  title: "AI / Machine Learning Engineer",
  location: "Lagos, Nigeria",
  email: "itsdaveytina@gmail.com",
  github: "https://github.com/DATAITINA",
  linkedin: "https://www.linkedin.com/in/david-itina",
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlight?: string;
  pipeline: string[];
  github: string;
  note?: string;
  meta?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "dokusure",
    title: "Dokusure",
    category: "Document Intelligence / AI Systems",
    description:
      "An intelligent document-processing platform designed to automate the extraction and verification of commercial shipment information from invoices, bills of lading, and packing lists.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Streamlit",
      "pdfplumber",
      "pytesseract",
      "SQLAlchemy",
      "SQLite",
      "ReportLab",
    ],
    highlight:
      "Hybrid PDF text extraction + OCR with confidence-scored human-in-the-loop verification.",
    pipeline: [
      "Document Upload",
      "PDF/Text Extraction",
      "OCR Fallback",
      "Field Extraction",
      "Confidence Scoring",
      "Human Verification",
      "PDF Export",
    ],
    github: "https://github.com/DATAITINA/Dokusure",
  },
  {
    id: "fraud-intelligence",
    title: "Fraud Intelligence System for QPay",
    category: "Machine Learning / Fintech",
    description:
      "A hybrid rule-based and machine-learning fraud scoring system designed for offline QR payment scenarios.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "PostgreSQL", "pytest"],
    highlight:
      "Combines deterministic fraud rules with a PyTorch risk model to produce a risk score, decision, and suggested action.",
    pipeline: [
      "Transaction",
      "Rule Verification",
      "Feature Engineering",
      "ML Risk Model",
      "Risk Score",
      "Decision",
      "Investigation Workflow",
    ],
    github:
      "https://github.com/DATAITINA/my-ai-journey/tree/main/fraud-intelligence-system",
    meta: "Fintech / payments risk",
    note: "Independent personal project exploring payment risk scoring — not affiliated with or built for any payments company.",
  },
  {
    id: "sign-language",
    title: "Real-Time Sign Language Recognition",
    category: "Computer Vision / Deep Learning",
    description:
      "A real-time sign-language recognition system using CNN-based image classification, MobileNetV2, MediaPipe hand tracking, and speech output.",
    technologies: [
      "Python",
      "PyTorch/TensorFlow",
      "CNN",
      "MobileNetV2",
      "MediaPipe",
      "OpenCV",
      "FastAPI",
      "gTTS",
    ],
    highlight: "7 gesture classes recognised in real time, with spoken output.",
    pipeline: [
      "Webcam",
      "Hand Tracking",
      "Image Processing",
      "CNN",
      "Gesture Classification",
      "Speech Output",
    ],
    github: "https://github.com/DATAITINA/sign-language-cnn-math",
  },
  {
    id: "food-rag",
    title: "Nigerian Food Nutrition Assistant",
    category: "LLM / RAG",
    description:
      "A retrieval-augmented generation system that retrieves relevant Nigerian food nutrition data and generates grounded answers using Google Gemini.",
    technologies: ["Python", "LangChain", "Google Gemini", "FAISS", "Pandas"],
    pipeline: [
      "User Query",
      "Retriever",
      "FAISS Vector Store",
      "Relevant Documents",
      "Gemini",
      "Grounded Response",
    ],
    github:
      "https://github.com/DATAITINA/my-ai-journey/blob/main/LangChain_RAG_Bot.ipynb",
  },
  {
    id: "fwi-predictor",
    title: "Algerian Forest Fire FWI Predictor",
    category: "Machine Learning / Data Science",
    description:
      "An interactive Streamlit application for predicting Fire Weather Index using multiple regression models.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    highlight: "Models: Linear Regression, Lasso, Ridge, ElasticNet.",
    pipeline: ["Weather Features", "Preprocessing", "Regression Models", "FWI Prediction"],
    github: "https://github.com/DATAITINA/my-ai-journey/tree/main/FWI_Predictor_App",
  },
];

export const TECH_STACK: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "SQL", "PySpark"] },
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "XGBoost"],
  },
  { category: "Computer Vision", items: ["OpenCV", "MediaPipe", "CNNs", "MobileNetV2"] },
  {
    category: "LLM / AI Systems",
    items: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "Agentic Workflows",
      "Tool Calling",
      "Prompt Engineering",
      "SFT",
      "PEFT",
      "FAISS",
      "Pinecone",
      "Weaviate",
    ],
  },
  {
    category: "Backend / Infrastructure",
    items: ["FastAPI", "Flask", "Docker", "AWS Lambda", "AWS EC2", "Streamlit", "Git"],
  },
];

export const EXPERIENCE = [
  {
    org: "KodeHauz",
    role: "AI/ML Engineer Research Intern",
    period: "March 2025 – September 2025",
    points: [
      "Built and deployed a real-time sign-language recognition system using CNN + MobileNetV2, MediaPipe hand tracking, and gTTS across 7 gesture classes.",
      "Trained Random Forest, SVM, and XGBoost models using PCA, feature engineering, and cross-validation.",
      "Developed Python/FastAPI backend services for ML models.",
      "Designed and led a 1-month Holiday Tech Camp covering AI fundamentals, Python, web development, and Arduino robotics for 150+ students.",
    ],
  },
  {
    org: "ITINA AI",
    role: "Founder",
    period: "2026 – Present",
    points: [
      "Building an AI systems company from first principles, exploring AI-driven opportunities across healthcare, manufacturing, finance, and logistics, with early prototypes using RAG and agentic workflows.",
    ],
  },
];

export const PRINCIPLES = [
  {
    n: "01",
    title: "Build beyond the notebook",
    body: "Models should become usable systems.",
  },
  {
    n: "02",
    title: "Measure before optimizing",
    body: "Evaluation and validation matter as much as model selection.",
  },
  {
    n: "03",
    title: "Design for integration",
    body: "AI components should expose clean interfaces and fit into real applications.",
  },
  {
    n: "04",
    title: "Keep humans in the loop when uncertainty matters",
    body: "Use confidence and verification where automated decisions require oversight.",
  },
];

export const MATH_FOUNDATION = [
  {
    title: "Linear Algebra",
    notation: "Ax = b",
    body: "Vectors, matrices, and transformations — the language of embeddings, convolutions, and model weights.",
  },
  {
    title: "Probability & Statistics",
    notation: "P(y | x)",
    body: "Distributions, likelihood, and inference behind classification, risk scoring, and evaluation.",
  },
  {
    title: "Multivariable Calculus",
    notation: "∇f(θ)",
    body: "Gradients and partial derivatives that make backpropagation and learning possible.",
  },
  {
    title: "Numerical Optimization",
    notation: "min L(θ)",
    body: "Loss minimisation, convergence, and regularisation applied to real training runs.",
  },
];
