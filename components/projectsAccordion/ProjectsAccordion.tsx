"use client"
import React, { useState, useRef, useEffect } from 'react'
import s from './ProjectsAccordion.module.scss'
import { MdAdjust, MdArrowDropDown, MdArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'

// Define tag categories - major shows first, then minor, then trivial
// Unspecified tags default to trivial
const tagCategories = {
  major: ['React', 'TypeScript', 'Python', 'Java', 'C#', 'Angular', 'Blender', 'Databases', 'Cloud', 'DevOps'],
  minor: ['Next.js', 'DevOps', 'Ansible', 'Docker', 'Kubernetes', 'Godot', 'Microservices', 'AI/ML'],
}

const getTagCategory = (tag: string): number => {
  if (tagCategories.major.includes(tag)) return 0
  if (tagCategories.minor.includes(tag)) return 1
  return 2 // trivial
}

const projects = [
  {
    title: 'General Motors – My Orders Page: Frontend & Checkout Integration Jul 2023 - Dec 2025',
    tags: ['React', 'Next.js', 'TypeScript', 'Solid.js', 'DevOps', 'Java', 'Cloud', 'Databases', 'PostgreSQL', 'Microservices', 'Kubernetes', 'Docker'],
    content: (
      <div>
        <div>
          <MdAdjust /> Directed frontend development for the My Orders experience across four European markets (FR, SE, CH, DE), building with Next.js, React, TypeScript, and Java while integrating Strapi CMS and enterprise APIs for localized vehicle and financial data. <br />
          <MdAdjust /> Managed the My Orders page on <Link href="https://www.cadillaceurope.com" target="_blank" rel="noopener noreferrer">cadillaceurope.com</Link>, enabling customers to view, track, and manage vehicle orders with comprehensive visibility into order status, financial details, and logistical timelines across multiple markets. <br />
          <MdAdjust /> Worked within the D2C and Dash teams to enhance order visibility, integrating financial, logistical, and vehicle details (make, model, trim, RPO/parts) through Strapi CMS and connected APIs, requiring careful coordination across multiple backend services. <br />
          <MdAdjust /> Migrated the My Orders app to Solid.js within the Dash monorepo, improving performance, maintainability, and code reuse while reducing bundle size and rendering overhead. <br />
          <MdAdjust /> Architected Docker and Podman container environments using WSL to build and manage complex microservices, achieving 100% environment parity between development and production. <br />
          <MdAdjust /> Collaborated with backend teams and QA engineers to resolve defects, optimize API calls, and strengthen data integrity and security across the European platform. <br />
          <MdAdjust /> Participated in agile sprints using Jira, documented processes in Confluence, and contributed to CI/CD pipeline improvements via Azure DevOps for streamlined releases. <br />
          <MdAdjust /> Contributed to the integration of Adyen for checkout, supporting secure, reliable, and compliant payment processing within the My Orders workflow. <br />
          <MdAdjust /> Remediated vulnerabilities detected by GitHub Advanced Security and proactively managed third-party dependencies to ensure enterprise compliance. <br />
        </div>
      </div>
    ),
  },
  {
    title: 'General Motors – Service Workbench Mar 2021 - Jun 2023',
    tags: ['React', 'Angular', 'TypeScript', 'DevOps', 'Java', 'Cloud', 'Databases', 'PostgreSQL', 'Kubernetes', 'Docker'],
    content: (
      <div>
        <div>
          <MdAdjust /> Technical contributor for the modernization of the enterprise technician web platform, re-engineering legacy architecture with Angular, TypeScript, and Java to improve scalability, maintainability, and responsiveness for thousands of service technicians globally. <br />
          <MdAdjust /> Created new frontend features and refactored legacy Angular code for strict mode migration, establishing rigorous code quality standards including Angular and ESLint Strict Modes to ensure long-term stability and security. <br />
          <MdAdjust /> Engineered robust RESTful APIs and backend services using Java and Spring Boot, managing dependencies via Maven and optimizing API discoverability using Spring Boot Swagger. <br />
          <MdAdjust /> Improved maintainability by modernizing legacy components, applying Angular best practices, and enhancing code quality across a 1.5-year modernization effort. <br />
          <MdAdjust /> Optimized data interactions through SQL and JOOQ while utilizing Docker and PostgreSQL for containerized database management. <br />
          <MdAdjust /> Managed end-to-end CI/CD pipelines via Azure DevOps, automating software delivery and reducing manual deployment time significantly. <br />
          <MdAdjust /> Collaborated with UX, backend, and QA teams to deliver user-facing functionality while preserving existing workflows and maintaining backward compatibility. <br />
          <MdAdjust /> Managed microfrontends and monitored pods using Kubernetes to ensure high availability and efficient resource utilization. <br />
        </div>
      </div>
    ),
  },
  {
    title: 'Sinkhole — Procedural Dungeon Crawler Jan 2026 - Present',
    tags: ['C#', 'Godot', 'WIP', "Shaders"],
    content: (
      <div>
        <div>
          <MdAdjust /> An endlessly descending dungeon crawler built in Godot 4 using C# and GDScript. The world is generated procedurally at runtime using a seeded chunk-based system, with a dungeon generator that constructs layouts as the player descends deeper into the sinkhole. Includes a minimap that updates dynamically as new areas are revealed. <br />
          <MdAdjust /> Work in progress — exploring procedural generation, chunk streaming, and dungeon layout algorithms. <br />
          <MdAdjust /> Tools: Godot 4, C#, GDScript. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/SinkholeProject" target="_blank" rel="noopener noreferrer">
            Sinkhole Project Repository
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Reactive Microservice Recommender System Jan 2025 - Mar 2025',
    tags: ['Java', 'Microservices'],
    content: (
      <div>
        <div>
          <MdAdjust /> Engineered an asynchronous microservice using Spring WebFlux and Project Reactor to parallelize recommendation computations across multiple CPU cores using declarative reactive streams. <br />
          <MdAdjust /> Implemented client-side HTTP interface proxies and configured Spring Dependency Injection to enable non-blocking inter-service communication between microservices in the distributed system. <br />
          <MdAdjust /> Built custom caching layers for rapid payload retrieval, optimizing memory efficiency and reducing latency for frequently accessed recommendation data. <br />
          <MdAdjust /> Authored automated Gradle integration test suites to validate Flux and Mono reactive stream transformations, ensuring correctness of asynchronous pipelines. <br />
          <MdAdjust /> Demonstrated expertise in reactive architecture patterns, Spring Boot framework capabilities, and high-performance distributed system design. <br />
        </div>
      </div>
    ),
  },
  {
    title: 'Probabilistic Sensor Verification Oct 2025 - Nov 2025',
    tags: ['Python', 'Formal Verification', 'AI/ML'],
    content: (
      <div>
        <div>
          <MdAdjust /> Developed a formal verification framework for probabilistic sensor systems modeled as Discrete-Time Markov Chains in PRISM. <br />
          <MdAdjust /> Modeled four kitchen environment sensors (gas, stove, water, refrigerator) with theoretical failure probabilities, verified PCTL safety properties including reachability and hazard thresholds. <br />
          <MdAdjust /> Cross-validated results against Monte Carlo simulation via StormPy to compare formal and empirical methods. <br />
          <MdAdjust /> Probabilities are theoretical and intended to demonstrate the verification methodology rather than characterize real hardware. <br />
          <MdAdjust /> Tools: PRISM, StormPy, Python. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/CS6315-Project" target="_blank" rel="noopener noreferrer">
            CS6315 Project Repository
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'World State AI — Resource Optimization Simulation Aug 2025 - Oct 2025',
    tags: ['Python', 'AI/ML', 'Databases'],
    content: (
      <div>
        <div>
          <MdAdjust /> Engineered an incremental expected utility algorithm to evaluate and rank action schedules using calculated reward and utility functions. <br />
          <MdAdjust /> Implemented a parser to translate complex state transitions into executable schedules, identifying optimal resource trades to maximize global state stability. <br />
          <MdAdjust /> Developed scalable weighting models for diverse resource types, enabling simulation of international trade and transformation resource loops. <br />
          <MdAdjust /> Focused on resource optimization, decision logic, and stability modeling for a world-state simulation. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/world-state-ai" target="_blank" rel="noopener noreferrer">World State AI Repository</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Model-Integrated Computing - Turtle Graphics Studio Oct 2024 - Dec 2024',
    tags: ['Python', 'Formal Verification', 'MongoDB', 'Databases'],
    content: (
      <div>
        <div>
          <MdAdjust /> Explored Domain-Specific Modeling Languages (DSMLs) through the development of a visual Turtle Graphics design studio in WebGME. <br />
          <MdAdjust /> Built a modeling environment enabling users to create Turtle Graphics programs visually, defining both abstract syntax (command relationships) and concrete syntax (graphical notation). <br />
          <MdAdjust /> Implemented a model-to-code transformation pipeline to generate executable code from user-defined models, producing visual outputs aligned with intended designs. <br />
          <MdAdjust /> Developed validation and verification plugins, including a loop detector, to prevent invalid command sequences and infinite loops, ensuring model correctness and execution safety. <br />
          <MdAdjust /> Integrated MongoDB for storing user-created designs with full support for importing and exporting command sequences. <br />
          <MdAdjust /> Applied metamodeling and DSML principles for automated code generation, formal verification, and interactive visual programming. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/cs6388-50-mini-project" target="_blank" rel="noopener noreferrer">Turtle Graphics Design Studio With Code Generation</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Kubernetes Cluster for Distributed Systems Oct 2024 - Nov 2024',
    tags: ['Kubernetes', 'Docker', 'Cloud', 'DevOps', 'Ansible', 'Kafka', "Microservices", 'Databases'],
    content: (
      <div>
        <div>
          <MdAdjust /> Designed and deployed a Kubernetes-based distributed system across four virtual machines using Docker and Ansible as part of a collaborative team project. <br />
          <MdAdjust /> Led the setup of the Kubernetes cluster, configured networking between nodes, and developed Dockerfiles for containerization of multiple services including db_consumer, inference_consumer, IoT camera, and ML server. <br />
          <MdAdjust /> Troubleshot inter-node connectivity issues and optimized CPU and memory allocation within Chameleon Cloud to scale message throughput from 500 to 5,000 messages per node. <br />
          <MdAdjust /> Automated service deployments with Ansible playbooks, ensuring consistent and reproducible environments across all virtual machines. <br />
          <MdAdjust /> Integrated Kafka for message passing and enabled seamless communication between the producer, ML inference consumer, and database layer, completing the full image generation-to-storage workflow. <br />
          <MdAdjust /> Applied container orchestration and cloud deployment best practices while independently researching and implementing new technologies. <br />
          <MdAdjust /> Demonstrated proficiency in distributed system design, DevOps automation, and scalable cloud infrastructure management. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/PA4_public" target="_blank" rel="noopener noreferrer">Cloud Computing Project</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Predictive Modeling & Responsible AI – Random Forest Pipeline Jun 2025 - Jul 2025',
    tags: ['Python', 'AI/ML'],
    content: (
      <div>
        <div>
          <MdAdjust /> Built a Random Forest pipeline to predict binary outcomes, performing data cleaning, imputation, model training, and evaluation using accuracy, precision, recall, and confusion matrices. <br />
          <MdAdjust /> Interpreted model performance and identified limitations through responsible AI principles focused on transparency and explainability. <br />
          <MdAdjust /> Investigated the impact of missing data on bias and fairness, assessing how data quality influences model reliability and ethical decision-making. <br />
          <MdAdjust /> Conducted experiments in Python and Jupyter Notebooks, leveraging libraries such as pandas, scikit-learn, and matplotlib for analysis and visualization. <br />
          <br />
          <Link href="https://github.com/JonathanPoteet/Projects/blob/main/Special_Topics_AI_Predictive_Model.ipynb" target="_blank" rel="noopener noreferrer">Special Topics - AI Predictive Model</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Throwable Ball - 2023 Project',
    tags: ['React', 'Three.js', 'TypeScript'],
    content: (
      <div>
        <div>
          I created a ball with Three.js which I wanted to be able to move and drop. I used React Cannon to handle the physics, and the React `useDrag` call to handle the drag action. <br />
          <div className={s.video}>
            <iframe
              className={s.responsive}
              src="https://www.youtube.com/embed/C40fQYu7v4A"
              loading="lazy"
              title="Throwable Ball Video"
              allowFullScreen
            ></iframe>
          </div>
          <Link href="/throwable"><MdArrowRightAlt /> Try it</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Blender Character Model - WIP 2026 - Present',
    tags: ['Blender', 'WIP', '3D Modeling', 'Rigging', 'Shaders'],
    content: (
      <div>
        <div>
          A work-in-progress character model being sculpted and refined in Blender. Currently exploring topology, rigging, and material workflows for game-ready assets. <br />
          <div className={s.video}>
            <iframe
              className={s.responsive}
              src="https://www.youtube.com/embed/Ip7oaUjq2IQ"
              loading="lazy"
              title="Blender Character Model Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Modeled a Flower - 2023 Project',
    tags: ['Blender', '3D Modeling', 'Three.js', 'React', 'TypeScript'],
    content: (
      <div>
        <div>
          This is a low poly 3D model I created using Blender and converted to glTF. I set up the Three.js environment and used OrbitControls to navigate the model. <br />
          <img src="/flower.png" alt="Flower" style={{ maxWidth: '100%', borderRadius: '0.5rem', marginTop: '0.5rem' }} />
            <br />  
          <Link href="/flower" target="_blank" rel="noopener noreferrer"><MdArrowRightAlt /> View in 3D</Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Solitaire Game Platform - 2024',
    tags: ['React', 'Node.js', 'MongoDB', 'Databases'],
    content: (
      <div>
        <div>
          <MdAdjust /> Built a full-stack solitaire game platform with user authentication and persistent game tracking. <br />
          <MdAdjust /> Developed the React frontend for an interactive solitaire card game with smooth gameplay mechanics and responsive UI design. <br />
          <MdAdjust /> Implemented a Node.js backend API with RESTful endpoints for user authentication, game state management, and history retrieval. <br />
          <MdAdjust /> Designed and implemented MongoDB database schema to store user credentials, game history, statistics, and player progress. <br />
          <MdAdjust /> Created a secure login system with user registration, authentication tokens, and session management. <br />
          <MdAdjust /> Developed comprehensive unit tests to ensure backend API reliability and frontend component correctness. <br />
          <MdAdjust /> Managed the project in GitLab with version control and collaborative development workflow. <br />
          <div className={s.video} style={{ marginTop: '0.5rem' }}>
            <iframe
              className={s.responsive}
              src="https://www.youtube.com/embed/OmBUJ55484w"
              loading="lazy"
              title="Solitaire Game Platform Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Next.js Website with Three.js integrations",
    tags: ['React', 'Next.js', 'Three.js', 'TypeScript', 'DevOps'],
    content: (
      <div>
        <div>
          This portfolio is created using the React Three.js framework, TypeScript, styled with CSS modules, and deployed from GitHub pages. <br />
          <Link href="https://github.com/JonathanPoteet/jonathanpoteet.github.io" target="_blank" rel="noopener noreferrer">https://github.com/JonathanPoteet/jonathanpoteet.github.io</Link>
        </div>
      </div>
    ),
  },
]

export default function ProjectsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const isFirstRender = useRef(true)

  // Scroll to opened accordion item (but not on initial page load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    if (openIndex !== null && itemRefs.current[openIndex]) {
      itemRefs.current[openIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [openIndex])

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(p => p.tags))
  ).sort((a, b) => {
    const aCat = getTagCategory(a)
    const bCat = getTagCategory(b)
    if (aCat !== bCat) return aCat - bCat
    return a.localeCompare(b) // Alphabetical within same category
  })

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(p => 
        selectedTags.some(tag => p.tags.includes(tag))
      )

  function toggleTag(tag: string) {
    const newSelectedTags = selectedTags.includes(tag) ? [] : [tag]
    setSelectedTags(newSelectedTags)
    
    // Calculate the first filtered project's index
    const newFiltered = newSelectedTags.length === 0
      ? projects
      : projects.filter(p => 
          newSelectedTags.some(t => p.tags.includes(t))
        )
    
    const firstFilteredIndex = newFiltered.length > 0 ? projects.indexOf(newFiltered[0]) : 0
    setOpenIndex(firstFilteredIndex)
  }

  return (
    <div className={s.accordion}>
      <div className={s.tagFilter}>
        <div className={s.tagLabel}>Filter by tags:</div>
        <div className={s.tagContainer}>
          {allTags.map(tag => {
            const category = getTagCategory(tag)
            const categoryClass = category === 0 ? s.tagMajor : category === 1 ? s.tagMinor : s.tagTrivial
            return (
              <button
                key={tag}
                className={`${s.tag} ${categoryClass} ${selectedTags.includes(tag) ? s.tagActive : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            )
          })}
        </div>
        {selectedTags.length > 0 && (
          <button
            className={s.clearTags}
            onClick={() => setSelectedTags([])}
          >
            Clear filters
          </button>
        )}
        {filteredProjects.length > 0 && (
          <div className={s.resultCount}>
            Showing {filteredProjects.length} of {projects.length} project{projects.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className={s.noResults}>No projects match your filter</div>
      ) : (
        filteredProjects.map((p, i) => {
          const originalIndex = projects.indexOf(p)
          const titleMatch = p.title.match(/(.+?)(?:\s[-–]\s*|\s)((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).+|(?:\d{4}(?:\s*-\s*(?:Present|\d{4}))?(?:\s+Project)?))$/)
          const titleMain = titleMatch ? titleMatch[1] : p.title
          const titleDate = titleMatch ? titleMatch[2] : null

          return (
            <div 
              key={i} 
              className={s.accordionItem}
              ref={(el) => {
                if (el) itemRefs.current[originalIndex] = el
              }}
            >
              <div className={s.accordionHeader}>
                <button
                  className={s.accordionButton}
                  onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                  aria-expanded={openIndex === originalIndex}
                >
                  <div>
                    {titleMain}
                    {titleDate && <span className={s.date}>{titleDate}</span>}
                  </div>
                  <MdArrowDropDown className={`${s.chevron} ${openIndex === originalIndex ? s.rotated : ''}`} />
                </button>
              </div>
              <div
                className={s.accordionPanel}
                style={{ display: openIndex === originalIndex ? 'block' : 'none' }}
              >
                <div className={s.projectTags}>
                  {p.tags.map(tag => (
                    <span key={tag} className={s.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.content}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
