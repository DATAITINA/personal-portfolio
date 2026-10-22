/*
 * All portfolio content lives here. Edit this file to update the site.
 *
 * Honesty rule: every claim below is either a fact David supplied or something
 * visible in his GitHub repos. Anything that would help but is not verified yet
 * is marked with a `TODO(david)` comment. Never fill a TODO with a guess.
 */

export const SITE_URL = "https://david-itina-portfolio.vercel.app";

export const PROFILE = {
  name: "David Itina",
  title: "AI Engineer",
  headline: { lead: "I ship AI products", emphasis: "that real people use." },
  /** Follows "I'm David Itina, " in the hero. */
  intro:
    "an AI engineer in Nigeria. I build LLM and RAG apps, put ML models behind real APIs, and design for the moment the AI gets it wrong.",
  description:
    "David Itina is an AI engineer in Nigeria who ships LLM and RAG apps, ML models in production and secure backends. Case studies: Kids Health Hub Africa, Customa, a fraud scoring service and real-time sign language recognition.",
  location: "Lagos & Uyo, Nigeria",
  email: "thedaviditina@gmail.com",
  github: "https://github.com/DATAITINA",
  githubHandle: "DATAITINA",
  linkedin: "https://www.linkedin.com/in/david-itina",
  linkedinHandle: "david-itina",
  x: "https://x.com/thedvditina",
  xHandle: "@thedvditina",
  /*
   * TODO(david): put your resume at public/David_Itina_Resume.pdf, then set this to
   * "/David_Itina_Resume.pdf". While it is null, the resume button becomes a
   * "Request resume" email link, so the site never shows a broken download.
   */
  resumeUrl: null as string | null,
  openTo: "AI Engineer · ML Engineer · LLM / Agents Engineer · Software Engineer",
  workMode: "Remote or Nigeria",
};

export type DiagramNodeKind = "actor" | "app" | "service" | "ai" | "data" | "guard" | "external";

export type DiagramNode = {
  id: string;
  label: string;
  sub?: string;
  kind: DiagramNodeKind;
};

