import React from 'react';

const Index = ({handleClick, text}) => {
    return (
        <div>
            <button onClick={handleClick}>
                {text}
            </button>
        </div>
    );
}

export default Index;
