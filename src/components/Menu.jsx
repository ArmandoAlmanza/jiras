export default function Menu() {
    return (
        <aside className="w-72 h-screen bg-white border-r border-gray-200 p-6 flex flex-col">

            <div>
                <h1 className="text-3xl font-black">Contracting HUB</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Jira Dashboard
                </p>
            </div>

            <nav className="mt-10 flex flex-col gap-2">

                <button className="text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                    Dashboard
                </button>

                <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                    Tickets
                </button>

                <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                    Releases
                </button>

                <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                    Reports
                </button>

                <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                    Team
                </button>

            </nav>

        </aside>
    );
}