export type Diagram = {
  /** Left-to-right stages. Each stage is a list of node ids stacked together. */
  stages: string[][];
  nodes: DiagramNode[];
  /** [from, to] pairs. Dashed edges are fallback or escalation paths. */
  edges: { from: string; to: string; dashed?: boolean }[];
  caption: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "code" | "docs" | "notebook";
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  oneLiner: string;
  status: string;
  /** Short, verified results shown on the card. */
  results: string[];
  stack: string[];
  links: ProjectLink[];
  problem: string;
  role: string;
  built: string[];
  diagram: Diagram;
  decisions: { title: string; body: string }[];
  improveNext: string[];
  note?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "kids-health-hub-africa",
    title: "Kids Health Hub Africa",
    kicker: "LLM · RAG · Health",
    oneLiner:
      "A live web app that gives parents evidence-based child health guidance, with an AI assistant grounded in WHO, UNICEF and AAP advice.",
    status: "Live",
    results: [
      "Live PWA used by parents in 5 African countries",
      "Answers grounded in WHO, UNICEF and AAP guidance",
      "Urgent cases escalate to real healthcare professionals",
      // TODO(david): add a usage number you can stand behind (parents, questions answered, return rate).
    ],
    stack: ["React", "Vite", "PWA", "Supabase", "Gemini", "RAG"],
    links: [{ label: "Live app", href: "https://app.kidshealthhubafrica.com", kind: "live" }],
    problem:
      "Parents looking for child health advice online often find good guidance mixed with myths. A general chatbot can make that worse: it answers confidently even when it should not, and it cannot tell when a child needs a real clinician.",
    // TODO(david): confirm your exact role (for example "Built the product end to end").
    role: "Built the web app and its AI assistant.",
    built: [
      "An installable web app (PWA) that parents open from a link, with no app store download.",
      "A chat assistant that retrieves trusted guidance from WHO, UNICEF and AAP material and asks Gemini to answer only from it.",
      "A safety layer: when a question points to something serious, the app escalates to real healthcare professionals instead of letting the model improvise.",
      "A Supabase backend for the app's data.",
    ],
    diagram: {
      stages: [["parent"], ["pwa"], ["safety", "retrieve"], ["human", "gemini"], ["answer"]],
      nodes: [
        { id: "parent", label: "Parent", sub: "phone browser", kind: "actor" },
        { id: "pwa", label: "PWA", sub: "React + Vite", kind: "app" },
        { id: "safety", label: "Safety check", sub: "is this urgent?", kind: "guard" },
        { id: "retrieve", label: "Retrieval", sub: "WHO · UNICEF · AAP", kind: "data" },
        { id: "gemini", label: "Gemini", sub: "answers from sources", kind: "ai" },
        { id: "human", label: "Health professional", sub: "escalation", kind: "external" },
        { id: "answer", label: "Grounded answer", sub: "back to parent", kind: "app" },
      ],
      edges: [
        { from: "parent", to: "pwa" },
        { from: "pwa", to: "safety" },
        { from: "pwa", to: "retrieve" },
        { from: "retrieve", to: "gemini" },
        { from: "safety", to: "human", dashed: true },
        { from: "gemini", to: "answer" },
      ],
      // TODO(david): if you want more detail here, name the vector store and where retrieval runs.
      caption:
        "Questions that need a clinician are escalated to a person (dashed path). The rest are answered from retrieved guidance, not from the model's memory.",
    },
    decisions: [
      {
        title: "Ground answers in named sources",
        body: "Health advice has to be traceable. Retrieval over WHO, UNICEF and AAP guidance keeps the model's answers tied to material a doctor would recognise, instead of whatever the model remembers.",
      },
      {
        title: "Escalate instead of answering",
        body: "Some questions should not get an AI answer at all. The safety path hands those to real healthcare professionals. A slower human answer beats a fast wrong one.",
      },
      {
        title: "A PWA, not a native app",
        body: "Parents get it from a link and can add it to the home screen. No app store, no big download, one codebase.",
      },
    ],
    improveNext: [
      "Build a test set of real parent questions and score answers for grounding and safety before each release.",
      "Show the exact source passage under each answer so parents can check it themselves.",
      "Track how often escalation fires and review false alarms and misses.",
    ],
  },
  {
    slug: "customa",
    title: "Customa",
    kicker: "AI agents · FastAPI · Hackathon",
    oneLiner:
      "QR loyalty and AI characters for Nigerian food vendors. Customers scan, a character greets them by name, and repeat visits earn a free plate.",
    status: "Live · built in a 5-hour hackathon",
    results: [
      "Built and deployed in a 5-hour live hackathon",
      "Live web app and public API docs",
      "Keeps working when the AI is down",
      // TODO(david): add the hackathon result (placing or judges' feedback) if you want it shown.
    ],
    stack: [
      "Python",
      "FastAPI",
      "MSFLib",
      "LangChain",
      "React",
      "TypeScript",
      "Neon PostgreSQL",
      "Vercel",
    ],
    links: [
      { label: "Live app", href: "https://customa-web.vercel.app", kind: "live" },
      { label: "API docs", href: "https://customa-api.vercel.app/docs", kind: "docs" },
      { label: "GitHub", href: "https://github.com/DATAITINA/customa", kind: "code" },
    ],
    problem:
      "Food vendors in Uyo told us their biggest daily worry is getting enough customers, so the food they cook sells out instead of going to waste. They know regulars by face, not by name, and paper stamp cards get lost or faked.",
    // TODO(david): if this was a team build, name the team size and your exact part.
    role: "Built and deployed it live inside the 5-hour hackathon window, on KodeHauz's MSFLib framework.",
    built: [
      "A QR flow: the customer scans the stand's code, the stand's own AI character greets them (by name from the second visit) and counts the plate.",
      "A stamp card: every 6th plate earns a jara, a free extra portion, redeemed once with a one-time code.",
      "Vendor sign-in with JWT, token revocation on logout, and one workspace per vendor, so a vendor only ever sees their own stand.",
      "Repeat-scan blocking: one plate per time window per customer, checked with a database row lock so double taps cannot count twice.",
      "A vendor AI helper that answers questions about the stand using read-only tools over that stand's own numbers.",
      "A non-AI fallback: if the AI is down or has no key, the character answers from the real menu instead of failing.",
    ],
    diagram: {
      stages: [["customer"], ["web"], ["api"], ["rules", "llm"], ["db", "fallback"]],
      nodes: [
        { id: "customer", label: "Customer / vendor", sub: "scans QR or signs in", kind: "actor" },
        { id: "web", label: "React app", sub: "TypeScript + Vite", kind: "app" },
        { id: "api", label: "FastAPI", sub: "MSFLib · JWT", kind: "service" },
        { id: "rules", label: "Visit rules", sub: "1 plate per window", kind: "guard" },
        { id: "llm", label: "LLM character", sub: "via MSFLib AI core", kind: "ai" },
        { id: "db", label: "Neon Postgres", sub: "per-vendor workspace", kind: "data" },
        { id: "fallback", label: "Menu fallback", sub: "no-AI answer", kind: "guard" },
      ],
      edges: [
        { from: "customer", to: "web" },
        { from: "web", to: "api" },
        { from: "api", to: "rules" },
        { from: "api", to: "llm" },
        { from: "rules", to: "db" },
        { from: "llm", to: "fallback", dashed: true },
      ],
      caption:
        "Thin routers, rules in services, every write through MSFLib actions. The AI is optional: if it fails, the menu fallback answers.",
    },
    decisions: [
      {
        title: "Rules in the database, not the browser",
        body: "A plate only counts with the QR code's secret scan code, and the one-plate-per-window rule runs under a row lock. Bookmarks, shared links and double taps cannot fake a visit.",
      },
      {
        title: "AI is a feature, not a dependency",
        body: "Vendors cannot lose customers because an API key ran out. Every AI feature has a plain path: the chat answers from the menu, and the loyalty core never touches the model.",
      },
      {
        title: "Use the framework, build only the gaps",
        body: "MSFLib carries auth, workspaces, settings, the event bus and AI. Where it had no module, such as payments and anonymous customers, I built from its pieces instead of bolting on another stack.",
      },
      {
        title: "Customers stay anonymous",
        body: "Customers get a random key on their phone, not an account. Vendors see first names (with consent), plates and ratings, never phone numbers or chats.",
      },
    ],
    improveNext: [
      "Offline-first counting for stands with poor network.",
      "WhatsApp greetings and reminders, where customers already are.",
      "Live payments that go straight to each vendor's account.",
    ],
  },
  {
    slug: "fraud-intelligence",
    title: "Fraud Intelligence System for QPay",
    kicker: "ML · Risk · FastAPI",
    oneLiner:
      "A fraud scoring service for offline QR payments: hard rules first, then a PyTorch risk model, served from a Dockerized FastAPI API.",
    status: "Independent project",
    results: [
      "99.1% validation accuracy on synthetic data",
      "Trained on 8,000 synthetic transactions, 131 features",
      "Dockerized API with a pytest suite",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "Docker", "PostgreSQL", "pytest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/DATAITINA/my-ai-journey/tree/main/fraud-intelligence-system",
        kind: "code",
      },
    ],
    problem:
      "In offline QR payments the payer creates a signed QR code and the merchant submits it later. That gap opens room for replayed codes, expired grants and compromised devices. Some of these need a hard yes or no; others are a matter of risk.",
    role: "Sole engineer. Designed the rules, generated the data, trained the model and built the API and tests.",
    built: [
      "Deterministic checks for the hard failures: signature validity, QR expiry, counter freshness, device status, merchant status and balance.",
      "A PyTorch risk model for the soft signals, trained on generated transactions.",
      "A FastAPI scoring service that returns a risk score, a decision, a human-readable reason and a suggested action.",
      "A PostgreSQL-backed device registry, a Dockerfile and pytest tests for the API and inference.",
    ],
    diagram: {
      stages: [["txn"], ["api"], ["rules"], ["model", "registry"], ["decision"]],
      nodes: [
        { id: "txn", label: "QR transaction", sub: "signed offline grant", kind: "actor" },
        { id: "api", label: "FastAPI", sub: "Docker", kind: "service" },
        { id: "rules", label: "Rule checks", sub: "signature · expiry · counter", kind: "guard" },
        { id: "model", label: "PyTorch model", sub: "risk score", kind: "ai" },
        { id: "registry", label: "Device registry", sub: "PostgreSQL", kind: "data" },
        { id: "decision", label: "Decision", sub: "score · reason · action", kind: "app" },
      ],
      edges: [
        { from: "txn", to: "api" },
        { from: "api", to: "rules" },
        { from: "rules", to: "registry" },
        { from: "rules", to: "model" },
        { from: "model", to: "decision" },
        { from: "rules", to: "decision", dashed: true },
      ],
      caption:
        "A failed hard check rejects the payment straight away (dashed path). Only transactions that pass go on to the model for a risk score.",
    },
    decisions: [
      {
        title: "Rules first, model second",
        body: "A bad signature is not a probability. Hard checks give certain, explainable rejections. The model only scores what passes, where judgment is actually needed.",
      },
      {
        title: "Explain every decision",
        body: "Each response carries a plain reason and a suggested action, so a merchant or an analyst knows what to do next, not just a number.",
      },
      {
        title: "Be honest about the data",
        body: "The model is trained and validated on synthetic data. 99.1% there says the pipeline works. It does not say how it would do on real fraud, and I do not claim that.",
      },
    ],
    improveNext: [
      "Validate on real or realistic labelled transactions and report precision and recall, not just accuracy.",
      "Calibrate scores so a 0.8 means roughly an 80% risk.",
      "Add drift monitoring on the input features.",
    ],
    note: "Independent personal project exploring payment risk. Not built for, or affiliated with, any payments company.",
  },
  {
    slug: "sign-language-recognition",
    title: "Real-Time Sign Language Recognition",
    kicker: "Computer vision · Final year project",
    oneLiner:
      "Turns 7 hand gestures into speech in real time, using MediaPipe hand tracking, a MobileNetV2 CNN in TensorFlow/Keras, and gTTS.",
    status: "Final year project · Covenant University",
    results: [
      "7 gestures recognised in real time",
      "Gesture to spoken word, end to end",
      // TODO(david): add the model's test accuracy and the size of the test set.
    ],
    stack: ["Python", "TensorFlow / Keras", "MobileNetV2", "MediaPipe", "OpenCV", "gTTS"],
    links: [
      {
        label: "Project record",
        href: "https://github.com/DATAITINA/final-year-project",
        kind: "code",
      },
      {
        label: "Notebook",
        href: "https://github.com/DATAITINA/my-ai-journey/blob/main/Sign_Lang_using_gTTS.ipynb",
        kind: "notebook",
      },
    ],
    problem:
      "Deaf and hard-of-hearing people still face everyday barriers talking with people who do not sign. A small, fast recogniser for common gestures can remove some of that friction.",
    role: "Sole author. Final year project for my B.Sc. in Industrial Mathematics.",
    built: [
      "A webcam pipeline that finds the hand with MediaPipe and crops it.",
      "A MobileNetV2-based CNN, trained in TensorFlow/Keras, that classifies 7 gestures.",
      "Speech output with gTTS, so each recognised gesture is spoken aloud.",
    ],
    diagram: {
      stages: [["cam"], ["hand"], ["prep"], ["cnn"], ["speech"]],
      nodes: [
        { id: "cam", label: "Webcam", sub: "OpenCV frames", kind: "actor" },
        { id: "hand", label: "Hand tracking", sub: "MediaPipe", kind: "service" },
        { id: "prep", label: "Preprocess", sub: "crop · resize", kind: "service" },
        { id: "cnn", label: "MobileNetV2", sub: "7 classes · Keras", kind: "ai" },
        { id: "speech", label: "Speech", sub: "gTTS", kind: "app" },
      ],
      edges: [
        { from: "cam", to: "hand" },
        { from: "hand", to: "prep" },
        { from: "prep", to: "cnn" },
        { from: "cnn", to: "speech" },
      ],
      caption:
        "A small, fast pipeline: track the hand first, so the CNN only sees the part of the frame that matters.",
    },
    decisions: [
      {
        title: "MobileNetV2 for speed",
        body: "Real time matters more than squeezing out the last point of accuracy. MobileNetV2 is light enough to keep up with a live webcam.",
      },
      {
        title: "Track the hand before classifying",
        body: "Cropping to the hand with MediaPipe removes the background, so the classifier learns gestures, not rooms.",
      },
      {
        title: "A small, fixed vocabulary",
        body: "Seven well-separated gestures, done reliably, before attempting open-vocabulary signing.",
      },
    ],
    improveNext: [
      "Move from single frames to short sequences, so moving signs can be recognised.",
      "Grow the vocabulary with data from more signers and lighting conditions.",
      "Package it as a web or mobile app instead of a notebook.",
    ],
  },
];

