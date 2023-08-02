import Link from 'next/link'
import s from './about.module.scss'
import {MdArrowRightAlt, MdAdjust, MdOutlineCopyright} from 'react-icons/md'
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={s.aboutStyle}>
      
        <div className={s.aboutSection}>
        <div className={s.sectionHeader}>  <img src="/JonathanPortrait.png" className={s.responsive} alt="Picture of Jonathan Poteet" /></div>
            <div className={s.sectionHeader}>Jonathan Poteet</div>
            <br />
            {/* <span className={s.sectionBody}>Hello, My name is Jonathan Poteet, and here is my portfolio. It is created completely through Next.js. I am a software developer by trade and I live and work in North Georgia on websites for General Motors.</span> */}
          <div className={s.sectionSubHeader}>Education</div>
          <div className={s.sectionBody}>
            Florida State University, Tallahassee, FL <br />					                                     
            December 2020 <br /> 
            Bachelor of Science in Information Technology
          </div>

          <div className={s.sectionSubHeader}>Experience</div>
          <div className={s.experience}>
            <div className={s.company}>General Motors, Roswell, GA</div>
            <div className={s.date}>March 2021-Present</div>
          </div>
            <div className={s.title}>Software Developer</div>
          <div className={s.sectionBody}>
          <MdAdjust/> Developed and maintained frontend code using TypeScript, Angular, and Next.js technologies. <br />
          <MdAdjust/> Integrated APIs to enable access to visual data, enhancing the applications capabilities and user experience. <br />
          <MdAdjust/> Analyzed and refactored legacy code, enhancing its readability, scalability, and overall functionality. <br />
          <MdAdjust/> Worked closely with UX designers to implement responsive and visually appealing user interfaces. <br />
          <MdAdjust/> Collaborated with QA teams, providing support in testing efforts and ensuring the delivery of high-quality software that meets the business requirements. <br />
          <MdAdjust/> Presented completed work to business leaders showcasing the enhanced functionality and features of the application. <br />
          <MdAdjust/> Researched functionality requirements to gain a thorough understanding of the project needs and criteria. <br />
          <MdAdjust/> Utilized version control systems to manage code changes and to allow for several developers to collaborate on a project simultaneously. <br />
          </div>
        
        
          <div className={s.toProjects}><Link href='/projects'>And to projects</Link></div>
        </div>
      </div>
    </main>
  )
}
