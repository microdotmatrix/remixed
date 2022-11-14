import { useRef } from 'react';
import { useInView, motion } from 'framer-motion'

export default function Section({ children, ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "100px 0px -50px 0px" })
  return (
    <section ref={ref}>
      <motion.span animate={{ transition: { staggerChildren: 0.5 } }} style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}  {...props}
      >
        {children}
      </motion.span>
    </section>
  )
}