import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import Root from './routes';
import UsersList from './context/context';
import { ConsulationPovider } from './context/consultation';
import { DietPovider } from './context/diet';
import { ManagersPovider } from './context/managers';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UsersList>
      <ConsulationPovider>
        <DietPovider>
          <ManagersPovider>
            <Root />
          </ManagersPovider>
        </DietPovider>
      </ConsulationPovider>
    </UsersList>
  </React.StrictMode>
);
