import './style.css';
import icon from './img/icon.svg';
import {addToLayout,createNavbar} from './layout';


addToLayout(
    createNavbar(icon, 'todo', []),

    );

