import s from './project.module.scss'
import Link from 'next/link'
import {MdArrowRightAlt, MdFireplace} from 'react-icons/md'
export default function three() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
          <div className={s.projectSection}>
            <Link href='/projects/throwable'>
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
            <Link href='/projects/flower'>
              <div className={s.sectionSubHeader}>Modeled a Flower</div>
              <div className={s.sectionBody}>
                <div>This is a 3D model I created using blender. I converted it into a .gtlf file, set up the Three.js environment for it, and I am able to display it in the browser. You can navigate around the model using the OrbitControls function provided by the react library DREI. <MdArrowRightAlt/></div> 
              </div>
            </Link>
            <div className={s.image}>
              <img src="/flower.png" alt="Flower" />
            </div>
          </div>


          
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