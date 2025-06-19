import React, { useState } from 'react';

export default function Greet() {
    const [isGreeting, setIsGreeting] = useState(true);

    const toggleGreeting = () => {
        setIsGreeting(!isGreeting);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <h1>{isGreeting ? 'Hello, User!' : 'Goodbye, User!'}</h1>
            <button onClick={toggleGreeting}>
                {isGreeting ? 'Say Goodbye' : 'Say Hello'}
            </button>
        </div>
    )
}