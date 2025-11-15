import { useState, useEffect } from 'react'
import './App.css'
import {
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  RocketIcon,
  GithubIcon,
  ExternalLinkIcon,
  EducationIcon,
  BriefcaseIcon,
  LanguageIcon,
  TwitterIcon,
  CarIcon,
  ChatIcon,
  MobileIcon
} from './components/Icons'

function App() {
  const [displayText, setDisplayText] = useState('')
  const [currentSection, setCurrentSection] = useState('intro')
  const [showModal, setShowModal] = useState(false)
  const fullText = "Hello, I'm Thiraviyam"

  // Light theme only
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setCurrentSection(sectionId)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img
            src="/profile.jpg"
            alt="Thiraviyam"
            className="logo-image"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
          />
          <span className="nav-tag">{'<Thiraviyam />'}</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('intro')} className={currentSection === 'intro' ? 'active' : ''}>Home</button>
          <button onClick={() => scrollToSection('about')} className={currentSection === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => scrollToSection('skills')} className={currentSection === 'skills' ? 'active' : ''}>Skills</button>
          <button onClick={() => scrollToSection('experience')} className={currentSection === 'experience' ? 'active' : ''}>Experience</button>
          <button onClick={() => scrollToSection('projects')} className={currentSection === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => scrollToSection('github')} className={currentSection === 'github' ? 'active' : ''}>GitHub</button>
          <button onClick={() => scrollToSection('contact')} className={currentSection === 'contact' ? 'active' : ''}>Contact</button>
        </div>
      </nav>

      {/* Hero/Intro Section */}
      <section id="intro" className="section hero-section">
        <div className="hero-content-wrapper">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <div className="terminal-title">thiraviyam@portfolio:~</div>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">
                <span className="prompt">$</span> <strong>whoami</strong>
              </p>
              <h1 className="typing-text">{displayText}<span className="cursor">|</span></h1>
              <p className="subtitle"><strong>Full Stack Python Developer | AI Enthusiast | Problem Solver</strong></p>
              <p className="terminal-line">
                <span className="prompt">$</span> <strong>cat current_status.txt</strong>
              </p>
              <p className="status-text">
                Building intelligent systems with Python, React & AI<br/>
                Location: Bengaluru, India<br/>
                Status: Open to opportunities
              </p>
              <div className="cta-buttons">
                <a href="https://linkedin.com/in/thiraviyam-python-dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <LinkedInIcon size={20} />
                  LinkedIn
                </a>
                <a href="mailto:lingesh559@gmail.com" className="btn btn-secondary">
                  <EmailIcon size={20} />
                  Email Me
                </a>
                <button onClick={() => scrollToSection('projects')} className="btn btn-accent">
                  <RocketIcon size={20} />
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<about>'}</span>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Who Am I?</h3>
              <p>
                I'm a <strong>Full Stack Python Developer</strong> with a passion for building intelligent,
                scalable systems. My expertise spans from backend development with Django, Flask, and FastAPI
                to creating beautiful frontends with React and React Native.
              </p>
              <p>
                Currently, I'm working at <strong>BuzzTrackers</strong>, where I develop AI-powered solutions
                using LLMs, create real-time dashboards, and build automation tools that make life easier.
              </p>
              <p>
                Before diving into full-stack development, I spent 5+ years in <strong>Digital Marketing</strong>,
                where I scaled organic traffic by 100% and led data-driven campaigns. This unique background
                gives me a holistic view of building products that users love.
              </p>
              <div className="quick-facts">
                <div className="fact">
                  <span className="fact-icon">
                    <EducationIcon size={36} color="var(--accent-primary)" />
                  </span>
                  <div>
                    <strong>Education</strong>
                    <p>MCA from SRM Institute (2024-2025)</p>
                    <p>BSc Mathematics (2015-2018)</p>
                  </div>
                </div>
                <div className="fact">
                  <span className="fact-icon">
                    <BriefcaseIcon size={36} color="var(--accent-primary)" />
                  </span>
                  <div>
                    <strong>Experience</strong>
                    <p>Full Stack Dev (2024-Present)</p>
                    <p>Digital Marketing (2019-2024)</p>
                  </div>
                </div>
                <div className="fact">
                  <span className="fact-icon">
                    <LanguageIcon size={36} color="var(--accent-primary)" />
                  </span>
                  <div>
                    <strong>Languages</strong>
                    <p>English (Advanced)</p>
                    <p>Tamil (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="section-title-close">
            <span className="tag-close">{'</about>'}</span>
          </h2>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<skills>'}</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">RESTful APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Plotly</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitLab</span>
                <span className="skill-tag">Google Cloud</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI & Automation</h3>
              <div className="skill-tags">
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">MCP</span>
                <span className="skill-tag">Lang Graph</span>
                <span className="skill-tag">Playwright</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other</h3>
              <div className="skill-tags">
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Proxy Management</span>
              </div>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag soft">Problem Solving</span>
              <span className="skill-tag soft">Collaboration</span>
              <span className="skill-tag soft">Communication</span>
              <span className="skill-tag soft">Self-Motivation</span>
            </div>
          </div>
          <h2 className="section-title-close">
            <span className="tag-close">{'</skills>'}</span>
          </h2>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<experience>'}</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Dec 2024 - Present</span>
                <h3>Fullstack Python Developer</h3>
                <h4>BuzzTrackers • Chennai, India</h4>
                <ul>
                  <li>Adapted modular design with MCP and Lang Graph for flexible orchestration and automated reasoning in large data workflows</li>
                  <li>Developed LLM integrations for PDF chatbots and semantic search, enabling next-gen conversational interfaces</li>
                  <li>Built real-time tools and dashboards using plugin-driven analytics for immediate reporting</li>
                  <li>Focused on maximizing automation and creating efficient AI-powered decision-support systems</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Feb 2019 - Dec 2024</span>
                <h3>Digital Marketing Specialist</h3>
                <h4>Capecom Solutions Pvt Ltd • Nagercoil, Tamil Nadu</h4>
                <ul>
                  <li>Scaled organic traffic by 100% using SEO best practices and Google Analytics</li>
                  <li>Led integrated digital campaigns tracking KPIs and conversion funnels</li>
                  <li>Mentored team of 3 in SEO and analytics reporting</li>
                  <li>Delivered actionable insights to boost engagement and ROI</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="section-title-close">
            <span className="tag-close">{'</experience>'}</span>
          </h2>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<projects>'}</span>
          </h2>
          <div className="projects-showcase">

            {/* Project 1 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>Twitter Automation Tool</h3>
                <div className="project-tech-tags">
                  <span>Python</span>
                  <span>Playwright</span>
                  <span>Proxy Management</span>
                  <span>Anti-Detection</span>
                </div>
                <p className="project-description">
                  Built an enterprise-grade automation system capable of managing over 1000+ Twitter accounts simultaneously with human-like behavior patterns. The platform incorporates sophisticated anti-detection algorithms, intelligent rate limiting, and advanced proxy rotation mechanisms to ensure seamless operation at scale. Each account operates independently with unique fingerprints, browsing patterns, and interaction timings to mimic genuine user behavior.
                </p>
                <p className="project-description">
                  Developed using Playwright for browser automation combined with custom Python scripts for orchestration and monitoring. The system features real-time analytics dashboards, automatic error recovery, and adaptive scheduling based on platform restrictions. Successfully deployed in production environments handling millions of daily interactions while maintaining account health and avoiding platform detection mechanisms.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>AI Vehicle Insurance Valuation</h3>
                <div className="project-tech-tags">
                  <span>Python</span>
                  <span>MCP</span>
                  <span>Lang Graph</span>
                  <span>Web Scraping</span>
                </div>
                <p className="project-description">
                  Engineered an intelligent vehicle valuation system leveraging MCP (Model Context Protocol) and Lang Graph frameworks to automate price discovery and insurance quote generation. The platform scrapes real-time data from multiple automotive marketplaces, analyzes historical pricing trends, and applies machine learning models to predict accurate vehicle values based on make, model, year, condition, and regional market factors.
                </p>
                <p className="project-description">
                  Integrated advanced AI workflows using Lang Graph for decision-making and data orchestration, enabling the system to process thousands of vehicle listings daily and generate precise insurance valuations. The solution reduces manual assessment time by 80% while improving accuracy through continuous learning from market data. Features include automated report generation, API integrations with insurance providers, and real-time market trend visualization dashboards.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>PDF Chatbot with LLM Integration</h3>
                <div className="project-tech-tags">
                  <span>Python</span>
                  <span>LLMs</span>
                  <span>Vector DB</span>
                  <span>FastAPI</span>
                </div>
                <p className="project-description">
                  Developed an advanced conversational AI system that transforms static PDF documents into interactive knowledge bases. The platform utilizes semantic search powered by vector embeddings to extract, index, and understand complex document structures including tables, charts, and multi-column layouts. Users can ask natural language questions and receive contextually accurate answers with source citations and page references.
                </p>
                <p className="project-description">
                  Architected using FastAPI backend with LLM integration (GPT-4/Claude) for natural language processing and response generation. Implemented chunking strategies, recursive text splitting, and hybrid search combining dense and sparse retrieval methods. The system supports multi-document conversations, maintains chat history context, and handles technical documents, legal contracts, and research papers with high accuracy. Deployed with scalable microservices architecture supporting concurrent users.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>Instagram Micro-Influencer Discovery Platform</h3>
                <div className="project-tech-tags">
                  <span>FastAPI</span>
                  <span>Bright Data MCP</span>
                  <span>Gemini AI</span>
                  <span>Python AsyncIO</span>
                  <span>Docker</span>
                  <span>Google Cloud Run</span>
                  <span>SERP API</span>
                </div>
                <p className="project-description">
                  Engineered an enterprise-grade influencer discovery system leveraging Bright Data's Model Context Protocol (MCP) for production-scale Instagram web scraping. The technical brilliance lies in the CI/CD pipeline integration where Bright Data acts as a real-time data source - the MCP server communicates via stdio protocol, initiating snapshot-based scraping jobs that handle Instagram's aggressive anti-bot mechanisms, CAPTCHA challenges, and rate limiting through managed proxy rotation. Implemented smart polling architecture with 600-attempt retry logic and exponential backoff, ensuring data consistency even under Instagram's dynamic DOM structure and JavaScript-heavy rendering. Built multi-method search workflow combining SERP API (AI + non-AI modes) with Google Search integration for comprehensive username discovery and deduplication.
                </p>
                <p className="project-description">
                  Architected parallel processing pipeline achieving 5x performance improvement by processing 5 concurrent profile verification streams using Python asyncio with intelligent batch management and garbage collection between batches. Implemented configurable performance presets (FAST/BALANCED/THOROUGH) with adaptive timeout boundaries (60-300s per profile) and dynamic batch sizing (3-10 profiles) based on Cloud Run resource constraints, preventing cascade failures from slow snapshots. Integrated Google Gemini AI (gemini-2.5-flash) for multi-layered brand collaboration detection featuring two-tier filtering system - pattern-based pre-filter for instant rejection of personal posts, followed by combined AI analysis for sponsorship detection and brand extraction in a single API call. Enhanced with advanced brand collaboration verification analyzing hashtags, captions, mentions, and media metadata through context-aware NLP with confidence scoring. Deployed on Google Cloud Run with 4GB RAM containerization, implementing environment-based configuration for Docker orchestration and automated horizontal scaling. Features include Excel export with detailed evidence, batch processing mode for bulk verification, and real-time analytics.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>TrunkTalk - Enterprise Company Chat Mobile Application</h3>
                <div className="project-tech-tags">
                  <span>React Native</span>
                  <span>TypeScript</span>
                  <span>Firebase</span>
                  <span>Firestore</span>
                  <span>Agora RTC</span>
                  <span>Android/iOS</span>
                  <span>Real-time Messaging</span>
                </div>
                <p className="project-description">
                  Developed a full-featured enterprise communication mobile application using React Native and TypeScript for cross-platform deployment on Android and iOS. Built comprehensive role-based access control system supporting three user hierarchies - SuperAdmin (company-wide management), Project Admin (project-level oversight), and regular Users with distinct permission sets and navigation flows. Implemented secure authentication flow featuring phone OTP verification with Firebase Auth, SuperAdmin email/password login, and invitation-based user registration with QR code scanning capabilities. Architected real-time messaging infrastructure powered by Firebase Firestore enabling instant text messaging, image sharing via camera/gallery integration, file attachments (PDF, Word, Excel), and advanced features including message editing, deletion, threading, reactions, and read receipts with typing indicators.
                </p>
                <p className="project-description">
                  Engineered sophisticated project management system allowing SuperAdmins to create and manage multiple organizational projects with member allocation, while Project Admins handle team coordination within assigned projects. Integrated Agora RTC SDK for high-quality voice and video calling capabilities supporting 1-on-1 communications with call history tracking and push notifications via Firebase Cloud Messaging. Developed comprehensive group and channel management features including creation, member addition/removal, settings modification, message pinning, and role-based permissions. Built native Android APK build pipeline using Gradle with release signing, achieving app size optimization and performance tuning for 60 FPS animations. The application handles 1,500+ lines of production code across 30+ screens with complete offline support and auto-sync. <strong>Note: This project was built with AI-assisted development using Claude Code and other AI coding tools, demonstrating proficiency in leveraging modern AI development workflows for rapid enterprise application development.</strong>
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="showcase-project">
              <div className="showcase-content">
                <h3>WhatsApp Business AI Bot with RAG-Powered Broadcasting</h3>
                <div className="project-tech-tags">
                  <span>Flask</span>
                  <span>LangChain</span>
                  <span>FAISS Vector DB</span>
                  <span>OpenAI Embeddings</span>
                  <span>Meta WhatsApp API</span>
                </div>
                <p className="project-description">
                  Built an intelligent WhatsApp Business automation platform integrating Meta's official WhatsApp Business API with RAG (Retrieval-Augmented Generation) for context-aware conversational AI. The system dynamically processes PDF documents uploaded through a web interface, extracting text using PyPDF2 and chunking content into semantic segments. Implemented FAISS vector store with OpenAI embeddings for efficient similarity search, creating an in-memory document store with IndexFlatL2 for cosine similarity matching. The RAG pipeline leverages LangChain's VectorStoreRetriever to fetch relevant context and generate accurate responses to customer queries based on uploaded business documentation.
                </p>
                <p className="project-description">
                  Engineered mass broadcasting system with CSV-based customer management, automatically fetching approved templates from Meta's WhatsApp Business API and distributing personalized messages at scale. Implemented MongoDB integration for campaign tracking, storing customer responses and message IDs for analytics. Built Flask REST API with endpoints for PDF upload, template management, and real-time webhook processing for incoming messages. The system handles greeting detection with hardcoded responses, falls back to RAG-powered answers for complex queries, and maintains conversation context across sessions. Features include template image mapping, secure file handling, and environment-based configuration for seamless deployment across development and production environments.
                </p>
              </div>
            </div>

          </div>
          <h2 className="section-title-close">
            <span className="tag-close">{'</projects>'}</span>
          </h2>
        </div>
      </section>

      {/* GitHub Profile Section */}
      <section id="github" className="section github-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<github-profile>'}</span>
          </h2>

          {/* ONE BIG GITHUB BOX */}
          <div className="github-unified-box">

            {/* UPPER PART: Heatmap */}
            <div className="github-heatmap-section">
              <h4>GitHub Contribution Activity</h4>
              <p className="heatmap-subtitle">My coding journey - every contribution counts • Live Data</p>
              <div className="heatmap-container">
                <img
                  src="https://ghchart.rshah.org/thiraviyalingesh"
                  alt="GitHub Contribution Heatmap"
                  className="heatmap-img-centered"
                />
              </div>
            </div>

            {/* LOWER PART: 5 Cards in Row */}
            <div className="github-stats-row">
              <div className="github-stat-card">
                <strong>24</strong>
                <span>Repositories</span>
              </div>
              <div className="github-stat-card">
                <strong>12</strong>
                <span>Followers</span>
              </div>
              <div className="github-stat-card">
                <strong>18</strong>
                <span>Following</span>
              </div>
              <div className="github-stat-card">
                <strong>500+</strong>
                <span>Contributions</span>
              </div>
              <a href="https://github.com/thiraviyalingesh" target="_blank" rel="noopener noreferrer" className="github-stat-card github-link-card">
                <GithubIcon size={32} color="#fff" />
                <span>View Profile</span>
              </a>
            </div>

          </div>

          <h2 className="section-title-close">
            <span className="tag-close">{'</github-profile>'}</span>
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">
            <span className="tag-open">{'<contact>'}</span>
          </h2>
          <div className="contact-content">
            <h3>Let's Build Something Amazing Together</h3>
            <p>I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="contact-methods">
              <a href="mailto:lingesh559@gmail.com" className="contact-card">
                <span className="contact-icon">
                  <EmailIcon size={40} color="var(--accent-primary)" />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>lingesh559@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919487520528" className="contact-card">
                <span className="contact-icon">
                  <PhoneIcon size={40} color="var(--accent-primary)" />
                </span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 9487520528</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/thiraviyam-python-dev" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">
                  <LinkedInIcon size={40} color="var(--accent-primary)" />
                </span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>thiraviyam-python-dev</p>
                </div>
              </a>
              <div className="contact-card">
                <span className="contact-icon">
                  <LocationIcon size={40} color="var(--accent-primary)" />
                </span>
                <div>
                  <strong>Location</strong>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="section-title-close">
            <span className="tag-close">{'</contact>'}</span>
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-social">
          <a href="mailto:lingesh559@gmail.com" className="footer-link" title="Email">
            <EmailIcon size={24} />
            <span>lingesh559@gmail.com</span>
          </a>
          <a href="tel:+919487520528" className="footer-link" title="Phone">
            <PhoneIcon size={24} />
            <span>+91 9487520528</span>
          </a>
          <a href="https://linkedin.com/in/thiraviyam-python-dev" target="_blank" rel="noopener noreferrer" className="footer-link" title="LinkedIn">
            <LinkedInIcon size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/thiraviyalingesh" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub">
            <GithubIcon size={24} />
            <span>GitHub</span>
          </a>
        </div>
        <p className="footer-note">
          <span className="prompt">$</span> exit 0
        </p>
      </footer>

      {/* Profile Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-body">
              <h2 className="modal-greeting">HEY!!!</h2>
              <img src="/profile.jpg" alt="Thiraviyam S" className="modal-image" />
              <p className="modal-name">Thiraviyam S</p>
              <p className="modal-title">Full Stack Python Developer</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
