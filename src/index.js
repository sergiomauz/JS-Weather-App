import './styles/dashboard.css';
import Layout from './pages/layout';
import Weather from './pages/weather';

document.body.appendChild(Layout.create());
Layout.loadPage(Weather);