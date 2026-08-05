type LabelPropType = {
    title: string,
    description?: string,
};

const Label = ({ title, description }: LabelPropType) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
            <span className="mt-3 h-1 w-14 rounded-full bg-blue-600"></span>
            {description && <p className="mt-4 max-w-xl text-slate-600">{description}</p>}
        </div>
    )
}

export default Label;
