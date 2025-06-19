import React, { useState } from 'react';
const user = {
    name: 'Jane Doe',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 100,
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const appStyle = {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
        color: isDarkMode ? '#f5f5f5' : '#1e1e1e',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
    };
    const buttonStyle = {
        padding: '10px 20px',
        marginTop: '20px',
        cursor: 'pointer',
        borderRadius: '8px',
        backgroundColor: isDarkMode ? '#444' : '#ddd',
        color: isDarkMode ? '#fff' : '#000',
        border: 'none',
        fontWeight: 'bold',
    };
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return(
        <div style={appStyle}>
            <h1>{isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h1>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of '+ user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <button style={buttonStyle} onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}