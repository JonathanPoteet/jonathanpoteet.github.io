import Link from 'next/link'
import s from './about.module.scss'
import ProjectsAccordion from '../components/projectsAccordion/ProjectsAccordion'
import FunStuff from '../components/FunStuff/FunStuff'
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
          <p className={s.lead}>
            I'm a software engineer based in the U.S.,
            open to opportunities nationwide — relocation and remote roles are
            welcome, and I'm actively interested in positions in Atlanta. I
            design and build full‑stack and distributed systems with a focus on
            emerging technologies: Internet of Things (IoT) and IoT security,
            VR/AR and immersive experiences, brain–computer interfaces (BCIs), 
            and large‑scale data systems for research and production.
          </p>
          
          <h2 className={s.sectionSubHeader}>Education</h2>
          <div className={s.sectionBody}>
            Vanderbilt University, Nashville, TN <br />
            December 2025 <br/>
            Master of Science in Computer Science <br/>
            <br/>
            Florida State University, Tallahassee, FL <br />					                                     
            December 2020 <br /> 
            Bachelor of Science in Information Technology <br/>
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
          <ProjectsAccordion />
        </div>
          <FunStuff />
        </div>
    </main>
  )
}
