import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVisionImpact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const visionCardRef = useRef<HTMLDivElement>(null);
    const missionCardRef = useRef<HTMLDivElement>(null);
    const statsSectionRef = useRef<HTMLDivElement>(null);
    const statsTitleRef = useRef<HTMLDivElement>(null);
    const statsItemsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate badge with bounce effect
            gsap.from(badgeRef.current, {
                scrollTrigger: {
                    trigger: badgeRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.5,
                rotation: -10,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });

            // Animate title with slide up
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 80,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Animate Vision card from left
            gsap.from(visionCardRef.current, {
                scrollTrigger: {
                    trigger: visionCardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -100,
                rotationY: 15,
                duration: 1,
                ease: "power3.out"
            });

            // Animate Mission card from right
            gsap.from(missionCardRef.current, {
                scrollTrigger: {
                    trigger: missionCardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: 100,
                rotationY: -15,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Animate stats title
            gsap.from(statsTitleRef.current, {
                scrollTrigger: {
                    trigger: statsTitleRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out"
            });

            // Animate stats items with stagger
            gsap.from(".stat-card", {
                scrollTrigger: {
                    trigger: statsItemsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 60,
                scale: 0.8,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-r from-zinc-50 to-zinc-50"
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-12 md:mb-20">

                    <div ref={badgeRef} className="inline-flex items-center gap-2 mb-4">
                        <div className="px-4 py-2 text-sm font-semibold rounded-full border border-black/20 text-black">
                            Our Purpose & Impact
                        </div>
                    </div>
                    <h2 className="font-bold irvin-header text-center mx-auto flex items-center justify-center">
                        <p ref={titleRef} className="text-3xl sm:text-4xl mb-8"
                        >
                            Shaping Future Thinkers & Changemakers

                        </p>

                    </h2>

                </div>



                {/* Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16 md:mb-24">
                    {/* Vision Card */}
                    <div ref={visionCardRef}>
                        <SpotlightCard className="custom-spotlight-card bg-white border border-slate-300" spotlightColor="rgba(0, 229, 355, 0.2)">
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-5">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>


                                <p className="text-lg text-gray-700 leading-relaxed">
                                    "Empowering young minds to think logically, create fearlessly and build a truth-driven world."
                                </p>
                            </div>
                        </SpotlightCard>
                    </div>


                    {/* Mission Card */}
                    <div ref={missionCardRef}>
                        <SpotlightCard className="custom-spotlight-card bg-white border border-slate-300" spotlightColor="rgba(0, 329, 355, 0.2)">
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-5">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    "Creating a learning ecosystem where Wisdom becomes Power, logic becomes strength and every learner becomes Changemaker."
                                </p>
                            </div>
                        </SpotlightCard>
                    </div>

                </div>

                {/* Impact Section */}
                <div ref={statsSectionRef} className="mb-16 md:mb-24">
                    <div ref={statsTitleRef} className="text-center mb-6">

                        <h2 className="font-bold text-3xl! text-center mx-auto flex items-center justify-center">

                            <p className="text-3xl mb-2"
                            >
                                Impacts Made
                            </p>

                        </h2>
                        <p className="text-foreground max-w-2xl mx-auto">
                            Real numbers showing our global reach and community impact
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div ref={statsItemsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {[
                            { value: 10000, label: "Participants" },
                            { value: 80, label: "Countries" },
                            { value: 1000, label: "Institutions" },
                            { value: 1000000, label: "People Reached" },
                            { value: 200, label: "Partners" },
                            { value: 700, label: "Representatives" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card bg-white border border-slate-300 rounded-lg p-5 text-center"
                            >
                                <CountUp
                                    from={0}
                                    to={stat.value}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="count-up-text text-2xl md:text-3xl font-bold mb-2"
                                />
                                {/* <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {stat.value}
                                </div> */}
                                <div className="font-semibold text-gray-900 mb-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVisionImpact;
