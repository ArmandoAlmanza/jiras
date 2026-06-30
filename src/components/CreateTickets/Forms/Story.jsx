const Story = () => {
    const features = [
        {
            key: "CON-101",
            title: "Implementar autenticación OAuth2",
            project: "Procesos y contrataciones APX",
        },
        {
            key: "CON-102",
            title: "Migración a Spring Boot 3",
            project: "Bóveda Digital",
        },
        {
            key: "CON-103",
            title: "Integración con Elastic",
            project: "Plataforma de generación de documentos",
        },
    ];

    return (
        <form
            id="formStory"
            className="w-full bg-[#1F2937] rounded-3xl border border-amber-500 shadow-[0_0_30px_-5px_rgba(0,19,145,0.35)] lg:p-8 p-4 text-[0.9rem]"
        >
            <h3 className="text-2xl font-bold text-center mb-8 tracking-wide text-amber-100">
                Crear Story Jira
            </h3>

            <section className="space-y-4">
                {/* Feature */}
                <div className="flex flex-col">
                    <label
                        htmlFor="featureStory"
                        className="text-sm font-semibold mb-2 text-amber-100"
                    >
                        Feature Asociada:
                    </label>

                    <select
                        id="featureStory"
                        className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                        required
                    >
                        {features.map((feature) => (
                            <option
                                key={feature.key}
                                value={`${feature.key} ${feature.project}`}
                            >
                                {feature.key} - {feature.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Summary y Description */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="summaryStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Summary:
                        </label>

                        <input
                            id="summaryStory"
                            type="text"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                            placeholder="Título ticket Jira"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="descriptionStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Description:
                        </label>

                        <textarea
                            id="descriptionStory"
                            rows="2"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                            placeholder="Descripción de la Story"
                            required
                        />
                    </div>
                </div>

                {/* Team y Tech Stack */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="teamStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Team:
                        </label>

                        <select
                            id="teamStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
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
                            htmlFor="techStackStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Tech Stack:
                        </label>

                        <select
                            id="techStackStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                        >
                            <option value="APX">APX</option>
                            <option value="ASO">ASO</option>
                            <option value="JBPM">JBPM</option>
                            <option value="Host/Mainframe">
                                Host / Mainframe
                            </option>
                        </select>
                    </div>
                </div>

                {/* Acceptance Criteria */}

                <div className="flex flex-col">
                    <label
                        htmlFor="acceptanceCriteriaStory"
                        className="text-sm font-semibold mb-2 text-amber-100"
                    >
                        Acceptance Criteria:
                    </label>

                    <div className="flex items-start w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400">
                        <span className="text-gray-300 whitespace-nowrap text-sm">
                            Yo como desarrollador del OPS&nbsp;
                        </span>

                        <textarea
                            id="acceptanceCriteriaStory"
                            rows="2"
                            className="flex-1 bg-transparent outline-none resize-none text-white text-sm"
                            placeholder="necesito..."
                            required
                        />
                    </div>
                </div>
                {/* Sprint y Due Date */}

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="sprintStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Sprint:
                        </label>

                        <select
                            id="sprintStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
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

                    <div className="flex flex-col">
                        <label
                            htmlFor="dueDateStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Due Date:
                        </label>

                        <input
                            type="date"
                            id="dueDateStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Definition of Ready, Definition of Done y Labels */}

                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col">
                        <label
                            htmlFor="definitionOfReadyStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Definition of Ready:
                        </label>

                        <input
                            type="text"
                            id="definitionOfReadyStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                            placeholder="Requerimiento para empezar la historia"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="definitionOfDoneStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Definition of Done:
                        </label>

                        <input
                            type="text"
                            id="definitionOfDoneStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                            placeholder="Definición para dar la historia por terminada"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="labelsStory"
                            className="text-sm font-semibold mb-2 text-amber-100"
                        >
                            Labels:
                        </label>

                        <input
                            type="text"
                            id="labelsStory"
                            className="w-full bg-[#111827] border border-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                            placeholder="#Story"
                            required
                        />
                    </div>
                </div>

                <button
                    id="sendFormStory"
                    className="mt-10 border-2 rounded-[0.7rem] w-full bg-amber-600 text-amber-50 py-2 border-amber-600 shadow-md shadow-amber-500/50 hover:ring-4 ring-amber-500/50 transform transition duration-300 hover:brightness-100 brightness-75"
                >
                    Crear Story 🚀
                </button>
            </section>
        </form>
    );
};

export default Story;
