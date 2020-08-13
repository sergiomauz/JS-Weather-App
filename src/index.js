import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';
import Weather from './pages/weather';


document.body.appendChild(Layout.create());
Layout.loadPage(Home);
Layout.loadPage(Weather);