export type MoreWork = {
  title: string;
  body: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  tag?: string;
};

export const MORE_WORK: MoreWork[] = [
  {
    title: "Nigerian Food Nutrition Assistant",
    body: "A RAG assistant that answers nutrition questions about Nigerian foods from a FAISS index, with Gemini writing the grounded answer.",
    stack: ["LangChain", "FAISS", "Gemini"],
    href: "https://github.com/DATAITINA/my-ai-journey/blob/main/LangChain_RAG_Bot.ipynb",
    linkLabel: "Notebook",
  },
  {
    title: "Forest Fire FWI Predictor",
    body: "A Streamlit app that predicts the Fire Weather Index for Algerian forests and compares Linear, Ridge, Lasso and ElasticNet regression.",
    stack: ["scikit-learn", "Streamlit", "Pandas"],
    href: "https://github.com/DATAITINA/my-ai-journey/tree/main/FWI_Predictor_App",
    linkLabel: "Code",
  },
  {
    title: "SMS Spam Detector",
    body: "NLTK preprocessing, TF-IDF features and logistic regression. 97% accuracy on a 111-message test set. Built at KodeHauz.",
    stack: ["NLTK", "scikit-learn"],
    // TODO(david): add a repo or demo link if this is public.
  },
  {
    title: "Dokusure",
    body: "Document intelligence for shipping paperwork: PDF text extraction with OCR fallback, confidence scores, and low-confidence fields sent to a human to review.",
    stack: ["FastAPI", "Tesseract", "React"],
    href: "https://github.com/DATAITINA/dokusure",
    linkLabel: "Code",
    tag: "Earlier project",
  },
];

