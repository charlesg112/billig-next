"use-client";

import { RefObject, useEffect, useRef } from "react";

export const HeroImage = () => {
  const imageRef: RefObject<HTMLDivElement> = useRef(null!);
  useEffect(() => {
    console.log("mounted!");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`; // Parallax effect
    }
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('./hero-background.jpg')`,
      }}
      ref={imageRef}
    >
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};
