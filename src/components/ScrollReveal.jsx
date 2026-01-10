import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
    children,
    className = '',
    animation = 'fadeUp', // fadeUp, fadeIn, fadeLeft, fadeRight, scale, rotate
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    once = true,
    distance = 50,
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.disconnect();
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, once]);

    const getInitialStyles = () => {
        const base = {
            opacity: 0,
            transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        };

        const animations = {
            fadeUp: { ...base, transform: `translateY(${distance}px)` },
            fadeDown: { ...base, transform: `translateY(-${distance}px)` },
            fadeLeft: { ...base, transform: `translateX(${distance}px)` },
            fadeRight: { ...base, transform: `translateX(-${distance}px)` },
            fadeIn: { ...base },
            scale: { ...base, transform: 'scale(0.8)' },
            rotate: { ...base, transform: 'rotate(-10deg) scale(0.9)' },
            blur: { ...base, filter: 'blur(10px)' },
        };

        return animations[animation] || animations.fadeUp;
    };

    const getVisibleStyles = () => {
        return {
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)',
            filter: 'blur(0)',
        };
    };

    return (
        <div
            ref={ref}
            className={className}
            style={isVisible ? { ...getInitialStyles(), ...getVisibleStyles() } : getInitialStyles()}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
