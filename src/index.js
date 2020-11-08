import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './Components/Portfolio';
import { Provider } from 'overmind-react';
import { overmind } from './Others/OvermindHelper';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <CssBaseline />
      <Portfolio />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
