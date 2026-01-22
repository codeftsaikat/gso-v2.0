
import { Menu, Microscope, Zap } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";


export function Navigation() {
    const isMobile = useIsMobile()
    const [open, setOpen] = useState(false)

    if (isMobile) {
        return (
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="border" asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="size-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] py-10 px-6 border border-gray-700">
                    <div className="flex flex-col gap-4 py-6 ">

                        <ScrollLink
                            to="home"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </ScrollLink>

                        <ScrollLink
                            to="about"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            smooth={true}
                            duration={500}
                        >
                            About Us
                        </ScrollLink>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="events" className="border-none">
                                <AccordionTrigger className="py-0 text-lg font-medium hover:no-underline">
                                    Events
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-0 flex flex-col gap-4 ml-4 border-l-2 border-muted pl-4">
                                    <ScrollLink
                                        to="first"
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <div
                                            className="flex gap-2"
                                        >
                                            <Zap className="size-5 shrink-0" />

                                            <div>
                                                <div className="font-medium">1st NGSO</div>
                                                <div className="text-muted-foreground">
                                                    National Legacy Event
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollLink>

                                    <ScrollLink
                                        to="second"
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <div
                                            className="flex gap-2"
                                        >
                                            <Microscope className="size-5 shrink-0" />

                                            <div>
                                                <div className="font-medium">2nd IGSO</div>
                                                <div className="text-muted-foreground">
                                                    International Championship
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollLink>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>


                        <ScrollLink
                            to="partners"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            smooth={true}
                            duration={500}
                        >
                            Partners
                        </ScrollLink>

                        <ScrollLink
                            to="gallery"
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            smooth={true}
                            duration={500}
                        >
                            Gallery
                        </ScrollLink>
                    </div>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <div className="bg-white border py-2 px-4 rounded-full">
            <NavigationMenu >
                <NavigationMenuList className="flex-wrap">

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <ScrollLink
                                to="home"
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </ScrollLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <ScrollLink
                                to="about"
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                smooth={true}
                                duration={500}
                            >
                                About Us
                            </ScrollLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>

                                        <ScrollLink
                                            to="first"
                                            onClick={() => setOpen(false)}
                                            className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                            smooth={true}
                                            duration={500}
                                        >
                                            <div
                                                className="flex gap-2"
                                            >
                                                <Zap className="size-5 shrink-0" />

                                                <div>
                                                    <div className="font-medium">1st NGSO</div>
                                                    <div className="text-muted-foreground">
                                                        National Legacy Event
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollLink>


                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <ScrollLink
                                            to="second"
                                            onClick={() => setOpen(false)}
                                            className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                            smooth={true}
                                            duration={500}
                                        >
                                            <div
                                                className="flex gap-2"
                                            >
                                                <Microscope className="size-5 shrink-0" />

                                                <div>
                                                    <div className="font-medium">2nd IGSO</div>
                                                    <div className="text-muted-foreground">
                                                        International Championship
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollLink>

                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <ScrollLink
                                to="partners"
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                smooth={true}
                                duration={500}
                            >
                                Partners
                            </ScrollLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <ScrollLink
                                to="gallery"
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                                smooth={true}
                                duration={500}
                            >
                                Gellary
                            </ScrollLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}


