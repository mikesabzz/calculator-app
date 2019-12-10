import React from 'react';
import Calculator from '../Calculator'

class FirstInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num1: props.num1
        }
        // this.handleNum1Change = this.handleNum1Change.bind(this)
    }
    // handleNum1Change(event) {
    //     console.log("num1")
    //     this.setState({
    //         num1: [...this.state.num1, event.target.value].join('')
    //     })
    // }
    render() {
        return (
            <Calculator>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="1" className="btn btn-dark m-1 btn-lg">1</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="2" className="btn btn-dark m-1 btn-lg">2</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="3" className="btn btn-dark m-1 btn-lg">3</button>
                <br />
                <button onClick={()=>Calculator.current.handleNum1Change()} value="4" className="btn btn-dark m-1 btn-lg">4</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="5" className="btn btn-dark m-1 btn-lg">5</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="6" className="btn btn-dark m-1 btn-lg">6</button>
                <br />
                <button onClick={()=>Calculator.current.handleNum1Change()} value="7" className="btn btn-dark m-1 btn-lg">7</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="8" className="btn btn-dark m-1 btn-lg">8</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="9" className="btn btn-dark m-1 btn-lg">9</button>
                <br />
                <button onClick={()=>Calculator.current.handleNum1Change()} value="0" className="btn btn-dark m-1 btn-lg">0</button>
                <button onClick={()=>Calculator.current.handleNum1Change()} value="." className="btn btn-dark m-1 btn-lg">.</button>
            </Calculator>
        )
    }
}
export default FirstInput