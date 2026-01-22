import Carousel from "@/components/Carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { EventData } from "./types";

import { default as ongoing_01, default as ongoing_02, default as ongoing_03 } from "@/assets/activities/ongoing_01.jpeg";





interface EventCardProps {
    event: EventData;
    isFeatured?: boolean;
}

const images = [
    { src: ongoing_01 },
    { src: ongoing_02 },
    { src: ongoing_03 },
]



const EventCard = ({ event }: EventCardProps) => {


    const getStatusColor = (status: EventData['status']): string => {
        switch (status) {
            case 'ongoing': return 'bg-green-100 text-green-800 border-green-200';
            case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg  `}>
            {/* Card Header with Status */}
            <CardHeader className="pb-0">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getStatusColor(event.status)}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>

                    </div>
                    <CardTitle className="text-2xl! line-clamp-2 irvin mt-2">{event.title}</CardTitle>
                </div>
            </CardHeader>

            <div className="flex justify-center items-center">
                {event.status === "ongoing" && (
                    <div>
                        <div className="hidden md:block">
                            <Carousel
                                baseWidth={600}
                                autoplay
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                                items={images}

                            />
                        </div>
                        <div className="md:hidden">
                            <Carousel
                                baseWidth={350}
                                autoplay
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                                items={images}

                            />
                        </div>
                    </div>
                )}

                {event.status === "completed" && (<div>
                    <div className="hidden md:block">
                        <Carousel
                            baseWidth={600}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                            items={images}

                        />
                    </div>
                    <div className="md:hidden">
                        <Carousel
                            baseWidth={350}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                            items={images}

                        />
                    </div>
                </div>)}

                {event.status === "upcoming" && (<div>
                    <div className="hidden md:block">
                        <Carousel
                            baseWidth={600}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                            items={images}

                        />
                    </div>
                    <div className="md:hidden">
                        <Carousel
                            baseWidth={350}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                            items={images}

                        />
                    </div>
                </div>)}
            </div>
        </Card>
    );
};

export default EventCard;