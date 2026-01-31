import VideoPlayer from "@/components/common/video-player";
import ElectricBorder from "@/components/ElectricBorder";
import LightRays from "@/components/LightRays";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create timeline for sequential animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Animate title with scale and fade
            tl.from(titleRef.current, {
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotationX: 45,
                duration: 1.2,
                ease: 'power4.out'
            })
            // Animate subtitle
            .from(subtitleRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
            }, '-=0.6')
            // Animate CTA buttons
            .from(ctaRef.current?.children || [], {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.6,
            }, '-=0.4')
            // Animate video
            .from(videoRef.current, {
                opacity: 0,
                x: 100,
                scale: 0.9,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.8');

            // Animate glow elements
            gsap.from('.hero-glow', {
                opacity: 0,
                scale: 0.5,
                duration: 2,
                stagger: 0.3,
                ease: 'power2.out'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header ref={heroRef} className="relative overflow-hidden bg-gray-900" id="home">

            <div className="absolute min-w-full">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#0afbff"
                    raysSpeed={1.2}
                    lightSpread={0.8}
                    rayLength={1.3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.39}
                    distortion={0}
                    className="custom-rays pt-0 mt-0"
                    pulsating={false}
                    fadeDistance={1.5}
                    saturation={1.6}
                />
            </div>

            <div className="pt-10 md:pt-24 pb-18 md:pb-40 lg:pt-26 lg:pb-26">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Top-right premium glow */}
                    <div className="hero-glow absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-amber-300/60 via-amber-200/30 to-transparent rounded-full blur-3xl shadow-2xl"></div>
                    {/* Bottom-left deeper accent with more opacity */}
                    <div className="hero-glow absolute -bottom-40 -left-90 w-80 h-80 bg-gradient-to-tr from-slate-400/25 to-transparent rounded-full blur-3xl"></div>
                    <div className="hero-glow absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-gradient-to-t from-slate-400/40 via-slate-300/20 to-transparent blur-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5"></div>
                </div>


                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent"></div></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-left lg:text-left fade-up">

                            {/* <div className="flex">
                                <Badge variant={"outline"} className="text-white ">
                                    Registration Open for 2025
                                </Badge>
                            </div> */}


                            <div ref={titleRef} className="flex flex-col items-start w-fit">
                                <img
                                    src="https://lh3.googleusercontent.com/d/1fk91ln_9whUoiV4L9nIw-AT4VMIcYNrj"
                                    alt="2nd IGSO Title"
                                    className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-2xl invert brightness-0"
                                />
                            </div>

                            <div className="relative z-10 rounded-xl  border-3 backdrop-blur-lg shadow-2xl mb-10 md:hidden">
                                <VideoPlayer
                                    src="https://www.youtube.com/embed/CsGAVg0hDbk"
                                />
                            </div>

                            <p ref={subtitleRef} className="text-md md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light text-white text-center">
                                Join the world's most prestigious science competition for young innovators.
                                Certified by global educational bodies.
                            </p>

                            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start md:items-start items-center">

                                <Link to={"https://sciencebaze.com/direct-reg/second-igso"} className="w-full text-center">
                                    <ElectricBorder
                                        color="#1af0ff"
                                        speed={4}
                                        chaos={0.01}
                                        style={{ borderRadius: 16 }}
                                        className="text-white px-6 py-4 cursor-pointer sm:hover:scale-110 duration-200"
                                    >
                                        Register Now - 100 BDT

                                    </ElectricBorder>
                                </Link>

                            </div>

                        </div>

                        <div ref={videoRef} className="relative z-10 rounded-xl  border-3 backdrop-blur-lg shadow-2xl hidden md:block">
                            <VideoPlayer
                                src="https://www.youtube.com/embed/CsGAVg0hDbk"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Hero;