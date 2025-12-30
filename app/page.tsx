import Link from 'next/link'
import s from './about.module.scss'
import {MdArrowRightAlt, MdAdjust} from 'react-icons/md'
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={s.aboutStyle}>
      
        <div className={s.aboutSection}>
          <h1 className={s.sectionHeader}>Jonathan Poteet</h1>
            <br />
          <div className={s.sectionHeader}>
            <img
              src="/JonathanPoteetProfessional.jpg"
              className={s.sectionImage}
              alt="Picture of Jonathan Poteet"
            />
          </div>
          <h2 className={s.sectionSubHeader}>Education</h2>
          <div className={s.sectionBody}>
            Florida State University, Tallahassee, FL <br />					                                     
            December 2020 <br /> 
            Bachelor of Science in Information Technology <br/>
            <br/>

            Vanderbilt University, Nashville, TN <br />
            December 2025 <br/>
            Master of Science in Computer Science <br/>
          </div>

          <h2 className={s.sectionSubHeader}>Experience</h2>
          <div className={s.experience}>
            <div className={s.company}>General Motors, Roswell, GA</div>
            <div className={s.date}>March 2021-December 2025</div>
          </div>
            <div className={s.title}>Software Engineer</div>
          <div className={s.sectionBody}>
              <MdAdjust/> Contributed to multiple teams across General Motors, including Service Workbench, D2C, and Dash, developing full-stack web applications used by technicians and customers across global markets. <br />
              <MdAdjust/> Worked extensively with Angular, TypeScript, HTML, CSS, Java, SQL, and Next.js to modernize legacy systems, enhance performance, and improve the overall user experience. <br />
              <MdAdjust/> Implemented Angular Strict Mode and ESLint Strict Mode on a legacy codebase to improve type safety, maintainability, and consistency across the application. <br />
              <MdAdjust/> Developed new UI components and backend integrations for Service Workbench, a platform used by technicians to monitor vehicle health and diagnostics during service appointments. <br />
              <MdAdjust/> Added Spring Boot Swagger documentation to backend services, improving API discoverability and collaboration between frontend and backend teams. <br />
              <MdAdjust/> Utilized Azure DevOps daily for branch management, pull requests, sprint tracking, and automated test environment deployments. <br />
              <MdAdjust/> Managed the My Orders Order Tracker and Order Fulfillment frontend flow within a Next.js/TypeScript repository, supporting multiple European markets including France, Sweden, Switzerland, and Germany. <br />
              <MdAdjust/> Implemented localized translations using Strapi CMS and connected APIs to display real-time order, financial, and vehicle data, including make, model, trim, and RPO/parts information. <br />
              <MdAdjust/> Addressed frontend vulnerabilities, optimized data handling logic, and integrated Vitest for comprehensive unit and integration testing. <br />
              <MdAdjust/> Led the migration of the My Orders application to Solid.js as part of the transition to the Dash monorepo, improving performance, modularity, and long-term maintainability. <br />
              <MdAdjust/> Documented technical workflows and requirements in Confluence, tracked work items and sprints in Jira, and contributed to CI/CD pipeline management and build process optimization. <br />
              <MdAdjust/> Helped implement automated testing strategies, defining test IDs and improving coverage for regression prevention. <br />
              <MdAdjust/> Leveraged GitHub Copilot for assisted pair programming, using it to accelerate unit test creation, streamline debugging, and enhance component development efficiency. <br />
              <MdAdjust/> Collaborated closely with UX and QA teams to ensure designs were visually consistent, responsive, and met all functionality and accessibility requirements. <br />
              <MdAdjust/> Regularly presented completed features and technical improvements to stakeholders, highlighting enhanced user experience, maintainability, and scalability. <br />
          </div>
        </div>

        <div className={s.projectSection}>
        <h2 className={s.sectionSubHeader}>Projects</h2>
        </div>
        <div className={s.projectSection}>
            <h3 className={s.sectionSubHeader}>Cloud Computing & Distributed Systems – Kubernetes Cluster</h3>
            <div className={s.sectionBody}>
              <div>
                <MdAdjust/> Designed and deployed a Kubernetes-based distributed system across four virtual machines using Docker and Ansible as part of a collaborative team project. <br />
                <MdAdjust/> Led the setup of the Kubernetes cluster, configured networking between nodes, and developed Dockerfiles for containerization of multiple services including db_consumer, inference_consumer, IoT camera, and ML server. <br />
                <MdAdjust/> Troubleshot inter-node connectivity issues and optimized CPU and memory allocation within Chameleon Cloud to scale message throughput from 500 to 5,000 messages per node. <br />
                <MdAdjust/> Automated service deployments with Ansible playbooks, ensuring consistent and reproducible environments across all virtual machines. <br />
                <MdAdjust/> Integrated Kafka for message passing and enabled seamless communication between the producer, ML inference consumer, and database layer, completing the full image generation-to-storage workflow. <br />
                <MdAdjust/> Applied container orchestration and cloud deployment best practices while independently researching and implementing new technologies. <br />
                <MdAdjust/> Demonstrated proficiency in distributed system design, DevOps automation, and scalable cloud infrastructure management. <br />
                <br/>
                <Link href="https://github.com/JonathanPoteet/PA4_public" target="_blank" rel="noopener noreferrer">Cloud Computing Project</Link>
              </div>
            </div>
        </div>
        
        <div className={s.projectSection}>
            <h3 className={s.sectionSubHeader}>Model-Integrated Computing – Turtle Graphics Design Studio, Metamodeling for Code Generation</h3>
            <div className={s.sectionBody}>
              <div>
                <MdAdjust/> Explored Domain-Specific Modeling Languages (DSMLs) through the development of a visual Turtle Graphics design studio in WebGME. <br />
                <MdAdjust/> Built a modeling environment enabling users to create Turtle Graphics programs visually, defining both abstract syntax (command relationships) and concrete syntax (graphical notation). <br />
                <MdAdjust/> Implemented a model-to-code transformation pipeline to generate executable code from user-defined models, producing visual outputs aligned with intended designs. <br />
                <MdAdjust/> Developed validation and verification plugins, including a loop detector, to prevent invalid command sequences and infinite loops, ensuring model correctness and execution safety. <br />
                <MdAdjust/> Integrated MongoDB for storing user-created designs with full support for importing and exporting command sequences. <br />
                <MdAdjust/> Applied metamodeling and DSML principles for automated code generation, formal verification, and interactive visual programming. <br />
                <MdAdjust/> Demonstrated the practical use of modeling languages to bridge theoretical modeling concepts with real-world software engineering applications. <br />
                <br/>
                <Link href="https://github.com/JonathanPoteet/cs6388-50-mini-project" target="_blank" rel="noopener noreferrer">Turtle Graphics Design Studio With Code Generation</Link>
              </div>
            </div>
        </div>
        
        <div className={s.projectSection}>
            <h3 className={s.sectionSubHeader}>Predictive Modeling & Responsible AI – Random Forest Pipeline</h3>
            <div className={s.sectionBody}>
              <div>
                <MdAdjust/> Built a Random Forest pipeline to predict binary outcomes, performing data cleaning, imputation, model training, and evaluation using accuracy, precision, recall, and confusion matrices. <br />
                <MdAdjust/> Interpreted model performance and identified limitations through responsible AI principles focused on transparency and explainability. <br />
                <MdAdjust/> Investigated the impact of missing data on bias and fairness, assessing how data quality influences model reliability and ethical decision-making. <br />
                <MdAdjust/> Conducted experiments in Python and Jupyter Notebooks, leveraging libraries such as pandas, scikit-learn, and matplotlib for analysis and visualization. <br />
                <MdAdjust/> Strengthened understanding of machine learning workflows and responsible AI practices through applied experimentation and interpretability-focused evaluation. <br />
              <br/>
              <Link href="https://github.com/JonathanPoteet/Projects/blob/main/Special_Topics_AI_Predictive_Model.ipynb" target="_blank" rel="noopener noreferrer">Special Topics - AI Predictive Model</Link>
              </div>
            </div>
        </div>
        
        <div className={s.projectSection}>
             <h3 className={s.sectionSubHeader}>General Motors – My Orders Page: Frontend & Checkout Integration</h3>
            <div className={s.sectionBody}>
              <div>
                  <MdAdjust/> Managed the My Orders page on <Link href="https://www.cadillaceurope.com" target="_blank" rel="noopener noreferrer">cadillaceurope.com</Link>, enabling customers to view and track vehicle orders across European markets. <br />
                  <MdAdjust/> Worked within the D2C and Dash teams to enhance order visibility, integrating financial, logistical, and vehicle details (make, model, trim, RPO/parts) through Strapi CMS and connected APIs. <br />
                  <MdAdjust/> Developed and maintained frontend components using Next.js and TypeScript, ensuring localization support for multiple regions (FR, SE, CH, DE). <br />
                  <MdAdjust/> Migrated the My Orders app to Solid.js within the Dash monorepo, improving performance, maintainability, and code reuse. <br />
                  <MdAdjust/> Collaborated with backend teams and QA engineers to resolve defects, optimize API calls, and strengthen data integrity and security. <br />
                  <MdAdjust/> Participated in agile sprints using Jira, documented processes in Confluence, and contributed to CI/CD pipeline improvements for streamlined releases. <br />
                  <MdAdjust/> Contributed to the integration of Adyen for checkout, supporting secure, reliable, and compliant payment processing within the My Orders workflow. <br />
              </div>
            </div>
        </div>

        <div className={s.projectSection}>
          <Link href='/throwable'>
            <h3 className={s.sectionSubHeader}>Throwable Ball - 2023 Project</h3>
            <div className={`${s.sectionBody}`}>
              <div>I created a ball with Three.js which I wanted to be able to move and drop. I used React Cannon, a JS library, to handle the physics, and the React useDrag call to handle the drag action. Below is a video of a prior iteration of it in use, and it can be interacted with directly here.  <MdArrowRightAlt/></div>
            </div>
          </Link>
          <br />
          <div className={s.video}>
            <iframe className={s.responsive}
              src="https://www.youtube.com/embed/C40fQYu7v4A"
              loading="lazy"
              title="Throwable Ball Video"
              allowFullScreen
            >
            </iframe>
          </div>
        </div>

        <div className={s.projectSection}>
          <Link href='/flower'>
            <h3 className={s.sectionSubHeader}>Modeled a Flower - 2023 Project</h3>
            <div className={`${s.sectionBody}`}>
              <div>This is a 3D model I created using blender. I converted it into a .gtlf file, set up the Three.js environment for it, and I am able to display it in the browser. You can navigate around the model using the OrbitControls function provided by the react library DREI. <MdArrowRightAlt/></div> 
            </div>
          </Link>
          <div className={s.sectionImage}>
            <img
              src="/flower.png"
              alt="Flower"
            />
          </div>
        </div>

        {/* <div className={s.projectSection}>
          <Link href='/modelPractice'>
          <div className={s.sectionSubHeader}>Put a Vroid Model into a scene</div>
          <div className={s.sectionBody}>
          <div>Vroid model placed into a scene<MdArrowRightAlt/></div> 
          </div>
          </Link>
        </div> */}

        <div className={s.projectSection}>
            <h3 className={s.sectionSubHeader}>Next.js Website with Three.js integrations</h3>
            <div className={s.sectionBody}>
              <div>This portfolio is created using the React Three.js framework, Typescript, styled using CSS modules, and it is deployed from GitHub pages. The link to the code for this site is found below.</div> 
              <Link className={s.projectLink} href='https://github.com/JonathanPoteet/jonathanpoteet.github.io'>
                  https://github.com/JonathanPoteet/jonathanpoteet.github.io
              </Link>
            </div>
        </div>
        </div>
    </main>
  )
}
