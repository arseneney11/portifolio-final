import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Asterisk, Github,
  Linkedin, Mail, Menu, X, MoveUpRight, Terminal, Network,
  BrainCircuit, ShieldCheck
} from 'lucide-react'

const profile = {
  name: 'Arsene Shimwa',
  initials: 'AS',
  email: 'shimwaarsene@gmail.com',
  github: 'https://github.com/arseneney11',
  linkedin: 'https://www.linkedin.com/in/arsene-shimwa-b54508285', // Replace with your profile URL
  resumeRequest: 'mailto:shimwaarsene@gmail.com?subject=Request%20for%20CV',
}

const projects = [
  {
    number: '01',
    name: 'SmartPark',
    type: 'FINAL-YEAR PROJECT · COMPUTER VISION',
    description: 'A smart parking system connecting number-plate recognition, parking status, a cloud database, and a Flutter mobile app.',
    tags: ['Python', 'OpenCV', 'EasyOCR', 'Flask', 'Firestore', 'Flutter'],
    className: 'project-smartpark',
    visual: 'parking',
    link: 'https://github.com/arseneney11/smart_parking_system',
    linkLabel: 'Explore repository',
    challenge: 'Connect a camera-based entry/exit workflow to parking availability and a mobile experience.',
    contribution: 'Contributed to the end-to-end academic project spanning plate capture and recognition, backend processing, Firestore data updates, and Flutter integration.',
    architecture: 'ESP32-CAM → Python / OpenCV + EasyOCR → Flask service → Firestore → Flutter app. The system was designed to connect recognition events to parking information.',
    evidence: 'The project report recorded 92% license-plate recognition accuracy, 2.8-second slot-update latency, and 98% billing accuracy. These are project-reported results, not independently audited benchmarks.',
    learning: 'Computer vision quality depends on capture conditions; integration also requires consistent event handling and clear boundaries between camera, API, database, and app.'
  },
  {
    number: '02',
    name: 'Inventory Management System',
    type: 'SOFTWARE ENGINEERING · INVENTORY WORKFLOWS',
    description: 'An inventory-focused application built to organize stock information and support everyday inventory operations.',
    tags: ['Python', 'Django', 'Database Design', 'CRUD', 'Backend'],
    className: 'project-backend',
    visual: 'backend',
    link: 'https://github.com/arseneney11',
    linkLabel: 'Find project on GitHub',
    challenge: 'Structure inventory data and provide a consistent way to manage records through application workflows.',
    contribution: 'Built as a hands-on software project. Review the repository for the exact modules, implemented workflows, and individual contribution before publishing a more detailed feature list.',
    architecture: 'Application views and business logic work with persistent data models to support inventory-related operations. The repository is the source of truth for the exact implementation.',
    evidence: 'This portfolio links to the GitHub profile until a direct, public repository URL is confirmed.',
    learning: 'Inventory software needs clear data models, reliable validation, and careful handling of state-changing operations.'
  },
  {
    number: '03',
    name: 'Kigali Pulse — Backend',
    type: 'DJANGO · REST API DEVELOPMENT',
    description: 'A backend project focused on structuring application data and exposing functionality through Django-based APIs.',
    tags: ['Python', 'Django', 'Django REST Framework', 'Models', 'API Design'],
    className: 'project-backend',
    visual: 'backend',
    link: 'https://github.com/arseneney11',
    linkLabel: 'Find project on GitHub',
    challenge: 'Organize the backend foundation so application features can be built on clear models and predictable API behavior.',
    contribution: 'Worked on the Django backend project and its data-model/API foundations. The public repository should be used to verify the current feature set and implementation details.',
    architecture: 'Django application → models and validation → API views/serializers → database-backed responses, following the project structure.',
    evidence: 'A direct repository link can replace the GitHub profile link once the project repository is public and confirmed.',
    learning: 'Good API design depends on clear responsibilities between models, serializers, views, and URL routing.'
  },
  {
    number: '04',
    name: 'SOPAD — Backend APIs',
    type: 'BACKEND ENGINEERING · API SAFETY',
    description: 'Django REST endpoints for public contact and partnership requests, with validation and safeguards around untrusted submissions.',
    tags: ['Python', 'Django', 'DRF', 'Validation', 'Throttling', 'Tests'],
    className: 'project-backend',
    visual: 'backend',
    link: 'https://github.com/arseneney11',
    linkLabel: 'Explore GitHub',
    challenge: 'Accept public form submissions without trusting incoming data or allowing unlimited repeated requests.',
    contribution: 'Worked on ContactMessage and PartnershipRequest models and public create endpoints for /api/contact/ and /api/partnerships/. Added input and document-upload validation, scoped rate throttling, and automated tests.',
    architecture: 'HTTP request → DRF create view → serializer and validation → model/database. Public forms use scoped throttling; document validation checks supported formats and file structure.',
    evidence: 'The work included a 15-test suite at the time of development. Confirm the current repository and test results before presenting this as a released production service.',
    learning: 'Public endpoints need layered validation: request shape, file type and content, reasonable request limits, predictable error responses, and tests for invalid input.'
  },
  {
    number: '05',
    name: 'Infrastructure & Networks',
    type: 'BNR INTERNSHIP · ENTERPRISE IT',
    description: 'Practical exposure to enterprise systems administration, virtualization, core network services, and a two-campus networking project.',
    tags: ['Active Directory', 'GPO', 'DHCP', 'VMware', 'Linux', 'VLANs', 'VPN'],
    className: 'project-ml',
    visual: 'ml',
    link: 'https://github.com/arseneney11',
    linkLabel: 'View GitHub profile',
    challenge: 'Understand how identity, network services, virtualized systems, and storage support an organization’s day-to-day IT operations.',
    contribution: 'During the National Bank of Rwanda IT Infrastructure internship, worked with or gained exposure to AD DS, Group Policy, permissions, DHCP, FSRM, VMware, Red Hat, web servers/OpenSSL, NFS/iSCSI, NAS/SAN/RAID, and Microsoft 365.',
    architecture: 'The experience crossed identity and access management, server administration, network services, virtualization, storage, and collaboration tools. A separate two-campus academic network project covered VPN, DHCP, VLANs, EtherChannel, and router-on-a-stick.',
    evidence: 'This is internship and academic-project experience—not a claim of independently owning a production enterprise environment. Firewall work was a demonstration.',
    learning: 'Infrastructure issues rarely live in one layer: name resolution, addressing, permissions, services, and routing need to be checked systematically.'
  },
]
const capabilities = [
  {
    number: '01',
    title: 'Backend engineering',
    icon: Terminal,
    description: 'Building application logic, data models, and APIs that let software work reliably.',
    tools: ['Python', 'Django', 'DRF', 'REST APIs', 'Data modeling', 'Validation', 'Testing'],
  },
  {
    number: '02',
    title: 'Systems & infrastructure',
    icon: Network,
    description: 'Understanding the servers, identity services, storage, and networks applications depend on.',
    tools: ['Linux', 'Windows Server', 'Active Directory', 'DHCP', 'VLANs', 'VMware', 'Storage'],
  },
  {
    number: '03',
    title: 'Offensive security',
    icon: ShieldCheck,
    description: 'Interested in offensive security: discovering exposed information, enumerating systems, testing passwords, and finding weaknesses in authorized environments.',
    tools: ['Reconnaissance', 'OSINT', 'Password cracking / auditing', 'Penetration testing', 'Network enumeration', 'Authorized security labs'],
  },
  {
    number: '04',
    title: 'DevOps & automation',
    icon: Terminal,
    description: 'Working knowledge of development tooling and infrastructure practices, with room to deepen hands-on experience.',
    tools: ['Git', 'Linux', 'Docker', 'CI/CD concepts', 'Virtualization', 'Scripting', 'Deployment basics'],
  },
  {
    number: '05',
    title: 'Applied AI & machine learning',
    icon: BrainCircuit,
    description: 'Building ML foundations and exploring how existing AI tools can improve practical workflows.',
    tools: ['Python', 'NumPy — learning', 'Pandas — learning', 'scikit-learn — learning', 'AI-assisted workflows'],
  },
]
const languages = [
  { name: 'Kinyarwanda', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'German', level: 'Intermediate' },
]

