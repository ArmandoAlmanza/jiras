import Card from "./Card";

const ListAllTickets = ({ jiras }) => {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-4 p-5 gap-5">
                {jiras.map((jira, i) => (
                    <Card
                        key={i}
                        title={jira.title}
                        description={jira.description}
                        asigneeName={jira.assignee.name}
                        dueDate={jira.dueDate}
                        asigneePhoto={jira.assignee.photo}
                        status={jira.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListAllTickets;
