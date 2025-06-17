const users = [
    { id: 1, name: 'Alice', skill: "Frontend Dev" },
    { id: 2, name: 'Bob', skill: "Backend Dev" },
    { id: 3, name: 'Charlie', skill: "Full Stack Dev" },
    { id: 4, name: 'Diana', skill: "UI/UX Designer" },
    { id: 5, name: 'Eve', skill: "Data Scientist" },
]

function UserCard({ name, skill }) {
    const cardStyle = {
        borderBottom: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
    };
    return (
        <div style={cardStyle}>
            <strong>{name}</strong> - {skill}
        </div>
    )
}

export default function UserList() {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.skill}
                    </li>
                ))}
            </ul>
            <h1>User Table</h1>
            {users.map(user => (
                <UserCard key={user.id} name={user.name} skill={user.skill} />
            ))}
        </div>
    );
}
