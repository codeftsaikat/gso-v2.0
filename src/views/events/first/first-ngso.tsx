import BlurText from "@/components/BlurText";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";

const MissionVisionImpact = () => {

    return (
        <section className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-r from-zinc-50 to-zinc-50"
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20">

                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="px-4 py-2 text-sm font-semibold rounded-full border border-black/20 text-black">
                            Our Purpose & Impact
                        </div>
                    </div>
                    <h2 className="font-bold irvin-header text-center mx-auto flex items-center justify-center">
                        <BlurText
                            text="Shaping Future Thinkers & Changemakers"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="text-3xl mb-8"
                        />

                    </h2>

                </div>



                {/* Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16 md:mb-24">
                    {/* Vision Card */}
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


                            <p className="text-lg text-gray-700 leading-relaxed body-italic">
                                "Empowering young minds to think logically, create fearlessly and build a truth-driven world."
                            </p>
                        </div>
                    </SpotlightCard>


                    {/* Mission Card */}
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

                            <p className="text-lg text-gray-700 leading-relaxed italic">
                                "Creating a learning ecosystem where Wisdom becomes Power, logic becomes strength and every learner becomes Changemaker."
                            </p>
                        </div>
                    </SpotlightCard>

                </div>

                {/* Impact Section */}
                <div className="mb-16 md:mb-24">
                    <div className="text-center mb-6">

                        <h2 className="font-bold irvin text-3xl! text-center mx-auto flex items-center justify-center">
                            <BlurText
                                text="Impacts Made"
                                delay={200}
                                animateBy="words"
                                direction="top"
                                className="text-3xl mb-2"
                            />

                        </h2>
                        <p className="text-foreground max-w-2xl mx-auto">
                            Real numbers showing our global reach and community impact
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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
                                className="bg-white border border-slate-300 rounded-lg p-5 text-center"
                            >
                                <CountUp
                                    from={0}
                                    to={stat.value}
                                    separator=","
                                    direction="up"
                                    duration={1}
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