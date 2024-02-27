'use client'
import ThreeFlower from '@/components/threeFlower'
import s from './three.module.scss'
export default function three() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
        <div className={s.header}>Flower</div>
        <ThreeFlower></ThreeFlower>
        </div>
      </main>
    )
  }