import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the trailing circle
  // Increased damping/stiffness for a "tighter" liquid feel
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Cursor Container with Filter */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ filter: "url('#goo')" }}
      >
        {/* Main Cursor (Small Dot) */}
        <motion.div
          className="absolute w-4 h-4 bg-white rounded-full"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        {/* Trailing Cursor (Larger Circle) */}
        <motion.div
          className="absolute w-8 h-8 bg-white rounded-full"
          style={{
            x: trailX,
            y: trailY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHovered ? 2 : 1,
          }}
          transition={{
            scale: { duration: 0.2 },
          }}
        />
      </div>
    </>
  );
};

export default Cursor;
