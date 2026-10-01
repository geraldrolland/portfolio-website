import { indexLabel } from "./ui";

type LabelPropType = {
    title: string,
    description?: string,
    index?: string,
    as?: "h1" | "h2",
};

const Label = ({ title, description, index, as: Heading = "h2" }: LabelPropType) => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-4">
                {index && (
                    <span className={`${indexLabel} shrink-0`}>
                        {index}
                    </span>
                )}
                <span className="h-px flex-1 bg-line" aria-hidden="true"></span>
            </div>
            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
                <Heading className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
                    {title}
                </Heading>
                {description && (
                    <p className="text-sm leading-relaxed text-muted md:max-w-sm md:text-right">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Label;
