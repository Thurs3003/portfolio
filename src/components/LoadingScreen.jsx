import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#080C10',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
          }}
        >
          {/* Nome animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#5A6A7A',
              marginBottom: '24px',
            }}
          >
            // arthur matos
          </motion.div>

          {/* Barra de loading */}
          <div style={{
            width: '160px',
            height: '1px',
            background: '#1E2A35',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #534AB7, #00E5FF)',
              }}
            />
          </div>

          {/* Dev tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              color: '#534AB7',
              marginTop: '16px',
              letterSpacing: '0.15em',
            }}
          >
            frontend + supabase
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}