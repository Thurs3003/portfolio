import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const cursor = cursorRef.current
    const ring   = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = e => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 4 + 'px'
      cursor.style.top  = my - 4 + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 16 + 'px'
      ring.style.top  = ry - 16 + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onOver = e => {
      if (e.target.closest('a, button, .project-card, .skill-card, .stack-item')) {
        cursor.style.transform = 'scale(2.5)'
        ring.style.transform   = 'scale(1.5)'
      }
    }
    const onOut = e => {
      if (e.target.closest('a, button, .project-card, .skill-card, .stack-item')) {
        cursor.style.transform = 'scale(1)'
        ring.style.transform   = 'scale(1)'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}