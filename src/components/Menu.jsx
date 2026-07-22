const Menu = ({ activeView, setActiveView }) => {
   const itemClass = (view) =>
        `text-left px-4 py-3 rounded-lg transition ${
            activeView === view
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "hover:bg-gray-100 hover:text-blue-600"
        }`;
    return (
        <aside className="w-72 h-screen border-r border-gray-200 p-6 flex flex-col">
            <div>
                <h1 className="text-3xl font-black">Contracting HUB</h1>
                <p className="text-sm text-gray-500 mt-1">Jira Dashboard</p>
            </div>

            <nav className="mt-10 flex flex-col gap-2">
                <button
                    onClick={() => setActiveView("dashboard")}
                    className={buttonStyle("dashboard")}
                >
                    Dashboard
                </button>

                <button
                    onClick={() => setActiveView("tickets")}
                    className={buttonStyle("tickets")}
                >
                    Tickets
                </button>

                <button
                    onClick={() => setActiveView("releases")}
                    className={buttonStyle("releases")}
                >
                    Releases
                </button>

                <button
                    onClick={() => setActiveView("reports")}
                    className={buttonStyle("reports")}
                >
                    Reports
                </button>

                <button
                    onClick={() => setActiveView("team")}
                    className={buttonStyle("team")}
                >
                    Team
                </button>
            </nav>
        </aside>
    );
}

export default Menu
