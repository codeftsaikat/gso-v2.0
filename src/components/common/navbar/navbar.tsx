
import { Menu, Microscope, Zap } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { Link } from "react-router-dom"


export function Navigation() {
    const isMobile = useIsMobile()
    const [open, setOpen] = useState(false)

    if (isMobile) {
        return (
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="size-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    {/* <SheetHeader>
                        <SheetTitle className="text-left text-primary">Menu</SheetTitle>
                    </SheetHeader> */}

                    <div className="flex flex-col gap-4 py-6">
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setOpen(false)}
                            className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                            About Us
                        </Link>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="events" className="border-none">
                                <AccordionTrigger className="py-0 text-lg font-semibold hover:no-underline">
                                    Events
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-0 flex flex-col gap-4 ml-4 border-l-2 border-muted pl-4">
                                    <Link
                                        to="#"
                                        onClick={() => setOpen(false)}
                                        className="flex gap-3 items-center group"
                                    >
                                        <div className="p-2 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
                                            <Zap className="size-4 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">1st NGSO</div>
                                            <div className="text-xs text-muted-foreground">National Legacy Event</div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="#"
                                        onClick={() => setOpen(false)}
                                        className="flex gap-3 items-center group"
                                    >
                                        <div className="p-2 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
                                            <Microscope className="size-4 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">2nd IGSO</div>
                                            <div className="text-xs text-muted-foreground">International Championship</div>
                                        </div>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Link
                            to="/media"
                            onClick={() => setOpen(false)}
                            className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                            Media & Partners
                        </Link>
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
                            <Link to="/docs">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to="/docs">About Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="#"
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
                                        </Link>

                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="#"
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
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to="/docs">Media & Partners</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}


