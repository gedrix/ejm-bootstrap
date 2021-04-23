

import "bootstrap/dist/css/bootstrap.min.css";
import './../css/style.scss';
import  {router} from './../router/index.routes';


window.addEventListener('hashchange', () =>{
    router(window.location.hash)
})