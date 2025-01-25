import React, { useState, useEffect } from 'react';

export default function EmojiRotator ({ emojis, heading }) {
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [emojis.length]);

    return (
        <h2 className="flex items-center space-x-2">
            {heading}&nbsp;
            <div className="relative overflow-hidden" style={{ width: "1.5em", height: "1.5em" }}>
                {emojis.map((emoji, index) => (
                    <span
                        key={index}
                        className={`absolute transition-opacity duration-1000 ease-in-out ${
                        index === currentEmojiIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transition: "opacity 1s ease-in-out" }}
                    >
                        {emoji}
                    </span>
                ))}
            </div>
        </h2>
    );
};