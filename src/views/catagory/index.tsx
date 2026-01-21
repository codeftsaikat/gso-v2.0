import SectionHeader from "@/components/common/section-header";
import ExpandableCardDemo from "./category"; // Use local component

const CategoriesSection = () => {
    return (
        <section id="categories-section" className="py-16 md:py-24 text-black relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100"
        >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto">
                {/* Header Section */}
                <SectionHeader
                    heading="Learning Pathways"
                    title="Specially Designed Categories"
                />
                <ExpandableCardDemo />
            </div>
        </section >
    );
};

export default CategoriesSection;