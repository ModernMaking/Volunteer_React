import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calendar from 'react-calendar';
import Vacances from './Vacances'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import MapBasics from './MapBasics';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import {AddVacance}  from './AddVacance';
import main from "./images/main.png";
import { AddVolunteer } from './AddVolunteer';
import VolunteerMap from './VolunteerMap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/addVacance" element={<AddVacance />} />
      <Route path="/addVolunteer" element={<AddVolunteer />} />
      <Route path="/vacances" element={<Vacances />} />
      <Route path="/map" element={<MapBasics/>} />
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
