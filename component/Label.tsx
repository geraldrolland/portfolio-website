type LabelPropType = {
    title: string,
    description?: string,
};

const Label = ({title, description}: LabelPropType) => {
    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className="p-2 bg-gray-700 text-white rounded-[60px] w-[120px] text-center ">{title}</h1>
            <p className="mt-2 mb-4">{description}</p>
        </div>

        </>
    )
}

export default Label;