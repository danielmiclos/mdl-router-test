import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.blue_grey-blue.min.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
