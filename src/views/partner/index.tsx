
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


export default function PartnersSection() {
    return (
        <section className="py-20 bg-linear-to-r from-zinc-100 to-gray-100" id="partners">
            <SectionHeader
                heading="Partners & Sponsors"
                title="Trusted By Leading Organizations"
            />
            <div className="container mx-auto max-w-5xl">

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
