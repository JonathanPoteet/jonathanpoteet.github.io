"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './FunStuff.module.scss'
import Script from 'next/script'

const TW_HANDLE = 'teetopjon'
const YT_HANDLE = "Teetopjon"
const DISCORD_LINK = "https://discord.gg/Aw6mSr97dq"
const TWITCH_HANDLE = "jonathanpoteet"
const INSTA_HANDLE = "poteetjonathan"

export default function FunStuff() {
  return (
    <section className={styles.container} aria-labelledby="fun-header" id="who-is-jonathan-poteet">
      <Script 
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive" 
        onLoad={() => {
          // This ensures the embed processes once the script arrives
            if ((window as any).instgrm?.Embeds) {
                (window as any).instgrm.Embeds.process();
            }
        }}
      /> 
      <h3 id="fun-header" className={styles.sectionHeader}>What am I up to?</h3>
           <div className={styles.sectionHeader}>
            <img
              src="/JonathanPoteetProfessional.jpg"
              className={styles.sectionImage}
              alt="Picture of Jonathan Poteet"
              />
          </div>
            <p>
              I’m a software engineer with a passion for building things. Lately, that’s meant learning Blender and experimenting with Godot to create my own small interactive worlds. Outside of work, I love attending conventions, following VTubers, and sharing my development journey on Twitch and other social media. I’m always diving into new games or skills, driven by a simple curiosity for how things work. 
            </p>

        
        <div className={styles.grid}>
        
         <article className={styles.card}>
          <h4>Instagram</h4>
          <p className={styles.expl}>Highlights from my daily life!</p>
          <div className={styles.embedWrapper}>
            <blockquote
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/${INSTA_HANDLE}/`}
            data-instgrm-version="14"
            >
            <a href={`https://www.instagram.com/${INSTA_HANDLE}/`}>View Instagram Profile</a>
            </blockquote>
      </div>
        </article>

        <article className={styles.card}>
          <h4>Twitch</h4>
          <p className={styles.expl}>I sometimes go live to talk about my personal projects and game.</p>
          <div className={styles.embedWrapper}>
            <iframe
              src={`https://player.twitch.tv/?channel=${TWITCH_HANDLE}&parent=jonathanpoteet.com&parent=www.jonathanpoteet.com&parent=localhost&muted=true`}
            referrerPolicy="strict-origin-when-cross-origin"
              className={styles.twitchViewer}
              allow='encrypted-media; fullscreen; picture-in-picture; autoplay'
              >
            </iframe>
          </div>
          <a href={`https://twitch.tv/${TWITCH_HANDLE}`} target="_blank" rel="noopener noreferrer" className={styles.button}>Follow on Twitch</a>
        </article>


        <article className={styles.card}>
        <h4>Additional Socials</h4>
        <p className={styles.expl}> Follow my ramblings, join my Discord, or subscribe to my YouTube (I don't post often, though I may in the future!)</p>
        <div className={styles.linkContainer}>
            <a href={`https://twitter.com/${TW_HANDLE}`} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Twitter / X
            </a>
            <a href={`https://www.youtube.com/@${YT_HANDLE}`} target="_blank" rel="noopener noreferrer" className={styles.button}>
            YouTube
            </a>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Discord Server
            </a>
        </div>
        </article>

      </div>
    </section>
  )
}