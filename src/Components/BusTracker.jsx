import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import BusButton from './BusButton'
import './BusTracker.css';

const redTheme = createMuiTheme({
    palette: {
        primary: red,
    },
});

const greenTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#357a38',
        },
    },
});

const blueTheme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class BusTracker extends Component {
    render(props) {
        return (
            <div className="bus-tracker">
                <h1>What bus are you driving today?
                    <span role="img" aria-label="Bus">🚌</span>
                </h1>
                <div className="bus-buttons">
                    <MuiThemeProvider theme={redTheme}>
                        <BusButton busColour='Red'>Red bus</BusButton>
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={greenTheme}>
                        <BusButton busColour='Green'>Green bus</BusButton>
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={blueTheme}>
                        <BusButton busColour='Blue'>Blue bus</BusButton>
                    </MuiThemeProvider>
                </div>
            </div >
        );
    }
}

export default BusTracker;