import { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({
    children,
    className = '',
    speed = 0.5, // 0 = no movement, 1 = full scroll speed
    direction = 'up', // up, down, left, right
    offset = 0,
}) => {
    const ref = useRef(null);
    const [transform, setTransform] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const elementTop = rect.top + scrolled;
            const windowHeight = window.innerHeight;

            // Calculate how far into the viewport the element is
            const relativeScroll = (scrolled + windowHeight - elementTop) * speed;

            const transforms = {
                up: `translateY(${-relativeScroll + offset}px)`,
                down: `translateY(${relativeScroll + offset}px)`,
                left: `translateX(${-relativeScroll + offset}px)`,
                right: `translateX(${relativeScroll + offset}px)`,
            };

            setTransform(transforms[direction] || transforms.up);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed, direction, offset]);

    return (
        <div
            ref={ref}
            className={`parallax-element ${className}`}
            style={{
                transform,
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
};

export default ParallaxSection;
