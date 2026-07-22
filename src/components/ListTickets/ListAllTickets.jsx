import Card from "./Card";

const ListAllTickets = ({ jiras }) => {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-4 p-5 gap-5">
                {jiras.map((jira, i) => (
                    <Card
                        key={i}
                        jira={jira}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListAllTickets;
