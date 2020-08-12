import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';
import Contact from './pages/contact';

document.body.appendChild(Layout.create());
Layout.loadPage(Contact);
Layout.loadPage(Home);