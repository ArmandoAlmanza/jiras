import ListAllTickets from "./components/ListTickets/ListAllTickets";
import CreateTickets from "./components/CreateTickets/CreateTickets";
import Menu from "./components/Menu";
import { useState } from "react";

const App = () => {
    const [jiraTickets, setJiraTickets] = React.useState([]);
    const [activeView, setActiveView] = React.useState("dashboard");

    React.useEffect(() => {
        google.script.run
            .withSuccessHandler((tickets) => {
                setJiraTickets(
                    Array.isArray(tickets) ? tickets : []
                );
            })
            .withFailureHandler((error) => {
                console.error(
                    "Error al obtener los tickets:",
                    error
                );

                setJiraTickets([]);
            })
            .getAllYourTickets();
    }, []);

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
            <Menu
                activeView={activeView}
                setActiveView={setActiveView}
            />

            <main className="flex-1 max-h-screen overflow-y-scroll">
                {renderContent()}
            </main>
        </div>
    );
};


export default App;
