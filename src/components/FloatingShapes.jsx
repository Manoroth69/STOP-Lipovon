import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';

const FloatingShapes = () => {
  const [shapes, setShapes] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      const colors = [
        "rgba(59, 130, 246, 0.1)",   // blue
        "rgba(139, 69, 19, 0.08)",   // brown
        "rgba(168, 85, 247, 0.06)",  // violet
        "rgba(99, 102, 241, 0.09)",  // indigo
      ];

      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          type: ["circle", "hexagon", "triangle"][Math.floor(Math.random() * 3)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 80 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 10 + 8,
        });
      }

      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderShape = (shape) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - (window.innerWidth * shape.x) / 100, 2) +
      Math.pow(mousePosition.y - (window.innerHeight * shape.y) / 100, 2)
    );

    const influence = Math.max(0, 200 - distance) / 200;

    const shapeProps = {
      width: shape.size,
      height: shape.size,
      backgroundColor: shape.color,
      borderRadius: shape.type === "circle" ? "50%" : "0%",
      opacity: shape.opacity,
    };

    if (shape.type === "triangle") {
      return (
        <motion.div
          key={shape.id}
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: influence * 20,
            y: influence * -30,
            rotate: influence * 15,
            scale: 1 + influence * 0.2,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
          />
        </motion.div>
      );
    }

    if (shape.type === "hexagon") {
      return (
        <motion.div
          key={shape.id}
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            opacity: shape.opacity,
          }}
          animate={{
            x: influence * 25,
            y: influence * -20,
            rotate: influence * 20,
            scale: 1 + influence * 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
          }}
        />
      );
    }

    return (
      <motion.div
        key={shape.id}
        className="absolute pointer-events-none animate-float-slow"
        aria-hidden="true"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          ...shapeProps,
        }}
        animate={{
          x: influence * 30,
          y: influence * -25,
          scale: 1 + influence * 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
      />
    );
  };

  return (
    <>
      <Helmet>
        <title>StopLipovon | Animații decorative și efecte interactive</title>
        <meta
          name="description"
          content="Animații decorative interactive cu forme plutitoare pentru o experiență vizuală atractivă și modernă."
        />
      </Helmet>

      <section
        aria-label="Forme plutitoare interactive de decor"
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      >
        {shapes.map(renderShape)}
      </section>
    </>
  );
};

export default FloatingShapes;

