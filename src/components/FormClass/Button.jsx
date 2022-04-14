import React, {Component, PureComponent} from 'react';

export class Button extends Component {
    constructor (props){
        super();
        this.interval = null;
    }
    render (){
        return <button onClick={this.props.click}> click me</button>
    }
    componentDidMount (){

        // демонстрация "утечки памяти"
        // this.interval = setInterval(() => {
        //     console.log(1);
        // }, 1000);

    }

    componentWillUnmount (){
       //clearInterval(this.interval);
    }

    componentDidUpdate (){
        console.log('button did update');
    }

    // shouldComponentUpdate (nextProps, nextState){
    //     if (nextProps.name !=this.props.name)
    //         return true;
    //     return false
    // }

}