
type Props = {
    heading: string
    title: string
    description?: string
}

const SectionHeader = (props: Props) => {
    return (
        <div className="text-center! mb-12 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
                <div className="px-4 py-2 text-sm font-semibold rounded-full border border-black/20 text-black">
                    {props.heading}
                </div>
            </div>

            <div className="px-2 w-full font-semibold irvin-header  mx-auto flex! items-center! justify-center! text-center!">
                <p
                    className="text-3xl md:text-4xl mb-8 text-center!"
                >
                    {props.title}
                </p>

            </div>

            {props.description && <p className="text-lg text-foreground max-w-3xl mx-auto">
                {props.description}
            </p>}
        </div>
    )
}

export default SectionHeader