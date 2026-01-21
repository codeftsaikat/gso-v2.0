
import hikmah from "@/assets/partners/hikmah.jpg"
import imperial from "@/assets/partners/imperial.png"
import kidlon from "@/assets/partners/kidlon.png"
import panjeree from "@/assets/partners/panjeree.png"
import pentagon from "@/assets/partners/pentagon.png"
import ygf from "@/assets/partners/ygf.jpg"
import SectionHeader from "@/components/common/section-header"
import LogoLoop from "@/components/LogoLoop"



const partners = [
    {
        alt: "Kidlon",
        src: kidlon,
        href: "https://kidloncare.com/",
    },
    {
        alt: "Pentagon International",
        src: pentagon,
        href: "https://pentagonint.com/",
    },
    {
        alt: "YGF Digital",
        src: ygf,
        href: "https://ygfdigitalbd.com/",
    },
    {
        alt: "Imperial International School",
        src: imperial,
        href: "https://www.iisc-bd.com/",
    },
    {
        alt: "Panjeree Publications",
        src: panjeree,
        href: "https://www.panjeree.com/",
    },
    {
        alt: "Hikmah Al Falah",
        src: hikmah,
        href: "https://www.facebook.com/hikmatulfalahh",
    },
]

// const partners = [
//     {
//         name: "Kidlon",
//         logo: kidlon,
//         url: "https://kidloncare.com/",
//     },
//     {
//         name: "Pentagon International",
//         logo: pentagon,
//         url: "https://pentagonint.com/",
//     },
//     {
//         name: "YGF Digital",
//         logo: ygf,
//         url: "https://ygfdigitalbd.com/",
//     },
//     {
//         name: "Imperial International School",
//         logo: imperial,
//         url: "https://www.iisc-bd.com/",
//     },
//     {
//         name: "Panjeree Publications",
//         logo: panjeree,
//         url: "https://www.panjeree.com/",
//     },
//     {
//         name: "Hikmah Al Falah",
//         logo: hikmah,
//         url: "https://www.facebook.com/hikmatulfalahh",
//     },
// ]

export default function PartnersSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-zinc-100 to-gray-100">
            <SectionHeader
                heading="Partners & Sponsors"
                title="Trusted By Leading Organizations"
            />
            <div className="container mx-auto max-w-5xl">
                {/* <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 ">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center opacity-100 transition-opacity duration-300"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={120}
                                    height={40}
                                    className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            ) : (
                                <span className="text-lg font-semibold tracking-tight text-foreground">{partner.name}</span>
                            )}
                        </a>
                    ))}
                </div> */}

                <LogoLoop
                    logos={partners}
                    speed={80}
                    direction="left"
                    logoHeight={80}
                    gap={60}
                    hoverSpeed={0}
                    fadeOut
                />
            </div>
        </section>
    )
}


// const techLogos = [
//     { node: <SiReact />, title: "React", href: "https://react.dev" },
//     { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//     { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//     { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

// // Alternative with image sources
// const imageLogos = [
//     { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//     { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//     { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

// function App() {
//     return (
//         <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
//             {/* Basic horizontal loop */}
//             <LogoLoop
//                 logos={techLogos}
//                 speed={100}
//                 direction="left"
//                 logoHeight={60}
//                 gap={60}
//                 hoverSpeed={0}
//                 scaleOnHover
//                 fadeOut
//                 fadeOutColor="#ffffff"
//                 ariaLabel="Technology partners"
//             />

//             {/* Vertical loop with deceleration on hover */}
//             <LogoLoop
//                 logos={techLogos}
//                 speed={100}
//                 direction="left"
//                 logoHeight={60}
//                 gap={60}
//                 hoverSpeed={0}
//                 fadeOut
//                 useCustomRender={false}
//             />
//         </div>
//     );
// }