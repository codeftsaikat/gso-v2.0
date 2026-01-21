import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Users } from "lucide-react";

const EventCTA = () => {
    return (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Want to Host an Event?</CardTitle>
                <CardDescription>
                    Schools and institutions can partner with us to bring science events to your location
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="gap-2">
                        <Users className="h-4 w-4" />
                        Partner with Us
                    </Button>
                    <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                        <Download className="h-4 w-4" />
                        Download Event Kit
                    </Button>
                    <Button variant="secondary" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Contact for Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default EventCTA;