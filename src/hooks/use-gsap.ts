import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for fade-up animation on scroll
 */
export const useFadeUp = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Hook for stagger animation on children elements
 */
export const useStagger = (
  selector: string = ".stagger-item",
  delay: number = 0,
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const items = element.querySelectorAll(selector);
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, delay]);

  return ref;
};

/**
 * Hook for scale animation on scroll
 */
export const useScaleUp = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Hook for slide-in from left animation
 */
export const useSlideInLeft = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Hook for slide-in from right animation
 */
export const useSlideInRight = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

/**
 * Hook for text reveal animation (word by word or character by character)
 */
export const useTextReveal = (delay: number = 0, chars: boolean = false) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || "";
    element.textContent = "";

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.overflow = "hidden";

    if (chars) {
      // Character by character reveal
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(100%)";
        wrapper.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: delay + i * 0.03,
          ease: "power2.out",
        });
      });
    } else {
      // Word by word reveal
      const words = text.split(" ");
      words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(100%)";
        wrapper.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: delay + i * 0.1,
          ease: "power2.out",
        });
      });
    }

    element.appendChild(wrapper);

    return () => {
      gsap.killTweensOf(wrapper.children);
    };
  }, [delay, chars]);

  return ref;
};

/**
 * Hook for parallax effect
 */
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
};

/**
 * Hook for counter animation
 */
export const useCounter = (
  end: number,
  duration: number = 2,
  delay: number = 0,
) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: end,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toLocaleString();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [end, duration, delay]);

  return ref;
};

/**
 * Hook for horizontal scroll section
 */
export const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;
    if (!container || !sections) return;

    const scrollWidth = sections.scrollWidth;

    gsap.to(sections, {
      x: () => -(scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth - window.innerWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { containerRef, sectionsRef };
};