const timeline = [
  { date: '2026', title: 'BSc (Honours) in Information Technology', place: 'University of Rwanda', note: 'Second Class Honours — Upper Division' },
  { date: '2025', title: 'IT Infrastructure Intern', place: 'National Bank of Rwanda', note: 'Systems administration, enterprise services, virtualization, and infrastructure exposure.' },
  { date: '2026', title: 'Backend development & applied learning', place: 'Solvit Africa and independent projects', note: 'Django development, API design, team collaboration, and continued AI/ML learning.' },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduce ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Arsene Shimwa — home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-name">ARSENE<span className="brand-dot">.</span></span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Work', '#work'],
    ['Approach', '#approach'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandMark />
        <div className="nav-right">
          <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          <a
            className="nav-resume"
            href="/cv.pdf"
            download="Arsene_Shimwa_CV.pdf"
            >
            Download CV <ArrowUpRight size={14} />
          </a>
          </nav>
          <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function SystemGraphic() {
  return (
    <div className="portrait-hero-art" aria-label="Portrait of Arsene Shimwa at his thesis defense">
      <div className="portrait-hero-top mono"><span>FIG. 001 / THE BUILDER</span><span>KG · RW</span></div>
      <img src="/arsene-original.png" alt="Arsene Shimwa wearing a teal pinstripe suit at his university thesis defense" />
      <div className="portrait-hero-grid" aria-hidden="true" />
      <div className="portrait-hero-stamp"><Asterisk size={18} /><span>THINK<br />IN SYSTEMS</span></div>
      <div className="portrait-hero-note mono"><span>SOFTWARE · INFRASTRUCTURE · AI</span><span>01 / 03</span></div>
      <div className="portrait-hero-side mono">CURIOUS BY NATURE — PRACTICAL BY DESIGN</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-meta mono"><span><i className="status-dot" /> OPEN TO OPPORTUNITIES</span><span>IT · SOFTWARE · SYSTEMS</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-line" /> IT GRADUATE / ENGINEER IN PROGRESS</p>
            <h1>Building<br />Systems<br /><span className="headline-accent">That Matter<span className="headline-period">.</span></span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-description">I’m Arsene Shimwa, an IT graduate focused on backend development, systems administration, cybersecurity, and exploring how AI can solve real-world problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href={profile.resumeRequest}>Request my CV <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.18} className="hero-art-wrap"><SystemGraphic /></Reveal>
      </div>
      <div className="hero-footer mono"><span>BASED IN KIGALI, RWANDA</span><span>CURIOUS BY NATURE. PRACTICAL BY DESIGN.</span><a href="#work">SCROLL TO EXPLORE <ArrowDownRight size={13} /></a></div>
    </section>
  )
}

function WorkSection() {
  return (
    <section className="section section-work" id="work">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> 01 / SELECTED WORK</p><h2>Ideas are good.<br /><span className="muted-heading">Working systems are better.</span></h2></div>
          <p className="section-intro">Individual case studies across software, infrastructure, and connected systems. Open each one for the problem, my contribution, architecture, and lessons learned.</p>
        </Reveal>
        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.07} className={`project-row ${project.className}`}>
              <div className={`project-visual ${project.visual}`}>
                <div className="project-visual-top mono"><span>PROJECT / {project.number}</span><span>CASE STUDY</span></div>
                {project.visual === 'parking' && <div className="parking-scene">
                  <div className="parking-scan"><span>PLATE DETECTED</span><strong>RAC 482 K</strong><i /></div>
                  <div className="parking-slots"><span className="slot occupied">P—01</span><span className="slot">P—02</span><span className="slot occupied">P—03</span><span className="slot">P—04</span></div>
                  <div className="parking-caption mono">VISION → API → LIVE STATUS</div>
                </div>}
                {project.visual === 'backend' && <div className="backend-scene">
                  <div className="code-window"><div className="window-dots"><i /><i /><i /></div><p><span>01</span> <b>class</b> ServiceAPI:</p><p><span>02</span> &nbsp; <b>def</b> connect(self):</p><p><span>03</span> &nbsp;&nbsp; validate(request)</p><p><span>04</span> &nbsp;&nbsp; return response</p><div className="code-cursor" /></div>
                  <div className="backend-orbit orbit-one" /><div className="backend-orbit orbit-two" /><div className="backend-core">API</div>
                </div>}
                {project.visual === 'ml' && <div className="ml-scene">
                  <div className="ml-label mono">MODEL PIPELINE / 04 STEPS</div>
                  <div className="ml-pipeline"><span>DATA</span><i /><span>TRAIN</span><i /><span className="ml-active">EVALUATE</span></div>
                  <div className="chart-bars"><i style={{height:'28%'}} /><i style={{height:'46%'}} /><i style={{height:'39%'}} /><i style={{height:'66%'}} /><i style={{height:'57%'}} /><i style={{height:'84%'}} /><i style={{height:'72%'}} /><i style={{height:'96%'}} /></div>
                  <div className="ml-caption mono">MEASURE · ITERATE · DOCUMENT</div>
                </div>}
              </div>
              <div className="project-content">
                <div className="project-index mono">{project.number} <span>/ 03</span></div>
                <p className="project-type mono">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <details className="case-study-details">
                  <summary>Read case study <ArrowDownRight size={14} /></summary>
                  <div className="case-study-body">
                    <div><span className="mono">THE CHALLENGE</span><p>{project.challenge}</p></div>
                    <div><span className="mono">MY CONTRIBUTION</span><p>{project.contribution}</p></div>
                    <div><span className="mono">HOW IT FITS TOGETHER</span><p>{project.architecture}</p></div>
                    <div><span className="mono">EVIDENCE & SCOPE</span><p>{project.evidence}</p></div>
                    <div><span className="mono">WHAT I LEARNED</span><p>{project.learning}</p></div>
                  </div>
                </details>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="ai-learning-note">
          <span className="ai-note-icon"><BrainCircuit size={21} /></span>
          <div><p className="eyebrow"><span className="eyebrow-line" /> CURRENT LEARNING TRACK</p><h3>Applied AI & machine learning</h3><p>I’m building foundations in NumPy, Pandas, and scikit-learn, with the goal of applying existing AI tools and models to practical workflows. I’ll add a full case study once I have a reproducible project, evaluation, and repository to show.</p></div>
          <span className="mono ai-note-status">IN PROGRESS</span>
        </Reveal>
        <Reveal className="all-work-link"><span className="mono">MORE REPOS & NOTES</span><a href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={17} /></a></Reveal>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="section section-approach" id="approach">
      <div className="section-wrap">
        <Reveal className="section-heading approach-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> 02 / HOW I THINK</p><h2>Different layers.<br /><span className="muted-heading">One connected system.</span></h2></div>
          <p className="section-intro">I’m interested in how software, infrastructure, security, and intelligence meet. The best solutions account for the whole system—not just one component.</p>
        </Reveal>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return <Reveal key={item.number} delay={index * 0.06} className="capability-card">
              <div className="capability-top"><span className="mono">{item.number} / 05</span><Icon size={23} strokeWidth={1.6} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="capability-tools">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              <div className="capability-corner"><ArrowUpRight size={16} /></div>
            </Reveal>
          })}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section section-about" id="about">
      <div className="section-wrap about-layout">
        <Reveal className="about-left">
          <p className="eyebrow"><span className="eyebrow-line" /> 03 / A LITTLE ABOUT ME</p>
          <h2>A technical mind.<br /><span className="muted-heading">A human approach.</span></h2>
          <div className="about-quote"><span className="quote-mark">“</span><p>Good technology should be thoughtful, useful, and built around real people.</p></div>
          <div className="about-system-card" aria-label="Illustration of connected system layers">
            <span className="mono">A SYSTEMS-THINKING APPROACH / FIG. 02</span>
            <div className="stack-diagram"><i></i><i></i><i></i><i></i></div>
            <div className="diagram-labels mono"><span>APPLICATIONS</span><span>DATA</span><span>INFRASTRUCTURE</span><span>PEOPLE</span></div>
            <p>Understand the layers.<br /><b>Build for the whole.</b></p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="about-right">
          <p className="about-body">I’m an Information Technology graduate from the University of Rwanda, with hands-on exposure to systems administration, networking, and backend development. I learn best by building, testing, and improving real things.</p>
          <p className="about-body">My interests span backend engineering, systems and infrastructure, offensive security, DevOps, and applied AI. I enjoy understanding how the layers fit together and building solutions that are useful beyond the demo.</p>
          <div className="about-facts">
            <div><span className="mono">EDUCATION</span><strong>BSc (Honours), Information Technology</strong><small>Second Class Honours — Upper Division</small></div>
            <div><span className="mono">LOCATION</span><strong>Kigali, Rwanda</strong><small>Open to local & international opportunities</small></div>
          </div>
          <div className="language-panel">
            <div className="language-heading"><span className="mono">LANGUAGES</span><span className="language-note">Communication is part of the toolkit.</span></div>
            {languages.map((language, index) => <div className="language-row" key={language.name}>
              <span className="language-index mono">0{index + 1}</span><strong>{language.name}</strong><span>{language.level}</span>
            </div>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section section-experience" id="experience">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> 04 / EXPERIENCE & EDUCATION</p><h2>Built on foundations.<br /><span className="muted-heading">Moving with intention.</span></h2></div>
        </Reveal>
        <div className="timeline">
          {timeline.map((item, index) => <Reveal key={`${item.date}-${item.title}`} delay={index * 0.07} className="timeline-item">
            <span className="timeline-dot" />
            <span className="timeline-date mono">{item.date}</span>
            <div className="timeline-copy"><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p className="timeline-note">{item.note}</p></div>
            <ArrowUpRight className="timeline-arrow" size={19} />
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section section-contact" id="contact">
      <div className="section-wrap">
        <Reveal className="contact-top"><p className="eyebrow"><span className="eyebrow-line" /> 05 / WHAT'S NEXT</p><span className="mono contact-coordinate">01°56′ S / 30°04′ E</span></Reveal>
        <Reveal className="contact-main">
          <h2>GOOD SYSTEMS<br />START WITH<br /><span>GOOD QUESTIONS<span className="headline-period">.</span></span></h2>
          <div className="contact-aside"><p>Have an opportunity, a project, or an interesting problem to solve? I’d be glad to hear from you.</p><a className="button button-light" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a></div>
        </Reveal>
        <div className="contact-rule" />
        <footer className="site-footer">
          <div className="footer-brand"><BrandMark /><span className="mono">BUILT WITH INTENT.</span></div>
          <div className="footer-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /> <span>GITHUB</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /> <span>LINKEDIN</span></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /> <span>EMAIL</span></a>
          </div>
          <p className="mono footer-credit">DESIGNED WITH INTENTION · © {new Date().getFullYear()} ARSENE SHIMWA</p>
        </footer>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <ApproachSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <a className="back-to-top" href="#home" aria-label="Back to top"><MoveUpRight size={17} /></a>
    </>
  )
}

export default App
