import React from 'react';

function Footer(props) {
    return (
        <div className="p-1 bg-dark text-white">
            <p>{props.text}</p>
        </div>
    )
}
export default Footer