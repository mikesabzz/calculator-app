import React from 'react';

const SecondInput = (props) => {
    return (
        <div>
            <button onClick={props.handleNum2Props} value="1" className="btn btn-warning m-1 btn-lg">1</button>
            <button onClick={props.handleNum2Props} value="2" className="btn btn-warning m-1 btn-lg">2</button>
            <button onClick={props.handleNum2Props} value="3" className="btn btn-warning m-1 btn-lg">3</button>
            <br />
            <button onClick={props.handleNum2Props} value="4" className="btn btn-warning m-1 btn-lg">4</button>
            <button onClick={props.handleNum2Props} value="5" className="btn btn-warning m-1 btn-lg">5</button>
            <button onClick={props.handleNum2Props} value="6" className="btn btn-warning m-1 btn-lg">6</button>
            <br />
            <button onClick={props.handleNum2Props} value="7" className="btn btn-warning m-1 btn-lg">7</button>
            <button onClick={props.handleNum2Props} value="8" className="btn btn-warning m-1 btn-lg">8</button>
            <button onClick={props.handleNum2Props} value="9" className="btn btn-warning m-1 btn-lg">9</button>
            <br />
            <button onClick={props.handleNum2Props} value="0" className="btn btn-warning m-1 btn-lg">0</button>
            <button onClick={props.handleNum2Props} value="." className="btn btn-warning m-1 btn-lg">.</button>
        </div>
    )
}

export default SecondInput