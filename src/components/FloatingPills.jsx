import { useEffect, useState } from "react";

export const FloatingPills = () => {
  const [pills, setPills] = useState([]);

  useEffect(() => {
    const generatePills = () => {
      const newPills = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        color: [
          "from-blue-300/20 to-purple-300/20",
          "from-emerald-300/20 to-teal-300/20",
          "from-pink-300/20 to-red-300/20",
        ][Math.floor(Math.random() * 3)],
      }));
      setPills(newPills);
    };

    generatePills();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pills.map((pill) => (
        <div
          key={pill.id}
          className={`absolute rounded-full bg-gradient-to-br ${pill.color} animate-pulse`}
          style={{
            left: `${pill.x}%`,
            top: `${pill.y}%`,
            width: `${pill.size}px`,
            height: `${pill.size * 2}px`,
            animationDelay: `${pill.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};
