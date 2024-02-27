import Link from 'next/link'
import s from './about.module.scss'
import {MdArrowRightAlt, MdAdjust, MdOutlineCopyright} from 'react-icons/md'
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={s.aboutStyle}>
      
        <div className={s.aboutSection}>
          <div className={s.sectionHeader}>Jonathan Poteet</div>
            <br />
          <div className={s.sectionHeader}>  <img src="/JonathanPortrait.png" className={s.sectionImage} alt="Picture of Jonathan Poteet" /></div>
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
        </div>

        <div className={s.projectSection}>
          <Link href='/throwable'>
            <div className={s.sectionSubHeader}>Throwable Ball</div>
            <div className={s.sectionBody}>
              <div>I created a ball with Three.js which I wanted to be able to move and drop. I used React Cannon, a JS library, to handle the physics, and the React useDrag call to handle the drag action. Below is a video of a prior iteration of it in use, and it can be interacted with directly here.  <MdArrowRightAlt/></div>
            </div>
          </Link>
          <br />
          <div className={s.video}>
            <iframe className={s.responsive}
            src="https://www.youtube.com/embed/C40fQYu7v4A">
            </iframe>
          </div>
        </div>

        <div className={s.projectSection}>
          <Link href='/flower'>
            <div className={s.sectionSubHeader}>Modeled a Flower</div>
            <div className={s.sectionBody}>
              <div>This is a 3D model I created using blender. I converted it into a .gtlf file, set up the Three.js environment for it, and I am able to display it in the browser. You can navigate around the model using the OrbitControls function provided by the react library DREI. <MdArrowRightAlt/></div> 
            </div>
          </Link>
          <div className={s.sectionImage}>
            <img src="/flower.png" alt="Flower" />
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
            <div className={s.sectionSubHeader}>Next.js Website with Three.js integrations</div>
            <div className={s.projectDescription}>
              <div>This portfolio is created using the React Three.js framework, Typescript, styled using CSS modules, and it is deployed from GitHub pages. The link to the code for this site is found below.</div> 
              <Link className={s.projectLink} href='https://github.com/Indeliblerock/indeliblerock.github.io'>
                  https://github.com/Indeliblerock/indeliblerock.github.io
              </Link>
            </div>
        </div>
        </div>
    </main>
  )
}
