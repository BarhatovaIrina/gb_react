import React, {Component} from 'react';

export class Button extends Component {
    render (){
        return <button onClick={this.props.click}> click me</button>
    }
}