/** Engineering habits, each tied to the project that shows it. */
export const PRINCIPLES: {
  title: string;
  body: string;
  proof: { label: string; slug?: string };
}[] = [
  {
    title: "Plan for the AI failing",
    body: "Every AI feature gets a plain path. If the model is down or has no key, the product still works.",
    proof: { label: "Customa's menu fallback", slug: "customa" },
  },
  {
    title: "Escalate when stakes are high",
    body: "Some questions should reach a person, not a model. I build the hand-off in from the start.",
    proof: { label: "Kids Health Hub Africa", slug: "kids-health-hub-africa" },
  },
  {
    title: "Ground answers in sources",
    body: "LLM answers come from retrieved, trusted material, not from what the model happens to remember.",
    proof: { label: "KHHA and the food RAG assistant", slug: "kids-health-hub-africa" },
  },
  {
    title: "Rules where rules belong",
    body: "Certain checks stay deterministic. Models handle the uncertain part, and every decision gets a reason.",
    proof: { label: "Fraud Intelligence System", slug: "fraud-intelligence" },
  },
  {
    title: "Lock down access",
    body: "JWT sign-in, token revocation, per-tenant workspaces and server-side checks. Never trust the browser.",
    proof: { label: "Customa", slug: "customa" },
  },
  {
    title: "Humans review the uncertain",
    body: "Low-confidence outputs are flagged for review instead of passed through silently.",
    proof: { label: "Dokusure (low-confidence fields)" },
  },
  {
    title: "Test the rules",
    body: "The rules that protect users get tests: pytest suites, run against SQLite and Postgres.",
    proof: { label: "Customa and the fraud service", slug: "fraud-intelligence" },
  },
];

