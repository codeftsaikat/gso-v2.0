"use client";

import SectionHeader from "@/components/common/section-header";
import VideoPlayer from "@/components/common/video-player";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const MediaCoverageSection = () => {
    const autoplay = useRef(
        Autoplay({
            delay: 2500,
            stopOnInteraction: false, // resume after drag
            stopOnMouseEnter: true,
        })
    );

    const mediaCoverage = [
        { id: 1, url: "https://www.youtube.com/embed/CsGAVg0hDbk" },
        { id: 2, url: "https://www.youtube.com/embed/2dMm67pg8ew" },
        { id: 3, url: "https://www.youtube.com/embed/CsGAVg0hDbk" },
        { id: 4, url: "https://www.youtube.com/embed/2dMm67pg8ew" },
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-zinc-100 to-gray-100" id="media">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <SectionHeader
                    heading="Media Coverage"
                    title={
                        "Featured in National Media"
                    }
                />

                <Carousel
                    plugins={[autoplay.current]}
                    opts={{ align: "start" }}
                    className="w-full relative group" // Added relative and group for hover effects
                >
                    <CarouselContent className="-ml-4">
                        {mediaCoverage.map((media) => (
                            <CarouselItem
                                key={media.id}
                                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <VideoPlayer src={media.url} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Control Container */}
                    <div className="flex gap-2 mt-3 items-center justify-center sm:block">

                        <CarouselPrevious
                            className="static sm:absolute mt-4 sm:mt-0 translate-y-0 sm:-left-12"
                        />
                        <CarouselNext
                            className="static sm:absolute mt-4 sm:mt-0 translate-y-0 sm:-right-12"
                        />
                    </div>
                </Carousel>

            </div>
        </section>
    );
};

export default MediaCoverageSection;
