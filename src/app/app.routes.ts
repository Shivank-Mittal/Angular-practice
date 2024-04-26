import { Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { JsComponent } from './pages/js/js.component';

export const routes: Routes = [
    { path: 'page-one', component: PageOneComponent},
    { path: 'js-practice', component: JsComponent},
    { path: '**', redirectTo: '/page-one', pathMatch: 'full'}
];
