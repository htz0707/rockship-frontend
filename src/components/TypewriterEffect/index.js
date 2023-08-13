import { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed, handleSelect }) => {
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [charIndex, text, speed]);

  return <p onClick={handleSelect}>{displayedText}</p>;
};

export default TypewriterEffect;
