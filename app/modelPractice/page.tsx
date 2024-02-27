'use client'
import ModelPractice from '@/components/modelPractice'
import s from './modelPractice.module.scss'
export default function modelPractice() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
        <div className={s.header}>Vroid Model Displayed in Browser</div>
        <ModelPractice></ModelPractice>
        </div>
      </main>
    )
  }