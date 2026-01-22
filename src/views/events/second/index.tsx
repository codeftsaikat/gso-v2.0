
import { useState } from "react";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import EventCard from "./event-card";
import EventStats from "./event-stats";
import EventTabs from "./event-tab";
import { eventCategories, eventsData } from "./events-data";

type ActiveTab = 'ongoing' | 'past' | 'future';

const EventsSection = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("ongoing");

    const handleTabChange = (value: string) => {
        setActiveTab(value as ActiveTab);
    };



    const [showAll, setShowAll] = useState(false)
    const currentEvents = eventsData[activeTab];
    const visibleEvents = showAll ? currentEvents : currentEvents.slice(0, 2)
    return (
        <section
            // id="second"
            className="py-16 md:py-24 text-black relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Section Header */}

                <SectionHeader
                    heading="Events & Activities"
                    title="Explore Our Science Events"
                />

                {/* Event Tabs */}
                <div className="mb-10">
                    <EventTabs
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        eventCategories={eventCategories}
                    />
                </div>


                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                    {visibleEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            isFeatured={event.isFeatured}
                        />
                    ))}
                </div>

                {/* 3. Keep your button logic as is */}
                {currentEvents.length > 2 && (
                    <div className="w-full flex justify-center my-18 irvin">
                        <Button className="rounded-full font-bold text-xl py-6 px-10 bg-white text-black hover:bg-gray-100 border border-gray-300 cursor-pointer"
                            size={"lg"} onClick={() => setShowAll((prev) => !prev)}>
                            {showAll ? "Show Less" : "View All"}
                        </Button>
                    </div>
                )}

                {/* Event Statistics */}
                <div className="mb-12">
                    <EventStats />
                </div>
            </div>
        </section>
    );
};

export default EventsSection;