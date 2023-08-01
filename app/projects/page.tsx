import s from './project.module.scss'
import Link from 'next/link'
export default function three() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
          <div className={s.projectSection}>
            <Link href='/projects/throwable'>
              <div className={s.sectionSubHeader}>Throwable Ball</div>
              <div className={s.sectionBody}>
                <div>I created a ball with threejs which I wanted to be able to move and drop. I used react cannon, a js library, to handle the physics.</div> 
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
                <div>This is a 3d model I created, and I am able to display it in the browser using three.js</div> 
              </div>
            </Link>
            <div className={s.image}>
              <img src="/flower.png" alt="Flower" />
            </div>
          </div>
        </div>
      </main>
    )
  }