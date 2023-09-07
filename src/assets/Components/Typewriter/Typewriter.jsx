import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ staticText, words, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + word.charAt(prevText.length));
        if (displayText === word) {
          setIsDeleting(true);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, speed / 2); // Backspace speed is half of typing speed
    }

    return () => clearTimeout(timer);
  }, [currentIndex, displayText, isDeleting, speed, words]);

  useEffect(() => {
    // Start the loop after the initial render
    const initialTimeout = setTimeout(() => {
      setIsDeleting(false);
    }, 1000); // Wait for 1 second before starting the loop

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="typewriter">
  <span className="static-text">{staticText}</span>
  <br />
  <span className="dynamic-text">{displayText}</span>
</div>

  );
};

export default Typewriter;
