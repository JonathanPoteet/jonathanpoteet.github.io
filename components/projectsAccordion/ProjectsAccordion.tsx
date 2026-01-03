"use client"
import React, { useState } from 'react'
import s from './ProjectsAccordion.module.scss'
import { MdAdjust, MdArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'

const projects = [
  {
    title: 'Cloud Computing & Distributed Systems – Kubernetes Cluster',
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
    title: 'Model-Integrated Computing – Turtle Graphics Design Studio, Metamodeling for Code Generation',
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
    title: 'Predictive Modeling & Responsible AI – Random Forest Pipeline',
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
    title: 'General Motors – My Orders Page: Frontend & Checkout Integration',
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
          This is a 3D model I created using Blender and converted to glTF. I set up the Three.js environment and used OrbitControls to navigate the model. <br />
          <img src="/flower.png" alt="Flower" style={{ maxWidth: '100%', borderRadius: '0.5rem', marginTop: '0.5rem' }} />
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
      {projects.map((p, i) => (
        <div key={i} className={s.accordionItem}>
          <div className={s.accordionHeader}>
            <button
              className={s.accordionButton}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              {p.title}
            </button>
          </div>
          <div
            className={s.accordionPanel}
            style={{ display: openIndex === i ? 'block' : 'none' }}
          >
            {p.content}
          </div>
        </div>
      ))}
    </div>
  )
}
