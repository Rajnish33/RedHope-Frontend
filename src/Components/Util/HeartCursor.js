import React, { useEffect, useRef } from "react";

const HeartCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMove = (event) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
            cursor.classList.add("is-visible");
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div className="heart-cursor" ref={cursorRef} aria-hidden="true">
            <span className="heart-cursor__icon">❤</span>
        </div>
    );
};

export default HeartCursor;
