import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class BusButton extends Component {
    state = { busColour: '' }
    
    handleClick = () => {
        console.log(this.props.busColour)
    }

    render(props) {
        return (
            <Button variant="contained" color="primary"
                onClick={this.handleClick}>{this.props.children}</Button>
        )
    }
}

export default BusButton;