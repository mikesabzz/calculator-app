import React from 'react';



class Operations extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        // this.handleSubtract = this.handleSubtract.bind(this)
        // this.handleMultiply = this.handleMultiply.bind(this)
        // this.handleDivide = this.handleDivide.bind(this)
    }
    handleAdd() {
        parseInt(props.num1) + parseInt(props.num2)
    }
    render() {
        return (
            <div className="col-sm">
                <button onClick={this.handleAdd} value="+" className="btn btn-dark m-1 btn-lg">+</button>
                <button onClick={this.handleSubtract} value="-" className="btn btn-dark m-1 btn-lg">-</button>
                <button onClick={this.handleMultiply} value="x" className="btn btn-dark m-1 btn-lg">x</button>
                <button onClick={this.handleDivide} value="/" className="btn btn-dark m-1 btn-lg">/</button>
            </div>
        )
    }
}
export default Operations