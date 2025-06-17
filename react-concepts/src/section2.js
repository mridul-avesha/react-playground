const user = {
    name: 'Jane Doe',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    profession: 'React Developer',
}

function Card({ children }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        maxWidth: 300,
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };
    return <div style={cardStyle}>{children}</div>;
}

export default function Profile() {
    const imageStyle = {
        width: 100,
        height: 100,
        borderRadius: '50%',
    }
    return (
        <Card>
            <img
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={imageStyle}
                />
            <h1>{user.name}</h1>
            <p>{user.profession}</p>
        </Card>
    );
}