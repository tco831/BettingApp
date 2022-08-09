import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ExplainerComponent } from './explainer/explainer.component';

const routes: Routes = [
  // { path: 'explainer-component', component: ExplainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
