

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  Brain,
  Calendar,
  Compass,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import type { Category } from "./catagory";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof categories)[number] | boolean | null>(
    null
  );
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? categories : categories.slice(0, 3)

  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex  bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="flex">
                <motion.div layoutId={`${active.name}-${id}`}>
                  <div className={`inline-flex p-8 rounded-xl bg-gradient-to-br ${active.color} m-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {active.icon}
                    </div>
                  </div>
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="mt-2">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.name}
                      </motion.h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{active.classRange}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{active.ageRange}</span>
                        </div>
                      </div>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 mt-4"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid of category cards - 3 per row on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCategories.map((card) => (
          <motion.div
            layoutId={`card-${card.name}-${id}`}
            key={`card-${card.name}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer"
          >
            <Card className="group shadow-lg border border-gray-300 transition-all duration-300">
              <CardContent className="p-6 flex gap-4">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white text-2xl">
                    {card.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {card.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{card.classRange}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{card.ageRange}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {categories.length > 3 && (
        <div className="w-full flex justify-center irvin">
          <Button
            onClick={() => setShowAll((prev) => !prev)}
            variant={"outline"}
            size={"lg"}
            className="mt-18 rounded-full font-bold text-xl py-6 px-10 border border-gray-300 cursor-pointer"
          > {showAll ? "Show Less" : "View All"}</Button>
        </div>
      )}

    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


const categories: Category[] = [
  {
    id: 1,
    name: "Wonderist",
    classRange: "Class 1-2",
    ageRange: "Age 6-7",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Foundational learning with play-based activities to spark curiosity and basic problem-solving skills.",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 2,
    name: "Explorers",
    classRange: "Class 3-4",
    ageRange: "Age 8-9",
    icon: <Compass className="h-8 w-8" />,
    description: "Introduction to structured learning with hands-on exploration and basic logical thinking.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    name: "Innovators",
    classRange: "Class 5-6",
    ageRange: "Age 10-11",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Developing creative thinking and problem-solving skills through project-based learning.",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 4,
    name: "Vanguard",
    classRange: "Class 7-8",
    ageRange: "Age 12-13",
    icon: <Target className="h-8 w-8" />,
    description: "Advanced critical thinking and leadership skills development for young adolescents.",
    color: "from-emerald-400 to-green-500",
  },
  {
    id: 5,
    name: "Pioneers",
    classRange: "Class 9-10",
    ageRange: "Age 14-16",
    icon: <Rocket className="h-8 w-8" />,
    description: "Specialized skill development and career exploration with real-world applications.",
    color: "from-violet-400 to-purple-500",
  },
  {
    id: 6,
    name: "Trailblazers",
    classRange: "Class 11-12",
    ageRange: "Age 17-19",
    icon: <Zap className="h-8 w-8" />,
    description: "College preparation and advanced research skills with professional mentorship.",
    color: "from-red-400 to-pink-500",
  },
  {
    id: 7,
    name: "Scholars",
    classRange: "University Level",
    ageRange: "Age 20-24",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "Advanced academic research, professional networking, and industry collaboration.",
    color: "from-indigo-400 to-blue-500",
  },
  {
    id: 8,
    name: "Masterminds",
    classRange: "Graduate & Open",
    ageRange: "Age 25+",
    icon: <Brain className="h-8 w-8" />,
    description: "Expert-level collaboration, innovation, and thought leadership in specialized fields.",
    color: "from-gray-700 to-gray-900",
  },
];
