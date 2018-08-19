import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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
            <React.Fragment>
                <CssBaseline />
                <div className="bus-tracker">
                    <h1>Which bus are you driving today?
                        <span role="img" aria-label="Bus">🚌</span>
                    </h1>
                    <div className="bus-buttons">
                        <MuiThemeProvider theme={redTheme}>
                            <BusButton busColour='red'>Red bus</BusButton>
                        </MuiThemeProvider>
                        <MuiThemeProvider theme={greenTheme}>
                            <BusButton busColour='green'>Green bus</BusButton>
                        </MuiThemeProvider>
                        <MuiThemeProvider theme={blueTheme}>
                            <BusButton busColour='blue'>Blue bus</BusButton>
                        </MuiThemeProvider>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BusTracker;