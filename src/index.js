import React from 'react';
import ReactDOM from 'react-dom';
import BusTracker from './Components/BusTracker';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'typeface-roboto'

ReactDOM.render(<BusTracker />, document.getElementById('root'));
registerServiceWorker();
