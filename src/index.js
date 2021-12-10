// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Store from redux
import store from 'src/store';

// import the main component
import App from 'src/containers/App';

// import the routing package
import { BrowserRouter as Router } from 'react-router-dom';

// == Render
// 1. React Root Element : hosts the entire App and structures it (virtual DOM)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
// 2. The target of the DOM in the HTML index
const target = document.getElementById('root');

// 3. initiating render to reconcile the true DOM with the virtual DOM
render(rootReactElement, target);
