const Task = () => {
    const currentYear = new Date().getFullYear();

    const quarters = ["Q1", "Q2", "Q3", "Q4"];

    return (
        <form
            id="formTask"
            className="w-full bg-[#1F2937] rounded-3xl border border-violet-500 shadow-[0_0_30px_-5px_rgba(168,85,247,0.35)] lg:p-8 p-4 text-[0.9rem]"
        >
            <h3 className="text-2xl font-bold text-center mb-8 tracking-wide text-violet-100">
                Crear Task L1 Jira
            </h3>

            <section className="space-y-4">
                {/* Workspace y Types */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="workspaceTask"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Workspace:
                        </label>

                        <select
                            id="workspaceTask"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
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
                            htmlFor="typeTask"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Type:
                        </label>

                        <select
                            id="typeTask"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                            required
                        >
                            <option value="SaaPoptimizaciones">
                                Salud Aplicativa - Optimizaciones
                            </option>

                            <option value="SaaPauditoria">
                                Salud Aplicativa - Auditorías
                            </option>

                            <option value="DaDincidentesPro">
                                Día a día - Atención Incidentes Productivos
                            </option>

                            <option value="DaDIncidentesPre">
                                Día a día - Atención Incidentes Previos
                            </option>

                            <option value="DaDMonitoreo">
                                Día a día - Monitoreo
                            </option>

                            <option value="EvolNegocio">
                                Evolutivos - Evolutivos de Negocio
                            </option>

                            <option value="EvolVersionado">
                                Evolutivos - Versionado de Arquitectura
                            </option>

                            <option value="EvolDelegacion">
                                Evolutivos - Delegación BEX
                            </option>
                        </select>
                    </div>
                </div>

                {/* Summary y Description */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="summaryTask"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Summary:
                        </label>

                        <input
                            type="text"
                            id="summaryTask"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                            placeholder="Título del ticket Jira"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="descriptionTask"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Description:
                        </label>

                        <textarea
                            id="descriptionTask"
                            rows="2"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all resize-none"
                            placeholder="Descripción de la tarea"
                            required
                        />
                    </div>
                </div>

                {/* Program Increment y Sprint */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="programIncrement"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Program Increment:
                        </label>

                        <select
                            id="programIncrement"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
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

                    <div className="flex flex-col">
                        <label
                            htmlFor="sprintEstimate"
                            className="text-sm font-semibold mb-2 text-violet-100"
                        >
                            Sprint Estimate:
                        </label>

                        <select
                            id="sprintEstimate"
                            className="w-full bg-[#111827] border border-violet-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
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
                </div>

                <button
                    id="sendFormTask"
                    className="mt-10 border-2 rounded-[0.7rem] w-full bg-violet-600 text-violet-50 py-2 border-violet-600 shadow-md shadow-violet-500/50 hover:ring-4 ring-violet-500/50 transform transition duration-300 hover:brightness-100 brightness-75"
                >
                    Crear Task 🚀
                </button>
            </section>
        </form>
    );
};

export default Task;
