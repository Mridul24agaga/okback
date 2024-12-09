'use client'

import { motion } from 'framer-motion'

export default function ManualListingSection() {
  return (
    <section style={{ backgroundColor: '#0A0A0A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 16px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            style={{
              fontSize: 'clamp(1.875rem, 5vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
              lineHeight: '1.2'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            If you list your Startup manually to 100+ sites
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { value: "20", label: "Hours grunt work" },
              { value: "$500", label: "Opportunity Cost" },
              { value: "0", label: "new learning" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  padding: '1.5rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <motion.div 
                  style={{
                    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {item.value}
                </motion.div>
                <div style={{ color: '#a0aec0', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

