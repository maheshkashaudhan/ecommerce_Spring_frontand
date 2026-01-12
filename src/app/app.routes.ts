import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Categories } from './categories/categories';
import { Products } from './products/products';
import { Orders } from './orders/orders';
import { Customers } from './customers/customers';
import { Users } from './users/users';
import { Logout } from './logout/logout';

export const routes: Routes = [
    
    {path:"", component: Login},
    {path:"dashboard",component:Dashboard},
    {path:"categories", component:Categories},
    {path:"products",component:Products},
    {path:"orders",component:Orders},
    {path:"customers",component:Customers},
    {path:"users",component:Users},
    {path:"logout",component:Logout}
];
 