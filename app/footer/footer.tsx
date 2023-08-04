import s from './footer.module.scss'
import { AiFillTwitterSquare, AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from 'next/link'
export default function Footer() {
    return (<div className={s.footer}>
        <div>Copyright<AiOutlineCopyrightCircle className={s.copyright}/> 2023 by Jonathan Poteet</div>
        <div className={s.contact}>
                <Link href='https://twitter.com/teetopjon'><AiFillTwitterSquare/></Link>
                <Link href='https://www.instagram.com/poteetjonathan/'><AiOutlineInstagram/></Link>
        </div>
    </div>)
  }
  