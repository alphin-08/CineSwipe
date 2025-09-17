import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.css";

function MainScreen() {
    const [startY, setStartY] = useState(null);
    const [translateY, setTranslateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const navigate = useNavigate();

    const threshold = 200;

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || startY === null) return;
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        if (deltaY < 0) {
            setTranslateY(deltaY);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (Math.abs(translateY) > threshold) {
            setTranslateY(-window.innerHeight);
            setTimeout(() => {
                navigate("/loginP");
            }, 400);
        } else {
            setTranslateY(0);
        }
        setStartY(null);
    };

    const handleMouseDown = (e) => {
        setStartY(e.clientY);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || startY === null) return;
        const currentY = e.clientY;
        const deltaY = currentY - startY;
        if (deltaY < 0) {
            setTranslateY(deltaY);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (Math.abs(translateY) > threshold) {
            setTranslateY(-window.innerHeight);
            setTimeout(() => {
                navigate("/loginP");
            }, 400);
        } else {
            setTranslateY(0);
        }
        setStartY(null);
    };

    return (
        <div
            className="mainContainer"
            style={{
                transform: `translateY(${translateY}px)`,
                transition: isDragging ? "none" : "transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)"
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="topContainer">
                <h1>Cine</h1>
                <h1>Swipe</h1>
            </div>
            <div className="bottomContainer">
                <button onClick={() => {
                    setTranslateY(-window.innerHeight);
                    setTimeout(() => {
                        navigate("/loginP");
                    }, 400);
                }}>
                    <b>Swipe Up</b>
                </button>
            </div>
        </div>
    );
}

export default MainScreen;
