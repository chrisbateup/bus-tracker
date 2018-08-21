import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class BusButton extends Component {
    state = { busColour: '' }

    render(props) {
        return (
            <Button fullWidth variant="contained" color="primary"
                onClick={this.props.onClick}>{this.props.children}</Button>
        )
    }
}

export default BusButton;