export type Experience = {
  org: string;
  role: string;
  place: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    org: "ITINA AI",
    role: "Founder",
    place: "Nigeria",
    period: "2026 – Present",
    points: [
      "Started ITINA AI as the home for my independent AI product work.",
      "Design, build and deploy each product end to end: LLM features, FastAPI or Supabase backends, React front ends, Vercel hosting.",
      // TODO(david): name the products shipped under ITINA AI and one concrete result for each.
    ],
  },
  {
    org: "KodeHauz",
    role: "AI/ML Engineer Research Intern",
    place: "Eket, Nigeria",
    period: "Mar 2025 – Sep 2025",
    points: [
      "Built an SMS spam detector with NLTK, TF-IDF and logistic regression: 97% accuracy on 111 test messages.",
      "Trained and compared 10+ scikit-learn models (linear, polynomial, Ridge, Lasso, ElasticNet, logistic regression, k-NN, Naive Bayes, SVM, Perceptron). Tuned them with GridSearchCV and RandomizedSearchCV and judged them on F1, ROC-AUC, R² and RMSE.",
      "Shipped Python/FastAPI services that moved models out of notebooks and into APIs other apps could call.",
      "Built a Streamlit sign language translator with TensorFlow, OpenCV and text-to-speech.",
      "Did EDA and feature engineering on real datasets (forest fires, house prices, student performance), from CSV, SQLite and MongoDB.",
      "Led a 1-month Holiday Tech Camp for 150+ students (AI, Python, web, Arduino robotics). It ended with students building their own object-detection robots.",
    ],
  },
];

