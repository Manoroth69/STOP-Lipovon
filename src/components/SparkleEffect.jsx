import { motion } from 'framer-motion';
import { useState } from 'react';

const SparkleEffect = ({ children, className = '' }) => {
  const [sparkles, setSparkles] = useState([]);

  const createSparkle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSparkle = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setSparkles(prev => [...prev, newSparkle]);

    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
    }, 1500);
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={createSparkle}
    >
      {children}
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-sparkle" />
        </motion.div>
      ))}
    </div>
  );
};

export default SparkleEffect;
