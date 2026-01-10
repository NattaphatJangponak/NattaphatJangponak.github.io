import { useEffect, useRef, useState } from 'react';

const KineticText = ({
    text,
    className = '',
    as: Component = 'span',
    animation = 'wave', // wave, bounce, stagger, float
    delay = 0,
    staggerDelay = 0.05,
    triggerOnView = true
}) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(!triggerOnView);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!triggerOnView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [triggerOnView]);

    const getAnimationStyle = (index) => {
        const baseDelay = delay + (index * staggerDelay);

        const animations = {
            wave: {
                animation: isVisible ? `kinetic-wave 0.6s ease-out forwards` : 'none',
                animationDelay: `${baseDelay}s`,
            },
            bounce: {
                animation: isVisible ? `kinetic-bounce 0.6s ease-out forwards` : 'none',
                animationDelay: `${baseDelay}s`,
            },
            stagger: {
                animation: isVisible ? `kinetic-stagger 0.5s ease-out forwards` : 'none',
                animationDelay: `${baseDelay}s`,
            },
            float: {
                animation: isVisible ? `kinetic-float 3s ease-in-out infinite` : 'none',
                animationDelay: `${baseDelay}s`,
            }
        };

        return animations[animation] || animations.wave;
    };

    const getHoverStyle = (index) => {
        if (!isHovered) return {};
        return {
            transform: `translateY(${Math.sin(index * 0.5) * -5}px)`,
            transition: `transform 0.3s ease ${index * 0.02}s`,
        };
    };

    const letters = text.split('');

    return (
        <Component
            ref={containerRef}
            className={`kinetic-text ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'inline-block' }}
        >
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className="kinetic-letter"
                    style={{
                        display: 'inline-block',
                        opacity: isVisible ? 1 : 0,
                        whiteSpace: letter === ' ' ? 'pre' : 'normal',
                        ...getAnimationStyle(index),
                        ...getHoverStyle(index),
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </Component>
    );
};

export default KineticText;
