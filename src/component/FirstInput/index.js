import React from 'react';


const FirstInput = (props) => {
    return (
        <div>
            <button onClick={props.clear} value="" className="btn btn-dark m-1 btn-lg">AC</button>
            <button onClick={props.handleNum1Props} value="" className="btn btn-dark m-1 btn-lg">-</button>
            <button onClick={props.handleNum1Props} value="" className="btn btn-dark m-1 btn-lg">%</button>
            <button onClick={props.handleNum1Props} value="/" className="btn btn-secondary m-1 btn-lg">/</button>
            <br />
            <button onClick={props.handleNum1Props} value="7" className="btn btn-success m-1 btn-lg">7</button>
            <button onClick={props.handleNum1Props} value="8" className="btn btn-success m-1 btn-lg">8</button>
            <button onClick={props.handleNum1Props} value="9" className="btn btn-success m-1 btn-lg">9</button>
            <button onClick={props.handleNum1Props} value="*" className="btn btn-secondary m-1 btn-lg">x</button>
            <br />
            <button onClick={props.handleNum1Props} value="4" className="btn btn-success m-1 btn-lg">4</button>
            <button onClick={props.handleNum1Props} value="5" className="btn btn-success m-1 btn-lg">5</button>
            <button onClick={props.handleNum1Props} value="6" className="btn btn-success m-1 btn-lg">6</button>
            <button onClick={props.handleNum1Props} value="-" className="btn btn-secondary m-1 btn-lg">-</button>
            <br />
            <button onClick={props.handleNum1Props} value="1" className="btn btn-success m-1 btn-lg">1</button>
            <button onClick={props.handleNum1Props} value="2" className="btn btn-success m-1 btn-lg">2</button>
            <button onClick={props.handleNum1Props} value="3" className="btn btn-success m-1 btn-lg">3</button>
            <button onClick={props.handleNum1Props} value="+" className="btn btn-secondary m-1 btn-lg">+</button>
            <br />
            <button onClick={props.handleNum1Props} value="0" className="btn btn-success w-25 m-1 btn-lg">0</button>
            <button onClick={props.handleNum1Props} value="." className="btn btn-success m-1 btn-lg">.</button>
            <button onClick={props.result} value="=" className="btn btn-secondary m-1 btn-lg">=</button>
        </div>
    )
}

export default FirstInput