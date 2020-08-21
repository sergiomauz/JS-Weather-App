import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';

document.body.appendChild(Layout.create());
Layout.loadPage(Home);