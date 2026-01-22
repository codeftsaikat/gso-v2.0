import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CalendarCheck, CalendarDays } from "lucide-react";
import type { EventCategory } from "./types";

interface EventTabsProps {
    activeTab: 'ongoing' | 'past' | 'future';
    onTabChange: (value: string) => void;
    eventCategories: EventCategory[];
}

const EventTabs = ({ activeTab, onTabChange, eventCategories }: EventTabsProps) => {
    return (
        <Tabs defaultValue="ongoing" value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
                {eventCategories.map((category) => {
                    let Icon;
                    switch (category.id) {
                        case 'ongoing':
                            Icon = CalendarCheck;
                            break;
                        case 'past':
                            Icon = Calendar;
                            break;
                        case 'future':
                            Icon = CalendarDays;
                            break;
                        default:
                            Icon = Calendar;
                    }

                    return (
                        <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Icon className="h-4 w-4" />
                            <span>{category.name.split(' ')[0]}</span>
                        </TabsTrigger>
                    );
                })}
            </TabsList>

            {/* Tab Contents */}
            <div className="mt-8">

                <section id="second">
                    <TabsContent value="ongoing" className="mt-0">
                        <div className="mb-6 text-center">
                            <h3 className="irvin text-2xl! font-bold mb-2 ">Ongoing Events</h3>
                            <p className="text-black">Active events you can participate in right now</p>
                        </div>
                    </TabsContent>
                </section>

                <section id="first">
                    <TabsContent value="past" className="mt-0">
                        <div className="mb-6 text-center">
                            <h3 className="text-2xl! font-bold mb-2 irvin">Completed Events</h3>
                            <p className="text-black">Past events with photos, videos, and outcomes</p>
                        </div>
                    </TabsContent>
                </section>


                <TabsContent value="future" className="mt-0">
                    <div className="mb-6 text-center">
                        <h3 className="text-2xl! font-bold mb-2 irvin">Upcoming Events</h3>
                        <p className="text-black">Future events you can prepare for and register</p>
                    </div>
                </TabsContent>
            </div>
        </Tabs >
    );
};

export default EventTabs;