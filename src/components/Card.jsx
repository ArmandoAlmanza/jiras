const Card = ({
    title,
    description,
    asigneeName,
    dueDate,
    asigneePhoto,
    status,
}) => {
    const statusColors = {
        New: "bg-gray-400",
        Analysing: "bg-gray-600",

        Ready: "bg-amber-500",

        "In Progress": "bg-blue-400",
        Test: "bg-blue-600",
        "Ready To Verify": "bg-blue-800",

        Accepted: "bg-green-400",
        "Ready to Deploy": "bg-green-600",
        Deployed: "bg-green-800",

        "To Rework": "bg-orange-500",

        Discarded: "bg-red-500",
    };

    return (
        <article className="border border-gray-200 p-5 rounded-2xl">
            <header className="relative flex justify-between items-center pb-4 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[95%] after:h-[2.7px] after:bg-gray-200">
                <h1 className="font-bold text-2xl">{title}</h1>
                <span
                    className={`h-3.5 w-3.5 rounded-full border border-white/40 shadow-sm ${statusColors[status]}`}
                />
            </header>
            <main className="w-full pt-2 relative flex justify-between items-center pb-4 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[95%] after:h-[2.7px] after:bg-gray-200 ">
                <p className="text-lg">{description}</p>
            </main>
            <footer className="flex gap-5 justify-between items-center">
                <div className="flex items-center content-center gap-2 p-2">
                    <img
                        src={asigneePhoto.toString()}
                        alt="asignee photo"
                        className="max-w-6.25 rounded-full"
                    />
                    <p className="font-bold text-blue-700">{asigneeName}</p>
                </div>
                <p>
                    Due date: <span className="font-bold">{dueDate}</span>
                </p>
            </footer>
        </article>
    );
};

export default Card;
