import Home from '../frontend/Home';
import About from '../frontend/About';
import Blog from '../frontend/Blog';
import Contact from '../frontend/Contact';
import Lay3 from '../frontend2/Lay3';
import Page1 from '../frontend2/Page1';
import Page2 from '../frontend2/Page2';

const routes = [
    { path: '/', exact:true, name:'Home', component: Home },
    { path: '/about', exact:true, name:'About', component: About },
    { path: '/blog', exact:true, name:'Blog', component: Blog },
    { path: '/contact', exact:true, name:'Contact', component: Contact },
    // Layout 3
    { path: '/lay3', exact:true, name:'Lay3', component: Lay3 },
    { path: '/lay3/page1', exact:true, name:'Page1', component: Page1 },
    { path: '/lay3/page2', exact:true, name:'Page2', component: Page2 },

]
export default routes;