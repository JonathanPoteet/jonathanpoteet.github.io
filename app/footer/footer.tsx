import s from './footer.module.scss'
import { AiFillTwitterSquare, AiOutlineInstagram, AiOutlineCopyrightCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className={s.footer} role="contentinfo" aria-label="Site footer">

            <div className={s.copy}>Copyright <AiOutlineCopyrightCircle className={s.copyright} aria-hidden="true"/> {new Date().getFullYear()} Jonathan Poteet</div>
            <div className={s.contact}>
                <details className={s.details}>

                    <summary className={s.summary}>Want to work together?</summary>

                    <ul className={s.info}>
                        <li>
                            <a href="/jonathan-poteet-resume-2026.pdf" download className={s.downloadResume} aria-label="Download resume PDF">Download Resume (PDF)</a>
                        </li>
                    </ul>

                    <div className={s.linkIcons}>
                        <a className={s.iconLink} href="tel:239-564-5052" aria-label="Call 239-564-5052">
                            <AiOutlinePhone aria-hidden="true" />
                        </a>
                        <a className={s.iconLink} href="mailto:jonathan@jonathanpoteet.com" aria-label="Email jonathan@jonathanpoteet.com">
                            <AiOutlineMail aria-hidden="true" />
                        </a>
                        <a className={s.iconLink} href="https://twitter.com/teetopjon" aria-label="Twitter (opens in new tab)" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterSquare aria-hidden="true" />
                        </a>
                        <a className={s.iconLink} href="https://www.instagram.com/poteetjonathan/" aria-label="Instagram (opens in new tab)" target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram aria-hidden="true" />
                        </a>
                    </div>

                    <div className={s.subline}>
                        Freelance inquiries: <a href="mailto:business@jonathanpoteet.com" aria-label="Email freelance inquiries">business@jonathanpoteet.com</a>
                    </div>

                </details>
            </div>
        </footer>
    )
}
  