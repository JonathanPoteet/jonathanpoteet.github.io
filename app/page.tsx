import Link from 'next/link'
import s from './about.module.scss'
import ProjectsAccordion from '../components/projectsAccordion/ProjectsAccordion'
import FunStuff from './FunStuff/FunStuff'
import {MdArrowRightAlt, MdAdjust} from 'react-icons/md'
import NoiseWalker from './noiseWalker/noiseWalker'
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={s.aboutStyle}>
      
        <div className={s.aboutSection}>
          <div className={s.coolSection}>
            <NoiseWalker />
            {/* <h1 className={s.sectionHeader}>Jonathan Poteet</h1> */}
          </div>
          
          <p className={s.lead}>
            I’m a Software Engineer specializing in TypeScript and distributed systems, building scalable web architectures with an emphasis on reliable, scalable, and safe system design. My work centers on simulation and high-integrity systems, applying formal verification and model checking to reason about behavior before deployment rather than debugging correctness in production. I focus on complex system modeling and architectures shaped by real-world constraints. <br /><br />

            Outside of engineering, I explore procedural and generative design, combining formal logic with creative system construction. <br /><br />

            Based in the U.S. - Seeking opportunities in Atlanta, Remote, or Nationwide.
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
            Business Minor <br />

            <p>
              Certifications:<br />
              • Security+ from CompTIA – <a href="https://www.credly.com/badges/5f007ade-e1f1-4edf-aa60-169fc0c4a657/public_url" target="_blank" rel="noopener noreferrer">
                Credly Badge
              </a><br />
              • Global Citizenship Certificate, Florida State University <br />
            </p>
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

        <div className={s.projectSection}>
          <h2 className={s.sectionSubHeader}>Campus & Community Involvement</h2>
          <div className={s.sectionBody}>
            • Study Abroad: FSU International Programs - London, England, Summer 2019 <br />
            • Air Force ROTC (AFROTC) - Detachment 145, 2017 - 2018 <br />
            • Florida American Legion Boys State - Delegate, 2016 <br />
            • Eagle Scout, Boy Scouts of America, 2016 <br />
          </div>
        </div>
          <FunStuff />
        </div>

        <img 
        src="/horse-sprite.png" // Update to your active file if needed
        alt="Decorative Horse Sprite"
        className="pixelatedHorse"
        style={{
          position: 'fixed',
          right: '10px',          // Slightly off the absolute edge so it isn't cut off
          bottom: '5rem',         // MATCH THIS to your body padding-bottom (5rem) so it sits exactly on top of the footer!
          width: '200px',         // Explicitly sets the size to 2x (100px * 2)
          height: '200px',        // Explicitly sets the size to 2x
          pointerEvents: 'none', 
          zIndex: 10          
        }}
      />


    </main>
  )
}
