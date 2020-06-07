import React, { Component } from 'react'

export default class IntervalClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    tick = ()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    componentDidMount(){
        const interval = setInterval(this.tick, 1000);
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}
