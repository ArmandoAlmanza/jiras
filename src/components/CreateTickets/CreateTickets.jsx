import { useState } from "react";

import Feature from "./Forms/Feature";
import Story from "./Forms/Story";
import Task from "./Forms/Task";

const CreateTickets = () => {
    const [activeForm, setActiveForm] = useState("feature");

    const menuElements = [
        {
            id: "feature",
            title: "Crear Feature",
            icon: "➕",
            src: "https://assets.bbvaexperience.com/spherica/visual/microillustrations/rule-glass.png",
            description:
                "Creación de features para crear implementaciones o versionado en proyectos",
            footer: "Accede al formulario correspondiente para crear Feature",
            color: "blue",
            component: <Feature />,
        },
        {
            id: "story",
            title: "Crear Story",
            icon: "🔱",
            src: "https://assets.bbvaexperience.com/spherica/visual/microillustrations/rocket-glass.png",
            description:
                "Creación de Historias de usuario asociadas a features para seguimiento de actividades de la feature",
            footer: "Accede al formulario correspondiente para crear Story",
            color: "amber",
            component: <Story />,
        },
        {
            id: "task",
            title: "Crear Task",
            icon: "✔️",
            src: "https://assets.bbvaexperience.com/spherica/visual/microillustrations/task-list-glass.png",
            description:
                "Creación de Tareas para trazabilidad de productividad en tablero kanban",
            footer: "Accede al formulario correspondiente para crear Task L1",
            color: "violet",
            component: <Task />,
        },
    ];

    const activeComponent = menuElements.find(
        (element) => element.id === activeForm
    )?.component;

    return (
        <div className="grid gap-10 p-5 max-w-full w-full mt-4">

            <h1 className="text-4xl text-center">
                Creación de Tickets{" "}
                <span className="font-bold">Contracting HUB</span>
            </h1>

            <section className="lg:grid gap-10 place-content-center w-full lg:px-10 px-2 lg:grid-flow-col mx-auto auto-cols-fr">
                {menuElements.map((element, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveForm(element.id)}
                        className={`col-span-1 grid place-content-center border-2 border-${element.color}-200 text-${element.color}-100 min-h-28 rounded-lg shadow-md shadow-${element.color}-500/50 transform transition duration-300 hover:scale-105 hover:brightness-100 ${
                            activeForm === element.id
                                ? `ring-4 ring-${element.color}-200/50 brightness-100`
                                : "brightness-75"
                        }`}
                    >
                        <img
                            className="object-contain w-32 my-4 mx-auto"
                            src={element.src}
                            alt={element.title}
                        />

                        <p className="font-semibold text-[1.2rem]">
                            <span className="py-1 pr-2">
                                {element.icon}
                            </span>
                            {element.title}
                        </p>

                        <p className="text-[0.8rem] pt-4 px-5">
                            {element.description}
                        </p>

                        <p className="text-sm bg-gray-800 w-full p-5 rounded-br-lg rounded-bl-lg my-5">
                            {element.footer}
                        </p>
                    </button>
                ))}
            </section>

            <section className="mt-5">
                {activeComponent}
            </section>

        </div>
    );
};

export default CreateTickets;