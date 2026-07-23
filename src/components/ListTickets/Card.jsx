import { useCallback, useState } from "react";
import TicketModal from "./TicketModal";

const DESCRIPTION_MAX_LENGTH = 180;

const truncateText = (text = "", maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength).trimEnd()}...`;
};

const Card = ({ jira }) => {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    const statusColors = {
        New: "bg-gray-400",
        Analysing: "bg-slate-500",
        "In Progress": "bg-blue-500",
        Test: "bg-cyan-600",
        "Ready To Verify": "bg-indigo-600",
        Accepted: "bg-emerald-400",
        "Ready to Deploy": "bg-green-600",
        Deployed: "bg-green-800",
        Deleted: "bg-red-500",
    };

    const openSummary = useCallback(() => {
        setIsSummaryOpen(true);
    }, []);

    const closeSummary = useCallback(() => {
        setIsSummaryOpen(false);
    }, []);

    const idArranged = jira.id?.split("-").pop() ?? jira.id;

    const shortenedDescription = truncateText(
        jira.description,
        DESCRIPTION_MAX_LENGTH,
    );

    return (
        <>
            <article
                className="flex h-87.5 w-full flex-col overflow-hidden
          rounded-2xl border border-gray-200
          px-5 pt-5 pb-2.5"
            >
                <header
                    className="relative flex min-h-25 shrink-0
            items-start justify-between gap-4 pb-2
            after:absolute after:bottom-0 after:left-1/2
            after:h-[2.7px] after:w-[95%]
            after:-translate-x-1/2 after:bg-gray-200"
                >
                    <h1
                        title={jira.title}
                        className="min-w-0 flex-1
              line-clamp-3 text-xl font-bold leading-tight"
                    >
                        {jira.title}
                    </h1>

                    <a
                        href={`https://jira.globaldevtools.bbva.com/browse/${jira.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 pt-1 text-lg font-bold text-sky-400"
                    >
                        {idArranged}
                    </a>
                </header>

                <main className="relative min-h-0 flex-1 overflow-hidden pt-3 pb-4 after:absolute after:bottom-0 after:left-1/2 after:h-[2.7px] after:w-[95%] after:-translate-x-1/2 after:bg-gray-200">
                    <p className="text-lg leading-7" title={jira.description}>
                        {shortenedDescription}
                    </p>
                </main>

                <footer className="mt-2 flex shrink-0 flex-col gap-2">
                    <div className="flex min-w-0 items-center justify-between gap-3 px-2">
                        <p className="truncate font-bold text-sky-400">
                            {jira.asignee}
                        </p>

                        <span
                            title={jira.status}
                            className={`h-3.5 w-3.5 shrink-0 rounded-full border border-white/40 shadow-sm ${statusColors[jira.status] ?? "bg-gray-400"}`}
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition-colors duration-200 hover:bg-blue-700 "
                        onClick={openSummary}
                    >
                        Summary
                    </button>
                </footer>
            </article>
            <TicketModal 
                isOpen={isSummaryOpen}
                onClose={closeSummary}
                ticket={jira}
            />
        </>
    );
};
export default Card;
