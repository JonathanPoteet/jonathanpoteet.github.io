import Link from 'next/link'
import s from './navbar.module.scss'
export default function Navbar() {
    return (<div className={s.navbar}>

            <div><Link href='/'>About</Link></div>
            <div><Link href='/projects'>Projects</Link></div>
    </div>
    )
  }
  