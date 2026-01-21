import CountUp from "@/components/CountUp";
import { eventStats } from "./events-data";

const EventStats = () => {
    return (
        <div className="mb-16 md:mb-24 w-full">
            {/* Heading */}
            <div className="text-center mb-12">
                <h3 className="text-3xl! font-bold text-black irvin mb-2">
                    Event Statistics
                </h3>
                <p className="text-foreground max-w-2xl mx-auto">
                    Real numbers showing event statistics
                </p>
            </div>

            {/* Stats Grid Wrapper */}
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {eventStats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-300 rounded-lg p-5 text-center w-full"
                        >
                            <CountUp
                                from={0}
                                to={stat.value}
                                separator=","
                                direction="up"
                                duration={1}
                                className="text-2xl md:text-3xl font-bold mb-2"
                            />
                            <div className="font-semibold text-gray-900">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventStats;
