import './style.css';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {addToLayout,createNavbar,createMain,createFooter} from './layout';


addToLayout(
    createNavbar(icon, 'todo', []),
    createMain(),
    createFooter(githubLogo,"DL-GIT101"),
    );

