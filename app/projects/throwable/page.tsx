'use client'
import ThreeTest from '@/components/threetest'
import s from './three.module.scss'
export default function three() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
        <div>Throwable ball</div>
        <ThreeTest></ThreeTest>
        </div>
      </main>
    )
  }