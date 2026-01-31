
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import EventCard from "./event-card";
import EventStats from "./event-stats";
import EventTabs from "./event-tab";
import { eventCategories, eventsData } from "./events-data";

gsap.registerPlugin(ScrollTrigger);

type ActiveTab = 'ongoing' | 'past' | 'future';

const EventsSection = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("ongoing");

    const handleTabChange = (value: string) => {
        setActiveTab(value as ActiveTab);
    };

    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const eventsGridRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section header
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 60,
                duration: 0.8,
                ease: "power2.out"
            });

            // Animate tabs with scale effect
            gsap.from(".event-tab-item", {
                scrollTrigger: {
                    trigger: tabsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.8,
                y: 30,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)"
            });

            // Animate event cards with 3D rotation effect
            gsap.from(".event-card-animate", {
                scrollTrigger: {
                    trigger: eventsGridRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 80,
                rotationX: 15,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out"
            });

            // Animate button with bounce
            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.5,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
            });

            // Animate stats section
            gsap.from(statsRef.current, {
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    const [showAll, setShowAll] = useState(false)
    const currentEvents = eventsData[activeTab];
    const visibleEvents = showAll ? currentEvents : currentEvents.slice(0, 2)
    return (
        <section
            ref={sectionRef}
            // id="second"
            className="py-16 md:py-24 text-black relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={headerRef}>
                    <SectionHeader
                        heading="Events & Activities"
                        title="Explore Our Science Events"
                    />
                </div>

                {/* Event Tabs */}
                <div ref={tabsRef} className="mb-10">
                    <EventTabs
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        eventCategories={eventCategories}
                    />
                </div>


                {/* Events Grid */}
                <div ref={eventsGridRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                    {visibleEvents.map((event) => (
                        <div key={event.id} className="event-card-animate">
                            <EventCard
                                event={event}
                                isFeatured={event.isFeatured}
                            />
                        </div>
                    ))}
                </div>

                {/* 3. Keep your button logic as is */}
                {currentEvents.length > 2 && (
                    <div ref={buttonRef} className="w-full flex justify-center my-18 irvin">
                        <Button className="rounded-full font-bold text-xl py-6 px-10 bg-white text-black hover:bg-gray-100 border border-gray-300 cursor-pointer"
                            size={"lg"} onClick={() => setShowAll((prev) => !prev)}>
                            {showAll ? "Show Less" : "View All"}
                        </Button>
                    </div>
                )}

                {/* Event Statistics */}
                <div ref={statsRef} className="mb-12">
                    <EventStats />
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
