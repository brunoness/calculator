import React, { Component } from 'react'
import '../style/calculator.css'
import '../components/Button'
import Button from '../components/Button'
import Display from '../components/Display'


export default class Calculator extends Component {

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('Clean')
    }

    setOperation(operation) {

    }

    addDigit(x){
        console.log(x)
    }

    render() {

        return (
            <div className="calculator">
                <Display value={10000000000} />
                <Button label="7" click={this.addDigit} /> 
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="AC" click={this.clearMemory()} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="X" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="=" click={this.setOperation} operation/>

            </div>
        )

    }


}