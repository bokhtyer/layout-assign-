import Admin from '../admin/Admin'
import Forum from '../admin/Forum';
import Product from '../admin/Product';

const adminroutes = [
    { path: '/admin', exact:true, name:'Admin', component: Admin },
    { path: '/admin/forum', exact:true, name:'Forum', component: Forum },
    { path: '/admin/product', exact:true, name:'Product', component: Product },
]
export default adminroutes;