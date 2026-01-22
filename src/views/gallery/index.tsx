import img_01 from "@/assets/gallery/01.jpg";
import img_02 from "@/assets/gallery/02.jpg";
import img_03 from "@/assets/gallery/03.jpg";

import SectionHeader from "@/components/common/section-header";
import DomeGallery, { type ImageItem } from "@/components/DomeGallery";

export default function Gallery() {
    const partners: ImageItem[] = [
        {
            alt: "Kidlon",
            src: img_01,
        },
        {
            alt: "Pentagon International",
            src: img_02,
        },
        {
            alt: "YGF Digital",
            src: img_03,
        },
    ]


    return (
        <section className="py-20 bg-background" id="gallery">
            <SectionHeader
                heading="Our Activities"
                title="Our Activity Gallery"
            />

            <div style={{ width: '100vw', height: '100vh' }}>
                <DomeGallery
                    fit={1}
                    minRadius={1000}
                    maxVerticalRotationDeg={2}
                    segments={40}
                    dragDampening={0}
                    autoRotate={true}
                    autoRotateDirection="left"
                    autoRotateSpeed={5}
                    grayscale={false}
                    images={partners}
                />
            </div>
        </section>

    );
}