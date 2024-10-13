import React, { useState, useEffect } from "react";
import styles from "./TypingEffect.module.css"; // Import module.css styles

const TypingEffect: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [textArrayIndex, setTextArrayIndex] = useState<number>(0);
  const [isErasing, setIsErasing] = useState<boolean>(false);

  const textArray: string[] = ["fun", "freedom", "a journey", "Me"];
  const typingDelay: number = 200;
  const erasingDelay: number = 100;
  const newTextDelay: number = 2000; // Delay between current and next text

  useEffect(() => {
    let typingTimeout: number;
    let erasingTimeout: number;

    function type() {
      if (charIndex < textArray[textArrayIndex].length && !isErasing) {
        // Typing logic
        setTypedText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
        typingTimeout = window.setTimeout(type, typingDelay);
      } else if (charIndex === textArray[textArrayIndex].length && !isErasing) {
        // Once the word is typed, pause and start erasing after a delay
        setIsTyping(false);
        setTimeout(() => setIsErasing(true), newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0 && isErasing) {
        // Erasing logic
        setTypedText((prev) => prev.substring(0, prev.length - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
        erasingTimeout = window.setTimeout(erase, erasingDelay);
      } else if (charIndex === 0 && isErasing) {
        // Once fully erased, start typing the next word
        setIsErasing(false);
        setTextArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setIsTyping(true);
      }
    }

    if (isTyping) {
      typingTimeout = window.setTimeout(type, typingDelay);
    } else if (isErasing) {
      erasingTimeout = window.setTimeout(erase, erasingDelay);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [charIndex, textArrayIndex, isTyping, isErasing]); // Dependency array

  return (
    <div className={styles.container}>
      <p>
        Music is <span className={styles.typedText}>{typedText}</span>
        
      </p>
    </div>
  );
};

export default TypingEffect;
