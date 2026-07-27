type Props = {
    total: number;
    current: number;
    onChange: (index: number) => void;
};

const ExperienceDots = ({ total, current, onChange }: Props) => {
    return (
        <div className="flex justify-center gap-2 mt-3">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onChange(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index
                        ? "bg-primary scale-110"
                        : "bg-primary/30 hover:bg-primary/50"
                        }`}
                />
            ))}
        </div>
    );
};

export default ExperienceDots;