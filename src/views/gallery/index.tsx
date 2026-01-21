import SectionHeader from "@/components/common/section-header";
import DomeGallery from "@/components/DomeGallery";

export default function Gallery() {
    return (
        <section className="py-20 bg-background">
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
                    grayscale={false}
                />
            </div>
        </section>

    );
}