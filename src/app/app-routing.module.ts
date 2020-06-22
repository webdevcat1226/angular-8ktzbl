import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
    path: '', component: ProductListComponent,
  },
  {
    path: 'products/:productId', component: ProductDetailsComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
