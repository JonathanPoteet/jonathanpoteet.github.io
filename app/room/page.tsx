'use client'
import s from './room.module.scss'
import Room from '@/components/room'
export default function three() {
  
    return (
      <main className="min-h-screen">
        <div className={s.projectStyle}>
        <div className={s.header}>WebXR Room</div>
        <Room></Room>
        </div>
      </main>
    )
  }