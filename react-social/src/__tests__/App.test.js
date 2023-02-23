import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';
import { Screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('Route');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('PrivateRoute');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




