const Feature = () => {
    const currentYear = new Date().getFullYear();

    const quarters = ["Q1", "Q2", "Q3", "Q4"];
    return (
        <form
            id="formFeature"
            className="w-full bg-[#1F2937] rounded-3xl border border-blue-500 shadow-[0_0_30px_-5px_rgba(0,19,145,0.35)] lg:p-8 p-4 text-[0.9rem]"
        >
            <h3 className="text-2xl font-bold text-center mb-8 tracking-wide text-blue-100">
                Crear Feature Jira
            </h3>

            <section className="space-y-4">
                {/* Summary, Team and Labels */}
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="workspaceFeature"
                        >
                            Workspace:
                        </label>

                        <select
                            id="workspaceFeature"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                            placeholder="Workspace"
                            required
                        >
                            <option value="MCONTRACTI">
                                Procesos y contrataciones APX
                            </option>

                            <option value="MCONTRACT1">Bóveda Digital</option>

                            <option value="MLOCALSERV">
                                Plataforma de generación de documentos
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="type"
                        >
                            Team:
                        </label>

                        <select
                            id="type"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                            placeholder="Description de la tarea a realizar"
                            required
                        >
                            <option value="SaaPoptimizaciones">
                                Salud Aplicativa
                            </option>

                            <option value="DaDincidentesPro">Día a día</option>
                            <option value="EvolDelegacion">Evolutivos</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="labels"
                        >
                            Labels:
                        </label>
                        <input
                            type="text"
                            id="labels"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3) disabled:bg-gray-800"
                            placeholder="#Optimizaciones"
                            value={"#Optimizaciones"}
                            disabled
                        />
                    </div>
                </div>

                {/* Summary and description */}
                <div className="grid grid-cols-2 content-center gap-5">
                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="summaryFeature"
                        >
                            Summary:
                        </label>

                        <input
                            type="text"
                            id="summaryFeature"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)"
                            placeholder="Titulo ticket Jira"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="description"
                        >
                            Description:
                        </label>

                        <textarea
                            id="description"
                            rows="2"
                            cols="35"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                            placeholder="Ex: Yo como desarrollador del ops requiero realizar ..."
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Sprint and Q Stimate */}
                <div className="flex flex-col">
                    <section className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                className="text-sm font-semibold mb-2 text-blue-100"
                                htmlFor="sprint"
                            >
                                Sprint:
                            </label>

                            <select
                                id="sprint"
                                className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                                placeholder="Description de la tarea a realizar"
                                required
                            >
                                <option value="Sprint 1">Sprint 1</option>

                                <option value="Sprint 2">Sprint 2</option>

                                <option value="Sprint 3">Sprint 3</option>

                                <option value="Sprint 4">Sprint 4</option>

                                <option value="Sprint 5">Sprint 5</option>

                                <option value="Sprint 6">Sprint 6</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="text-sm font-semibold mb-2 text-blue-100"
                                htmlFor="quarter"
                            >
                                Q estimado:
                            </label>

                            <select
                                id="quarter"
                                className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white"
                                required
                            >
                                {quarters.map((quarter) => (
                                    <option
                                        key={quarter}
                                        value={`#${currentYear}-${quarter}`}
                                    >
                                        {quarter}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>
                </div>

                {/* Acceptance Criteria, DOR and DOD */}
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="acceptanceCriteria"
                        >
                            Acceptance Criteria:
                        </label>

                        <div className="flex items-start w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400">
                            <span className="text-gray-300 whitespace-nowrap">
                                Yo como desarrollador del OPS&nbsp;
                            </span>

                            <textarea
                                id="acceptanceCriteria"
                                rows="2"
                                className="flex-1 bg-transparent outline-none resize-none"
                                placeholder=" necesito..."
                                required
                                minLength="10"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="definitionOfDone"
                        >
                            Definiton of Ready:
                        </label>

                        <input
                            type="text"
                            id="definitionOfReady"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)"
                            placeholder="Requerimento para empezar desarrollo"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="text-sm font-semibold mb-2 text-blue-100"
                            htmlFor="definitionOfDone"
                        >
                            Definiton of Done:
                        </label>

                        <input
                            type="text"
                            id="definitionOfDone"
                            className="w-full bg-[#111827] border border-blue-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)"
                            placeholder="Definición para dar desarrollo por terminado"
                            required
                        />
                    </div>
                </div>

                <button
                    id="sendFormFeature"
                    className="mt-10 border-2 rounded-[0.7rem] w-full bg-blue-600 text-blue-50 py-2 border-blue-600 shadow-md shadow-blue-500/50 hover:ring-4 ring-blue-500/50 transform transition duration-300 hover:brightness-100 brightness-75"
                >
                    Crear Feature 🚀
                </button>
            </section>
        </form>
    );
};

export default Feature;
