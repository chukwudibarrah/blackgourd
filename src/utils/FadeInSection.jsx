import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection ({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-80px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
