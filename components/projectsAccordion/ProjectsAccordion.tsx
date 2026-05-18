"use client"
import React, { useState } from 'react'
import s from './ProjectsAccordion.module.scss'
import { MdAdjust, MdArrowDropDown, MdArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'

const projects = [
  {
    title: 'General Motors – My Orders Page: Frontend & Checkout Integration Jul 2023 - Dec 2025',
    content: (
      <div>
        <div>
          <MdAdjust /> Managed the My Orders page on <Link href="https://www.cadillaceurope.com" target="_blank" rel="noopener noreferrer">cadillaceurope.com</Link>, enabling customers to view and track vehicle orders across European markets. <br />
          <MdAdjust /> Worked within the D2C and Dash teams to enhance order visibility, integrating financial, logistical, and vehicle details (make, model, trim, RPO/parts) through Strapi CMS and connected APIs. <br />
          <MdAdjust /> Developed and maintained frontend components using Next.js and TypeScript, ensuring localization support for multiple regions (FR, SE, CH, DE). <br />
          <MdAdjust /> Migrated the My Orders app to Solid.js within the Dash monorepo, improving performance, maintainability, and code reuse. <br />
          <MdAdjust /> Collaborated with backend teams and QA engineers to resolve defects, optimize API calls, and strengthen data integrity and security. <br />
          <MdAdjust /> Participated in agile sprints using Jira, documented processes in Confluence, and contributed to CI/CD pipeline improvements for streamlined releases. <br />
          <MdAdjust /> Contributed to the integration of Adyen for checkout, supporting secure, reliable, and compliant payment processing within the My Orders workflow. <br />
        </div>
      </div>
    ),
  },
  {
    title: 'General Motors – Service Workbench Mar 2021 - Jun 2023',
    content: (
      <div>
        <div>
          <MdAdjust /> Created new frontend features and refactored legacy Angular code for strict mode migration on the General Motors Service Workbench platform. <br />
          <MdAdjust /> Improved maintainability by modernizing legacy components, applying Angular best practices, and enhancing code quality across a 1.5-year effort. <br />
          <MdAdjust /> Collaborated with UX, backend, and QA teams to deliver user-facing functionality while preserving existing workflows. <br />
          <MdAdjust /> Focused on frontend stability, developer productivity, and long-term codebase modernization. <br />
        </div>
      </div>
    ),
  },
  {
    title: 'Sinkhole — Procedural Dungeon Crawler Jan 2026 - Present',
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
    title: 'Probabilistic Sensor Verification Oct 2025 - Nov 2025',
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
    title: 'Modeled a Flower - 2023 Project',
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
    title: "Next.js Website with Three.js integrations",
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className={s.accordion}>
      {projects.map((p, i) => {
        const titleMatch = p.title.match(/(.+?)(?:\s[-–]\s*|\s)((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).+|(?:\d{4}(?:\s*-\s*(?:Present|\d{4}))?(?:\s+Project)?))$/)
        const titleMain = titleMatch ? titleMatch[1] : p.title
        const titleDate = titleMatch ? titleMatch[2] : null

        return (
          <div key={i} className={s.accordionItem}>
            <div className={s.accordionHeader}>
              <button
                className={s.accordionButton}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div>
                  {titleMain}
                  {titleDate && <span className={s.date}>{titleDate}</span>}
                </div>
                <MdArrowDropDown className={`${s.chevron} ${openIndex === i ? s.rotated : ''}`} />
              </button>
            </div>
            <div
              className={s.accordionPanel}
              style={{ display: openIndex === i ? 'block' : 'none' }}
            >
              {p.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
