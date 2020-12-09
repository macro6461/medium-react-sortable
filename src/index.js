import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  // removing StrictMode because of error in console relating to findDOMNode (probably part of react-sortable-hoc)
    <App />,
  // </React.StrictMode>
  document.getElementById('root')
);
