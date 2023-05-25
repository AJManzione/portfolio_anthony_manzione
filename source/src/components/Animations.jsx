import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useFadeInTransition(elementRef) {
  const observerRef = useRef(null);
  const fadeInRef = useRef(null);

  useEffect(() => {
    const fadeIn = () => {
      fadeInRef.current = gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: '10%' },
        { opacity: 1, y: '0%', duration: 1.618 }
      );
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fadeIn();
        } else {
          fadeInRef.current?.kill();
          elementRef.current.style.opacity = 0;
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1e-100, // Adjust the threshold as needed
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      fadeInRef.current?.kill();
    };
  }, [elementRef]);
} 





export function useSlideInRight(elementRef) {
  const observerRef = useRef(null);
  const slideInRef = useRef(null);

  useEffect(() => {
    const slideIn = () => {
      slideInRef.current = gsap.fromTo(
        elementRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.618 }
      );
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slideIn();
        } else {
          slideInRef.current?.kill();
          elementRef.current.style.transform = 'translateX(0%)'
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1e-100, // Adjust the threshold as needed
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      slideInRef.current?.kill();
    };
  }, [elementRef]);
} 





export function useSlideInLeft(elementRef) {
  const observerRef = useRef(null);
  const slideInRef = useRef(null);

  useEffect(() => {
    const slideIn = () => {
      slideInRef.current = gsap.fromTo(
        elementRef.current,
        { x: '-100%' },
        { x: '0%', duration: 1 }
      );
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slideIn();
        } else {
          slideInRef.current?.kill();
          elementRef.current.style.transform = 'translateX(0%)'
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1e-100, // Adjust the threshold as needed
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      slideInRef.current?.kill();
    };
  }, [elementRef]);
} 
