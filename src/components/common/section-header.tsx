import BlurText from "../BlurText"

type Props = {
    heading: string
    title: string
    description?: string
}

const SectionHeader = (props: Props) => {
    return (
        <div className="text-center! mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
                <div className="px-4 py-2 text-sm font-semibold rounded-full border border-black/20 text-black">
                    {props.heading}
                </div>
            </div>

            <div className="px-2 w-full font-bold irvin-header  mx-auto flex! items-center! justify-center! text-center!">
                <BlurText
                    text={props.title}
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-2xl md:text-3xl mb-8 text-center!"
                />

            </div>

            {props.description && <p className="text-lg text-foreground max-w-3xl mx-auto">
                {props.description}
            </p>}
        </div>
    )
}

export default SectionHeader