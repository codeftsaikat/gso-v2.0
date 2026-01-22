import hikmah from "@/assets/partners/hikmah.jpg"
import imperial from "@/assets/partners/imperial.png"
import kidlon from "@/assets/partners/kidlon.png"
import panjeree from "@/assets/partners/panjeree.png"
import pentagon from "@/assets/partners/pentagon.png"
import ygf from "@/assets/partners/ygf.jpg"
import SectionHeader from "@/components/common/section-header"

const partners = [
    { name: "Kidlon", src: kidlon, href: "https://kidloncare.com/", color: "#8b5cf6" },
    { name: "Pentagon International", src: pentagon, href: "https://pentagonint.com/", color: "#ec4899" },
    { name: "YGF Digital", src: ygf, href: "https://ygfdigitalbd.com/", color: "#3b82f6" },
    { name: "Imperial International School", src: imperial, href: "https://www.iisc-bd.com/", color: "#ef4444" },
    { name: "Panjeree Publications", src: panjeree, href: "https://www.panjeree.com/", color: "#10b981" },
    { name: "Hikmah Al Falah", src: hikmah, href: "https://www.facebook.com/hikmatulfalahh", color: "#f59e0b" },
]

export default function PartnersSection() {
    return (
        <section className="relative py-20 bg-zinc-50">
            <SectionHeader
                heading="Partners & Sponsors"
                title="Trusted By Leading Organizations"
            />

        </section>
    )
}