import React from 'react';

const Display = ({ strikes, balls }) => {
    return (
        <div>
            <h2>Count:</h2>
            <p>
                Strikes: <span data-testid='strikes'>{strikes}</span>
            </p>
            <p>
                Balls: <span data-testid='balls'>{balls}</span>
            </p>
        </div>
    );
};

export default Display;