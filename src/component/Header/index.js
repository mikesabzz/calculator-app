import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
    return (
        <div className="font-weight-bold text-left p-3 bg-dark text-white">
            <h1>{props.title}</h1>
        </div>
    )

}
export default Header