import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import type { EventData } from "./types";

interface EventCardProps {
    event: EventData;
    isFeatured?: boolean;
}

const EventCard = ({ event, isFeatured = false }: EventCardProps) => {


    const getStatusColor = (status: EventData['status']): string => {
        switch (status) {
            case 'ongoing': return 'bg-green-100 text-green-800 border-green-200';
            case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // const getStatusIcon = (status: EventData['status']): string => {
    //     switch (status) {
    //         case 'ongoing': return '⏳';
    //         case 'upcoming': return '📅';
    //         case 'completed': return '✅';
    //         default: return '📌';
    //     }
    // };

    return (
        <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isFeatured ? 'lg:col-span-2' : ''}`}>
            {/* Card Header with Status */}
            <CardHeader className="pb-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getStatusColor(event.status)}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>

                    </div>
                    <CardTitle className="text-2xl! line-clamp-2 irvin mt-2">{event.title}</CardTitle>
                </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="pb-4">
                {/* Event Details */}
                <div className="space-y-3 mb-4">

                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.participants} participants</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 body-italic">
                    {event.description}
                </p>

            </CardContent>

            {/* Card Footer with Actions */}

        </Card>
    );
};

export default EventCard;