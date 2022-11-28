import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import Root from './routes';
import UsersList from './context/context';
import { ConsulationPovider } from './context/consultation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UsersList>
      <ConsulationPovider>
        <Root />
      </ConsulationPovider>
    </UsersList>
  </React.StrictMode>
);
