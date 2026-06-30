import ListAllTickets from "./components/ListTickets/ListAllTickets";
import CreateTickets from "./components/CreateTickets/CreateTickets";
import Menu from "./components/Menu";
import { useState } from "react";

const App = () => {
    const jiraTickets = [
        {
            title: "Implementar autenticación con OAuth2",
            description:
                "Agregar inicio de sesión mediante Google y Microsoft utilizando OAuth2 y JWT.",
            assignee: {
                name: "Ana Martínez",
                photo: "https://i.pravatar.cc/150?img=5",
            },
            dueDate: "2026-07-08",
            status: "New",
        },
        {
            title: "Corregir error en cálculo de impuestos",
            description:
                "El total del IVA se calcula incorrectamente cuando existen descuentos acumulados.",
            assignee: {
                name: "Carlos Ramírez",
                photo: "https://i.pravatar.cc/150?img=12",
            },
            dueDate: "2026-07-02",
            status: "Analysing",
        },
        {
            title: "Optimizar consultas a MongoDB",
            description:
                "Reducir el tiempo de respuesta de las consultas principales agregando índices.",
            assignee: {
                name: "Fernanda López",
                photo: "https://i.pravatar.cc/150?img=32",
            },
            dueDate: "2026-07-15",
            status: "Ready",
        },
        {
            title: "Diseñar pantalla de gestión de usuarios",
            description:
                "Crear el diseño responsive para la administración de usuarios y roles.",
            assignee: {
                name: "Miguel Hernández",
                photo: "https://i.pravatar.cc/150?img=18",
            },
            dueDate: "2026-07-05",
            status: "In Progress",
        },
        {
            title: "Actualizar documentación de la API",
            description:
                "Agregar ejemplos de consumo para los nuevos endpoints de inventario.",
            assignee: {
                name: "Sofía Torres",
                photo: "https://i.pravatar.cc/150?img=47",
            },
            dueDate: "2026-07-10",
            status: "Test",
        },
        {
            title: "Agregar pruebas unitarias al módulo de ventas",
            description:
                "Incrementar la cobertura de pruebas al 85% para el microservicio de ventas.",
            assignee: {
                name: "Diego Pérez",
                photo: "https://i.pravatar.cc/150?img=41",
            },
            dueDate: "2026-07-18",
            status: "Ready To Verify",
        },
        {
            title: "Implementar notificaciones por correo",
            description:
                "Enviar correos automáticos al crear y cerrar incidencias.",
            assignee: {
                name: "Laura Sánchez",
                photo: "https://i.pravatar.cc/150?img=24",
            },
            dueDate: "2026-07-12",
            status: "Accepted",
        },
        {
            title: "Refactorizar servicio de inventario",
            description:
                "Separar la lógica de negocio en servicios más pequeños siguiendo arquitectura limpia.",
            assignee: {
                name: "Javier Gómez",
                photo: "https://i.pravatar.cc/150?img=68",
            },
            dueDate: "2026-07-20",
            status: "Ready to Deploy",
        },
        {
            title: "Corregir fuga de memoria en el Gateway",
            description:
                "Identificar y solucionar el consumo excesivo de memoria bajo alta carga.",
            assignee: {
                name: "Valeria Cruz",
                photo: "https://i.pravatar.cc/150?img=49",
            },
            dueDate: "2026-07-22",
            status: "To Rework",
        },
        {
            title: "Eliminar código legado del módulo financiero",
            description:
                "Retirar clases obsoletas y actualizar dependencias relacionadas.",
            assignee: {
                name: "Roberto Castillo",
                photo: "https://i.pravatar.cc/150?img=60",
            },
            dueDate: "2026-07-28",
            status: "Discarded",
        },
        {
            title: "Desplegar versión 2.4.0 a producción",
            description:
                "Realizar el despliegue de la nueva versión durante la ventana de mantenimiento.",
            assignee: {
                name: "Paola Ríos",
                photo: "https://i.pravatar.cc/150?img=23",
            },
            dueDate: "2026-07-30",
            status: "Deployed",
        },
    ];
    const [activeView, setActiveView] = useState("dashboard");

    const renderContent = () => {
        switch (activeView) {
            case "dashboard":
                return <ListAllTickets jiras={jiraTickets} />;

            case "tickets":
                return <CreateTickets />;

            case "releases":
                return <ListAllTickets jiras={jiraTickets} />;

            case "reports":
                return <ListAllTickets jiras={jiraTickets} />;

            case "team":
                return <ListAllTickets jiras={jiraTickets} />;

            default:
                return <ListAllTickets jiras={jiraTickets} />;
        }
    };

    return (
        <div className="flex">
            <Menu activeView={activeView} setActiveView={setActiveView} />

            <main className="flex-1">{renderContent()}</main>
        </div>
    );
};

export default App;
