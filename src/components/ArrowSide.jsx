import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import sideArrow from '../assets/arrow-side.json';

const LottieAnimation = ({ animationData, loop = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg', // Use 'svg' or 'canvas' based on your preference
      loop: loop,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup animation on unmount
    return () => {
      animation.destroy();
    };
  }, [animationData, loop]);

  return (
    <div ref={containerRef} style={{ width: '10%'}}></div>
  );
};

export default function ArrowSide () {
  return (
    <LottieAnimation animationData={sideArrow} loop={true} />
  );
}