export const EDUCATION = {
  school: "Covenant University",
  degree: "B.Sc. Industrial Mathematics",
  period: "Sep 2022 – Jul 2026",
  note: "Final year project: real-time sign language recognition with CNNs.",
};

export type Skill = { name: string; proof: { label: string; slug?: string }[] };

/** Only skills with visible proof. Each one names where it was used. */
export const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: "LLMs, RAG & agents",
    items: [
      {
        name: "RAG",
        proof: [{ label: "KHHA", slug: "kids-health-hub-africa" }, { label: "Food RAG" }],
      },
      {
        name: "Gemini",
        proof: [{ label: "KHHA", slug: "kids-health-hub-africa" }, { label: "Food RAG" }],
      },
      { name: "LangChain", proof: [{ label: "Food RAG" }, { label: "Customa", slug: "customa" }] },
      { name: "FAISS", proof: [{ label: "Food RAG" }] },
      { name: "Tool-using agents", proof: [{ label: "Customa", slug: "customa" }] },
      {
        name: "Guardrails & fallbacks",
        proof: [
          { label: "Customa", slug: "customa" },
          { label: "KHHA", slug: "kids-health-hub-africa" },
        ],
      },
    ],
  },
  {
    category: "Machine learning",
    items: [
      { name: "PyTorch", proof: [{ label: "Fraud", slug: "fraud-intelligence" }] },
      {
        name: "TensorFlow / Keras",
        proof: [{ label: "Sign language", slug: "sign-language-recognition" }],
      },
      { name: "scikit-learn", proof: [{ label: "KodeHauz" }, { label: "FWI" }] },
      { name: "NLP (NLTK, TF-IDF)", proof: [{ label: "Spam detector" }] },
      { name: "Model evaluation", proof: [{ label: "KodeHauz" }] },
    ],
  },
  {
    category: "Computer vision",
    items: [
      {
        name: "CNNs / MobileNetV2",
        proof: [{ label: "Sign language", slug: "sign-language-recognition" }],
      },
      { name: "MediaPipe", proof: [{ label: "Sign language", slug: "sign-language-recognition" }] },
      { name: "OpenCV", proof: [{ label: "Sign language", slug: "sign-language-recognition" }] },
    ],
  },
  {
    category: "Backend & data",
    items: [
      { name: "Python", proof: [{ label: "All projects" }] },
      {
        name: "FastAPI",
        proof: [
          { label: "Customa", slug: "customa" },
          { label: "Fraud", slug: "fraud-intelligence" },
        ],
      },
      {
        name: "PostgreSQL",
        proof: [
          { label: "Customa", slug: "customa" },
          { label: "Fraud", slug: "fraud-intelligence" },
        ],
      },
      { name: "Supabase", proof: [{ label: "KHHA", slug: "kids-health-hub-africa" }] },
      { name: "JWT auth", proof: [{ label: "Customa", slug: "customa" }] },
      { name: "Docker", proof: [{ label: "Fraud", slug: "fraud-intelligence" }] },
      {
        name: "pytest",
        proof: [
          { label: "Fraud", slug: "fraud-intelligence" },
          { label: "Customa", slug: "customa" },
        ],
      },
    ],
  },
  {
    category: "Frontend & shipping",
    items: [
      { name: "TypeScript", proof: [{ label: "Customa", slug: "customa" }] },
      {
        name: "React + Vite",
        proof: [
          { label: "KHHA", slug: "kids-health-hub-africa" },
          { label: "Customa", slug: "customa" },
        ],
      },
      { name: "PWAs", proof: [{ label: "KHHA", slug: "kids-health-hub-africa" }] },
      { name: "Streamlit", proof: [{ label: "FWI" }, { label: "KodeHauz" }] },
      { name: "Vercel", proof: [{ label: "Customa", slug: "customa" }] },
    ],
  },
];
